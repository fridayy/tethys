/**
 * TodoPage stateful component
 *
 * Passes its state down to all stateless sub components
 *
 * Created by bnjm on 12/17/16.
 */
import React, {Component, PropTypes} from 'react';
import CompleteTodoList from './CompleteTodoList';
import PagedTodoList from './PagedTodoList';
import localForage from 'localforage';
import moment from 'moment';
import TodoStoragePanel from './TodoStoragePanel';
import CloseableAlert from '../alert/CloseableAlert';
import {BACKEND_URL} from '../../commons/constants';
import AddTodoComponent from "../add-todo-component/AddTodoComponent";

class TodoPage extends Component {

    constructor(props) {
        super(props);
        // Set inital state
        this.state = {
            todos: [],
            links: '',
            page: '',
            renderAll: this.props.route.renderAll,
            lastSynched: '',
            showAlert: false
        };

        this._checkState();

        // Method bindings
        this._getNextPage = this._getNextPage.bind(this);
        this._getPreviousPage = this._getPreviousPage.bind(this);
        this._get = this._get.bind(this);
        this._post = this._post.bind(this);
        this._getPagedEntries = this._getPagedEntries.bind(this);
        this._getAllEntries = this._getAllEntries.bind(this);
        this._onClickDelete = this._onClickDelete.bind(this);
        this._deleteEntry = this._deleteEntry.bind(this);
        this._updateEntry = this._updateEntry.bind(this);
        this._onClickUpdateStatus = this._onClickUpdateStatus.bind(this);
        this._onClickAdd = this._onClickAdd.bind(this);
    }

    // If the renderAll prop changes render the correct version of the page
    componentWillReceiveProps(nextProps) {
        this.setState({renderAll: nextProps.route.renderAll});
        if (nextProps.route.renderAll) {
            this._getAllEntries();
        } else {
            this._getPagedEntries(BACKEND_URL + "/todos");
        }
    }

    _checkState() {
        // If renderAll is passed as prop from react-router all entries shall be shown
        if (this.state.renderAll) {
            this._getAllEntries();
        } else {
            this._getPagedEntries(BACKEND_URL + "/todos");
        }
    }

    // Fetches a given resource
    _get(url) {
        return fetch(url, {
            method: "GET"
        }).catch(err => console.log(err));
    }

    // Deletes a given resource
    _delete(url) {
        return fetch(url, {
            method: "DELETE"
        }).catch(err => console.log(err));
    }

    _put(url, body) {
        var header = new Headers();
        header.set("Content-Type", "application/json");
        return fetch(url, {
            method: "PUT",
            body: body,
            headers: header
        }).catch(err => console.log(err));
    }

    _post(url, body) {
        var header = new Headers();
        header.set("Content-Type", "application/json");
        return fetch(url, {
            method: "POST",
            body: body,
            headers: header
        }).catch(err => console.log(err));
    }

    _deleteEntry(key, deleteUrl) {
        localForage.removeItem(key).then(res => {
            this._delete(deleteUrl).then(res => {
                this._checkState();
            });
        }).catch(err => console.log(err));
    }

    _updateEntry(key, updateUrl) {

        let item = null;

        localForage.getItem(key).then(res => {
            res.markedDone = !res.markedDone;
            this._put(updateUrl, JSON.stringify(res)).then(res => {
                item = res;
                this._checkState()
            })
        }).catch(err => console.log(err));
    }

    _getEntries(fallBackURL) {
        let todos = [];
        if (this.state.renderAll) {
            localForage.getItem("lastSync").then(result => {
                this.setState({lastSynched: result})
            });

            localForage.length().then(numberOfKeys => {
                if (numberOfKeys === 0 || this._checkForSync(this.state.lastSynched)) {
                    this.setState({showAlert: true});
                    this._get(fallBackURL).then(data => {
                        this._getEntriesRemotely(data.json());
                    })
                }
            });
            localForage.iterate((value, key, iterationNumber) => {
                todos.push(value);
            }).then(() => {
                this.setState({
                    todos: todos,
                    lastSynched: this.state.lastSynched
                });
            });
        } else {
            this._get(fallBackURL).then(data => {
                this._getEntriesRemotely(data.json());
            });
        }

    }

    _getEntriesRemotely(data) {
        data.then(d => {
                console.log(d);
                this.setState({
                    todos: d._embedded.todoResources,
                    page: d.page,
                    links: d._links,
                    lastSynched: d.accessed.creationTime
                });
                // If there is no key passed use the pagination number returned by the backend
                this._saveEntriesToStorage(d._embedded.todoResources);
                this._saveLastSync(d.accessed.creationTime);
            }
        ).catch(err => console.log(err));
    }

    _saveEntriesToStorage(value) {
        value.forEach(entry => {
            localForage.setItem(entry.resourceId.toString(), entry).catch(err => console.log(err));
        })
    }

    _saveLastSync(value) {
        localForage.setItem("lastSync", value);
    }

    _getAllEntries() {
        this._getEntries(BACKEND_URL + "/todos?size=1000000")
    }

    _getPagedEntries(url) {
        this._getEntries(url)
    }

    _getNextPage() {
        let url = this.state.links.next.href;
        this._get(url).then(data => {
            this._getEntriesRemotely(data.json());
        });
    }

    _getPreviousPage() {
        let url = this.state.links.prev.href;
        this._get(url).then(data => {
            this._getEntriesRemotely(data.json());
        });
    }

    _onClickDelete(resourceId) {
        this._deleteEntry(resourceId, BACKEND_URL + "/todo/" + resourceId);
    }

    _onClickAdd(itemData) {
       this._post(BACKEND_URL + "/todo/", JSON.stringify(itemData)).then(response => {
           this._checkState();
       })
    }

    /**
     * Checks if its time to sync
     * @param lastSync
     * @returns {boolean}
     * @private
     */
    _checkForSync(lastSync) {
        if (moment().isSameOrAfter(moment(lastSync).add(30, 's'))) {
            return true;
        }
        return false;
    }

    _onClickUpdateStatus(resourceId) {
        this._updateEntry(resourceId, BACKEND_URL + "/todo")
    }


    render() {
        const renderAll = this.state.renderAll;
        const lastSynch = moment(this.state.lastSynched).format("dddd, MMMM Do YYYY, h:mm:ss a");

        if (renderAll) {
            return (
                <div>
                    <CloseableAlert visible={this.state.showAlert} alertType="info" title="Synchronize!"
                                    text="Getting Todos remotely."/>
                    <b>Last Synch: {lastSynch} </b>
                    <TodoStoragePanel/>
                    <CompleteTodoList
                        todos={this.state.todos}
                        onClickDelete={this._onClickDelete}
                        onClickUpdate={this._onClickUpdateStatus}
                        onClickAdd={this._onClickAdd}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <PagedTodoList
                        todos={this.state.todos}
                        page={this.state.page}
                        links={this.state.links}
                        onNext={this._getNextPage}
                        onPrev={this._getPreviousPage}
                        onClickDelete={this._onClickDelete}
                        onClickUpdate={this._onClickUpdateStatus}
                        onClickAdd={this._onClickAdd}
                    /></div>)
        }
    }
}

TodoPage.propTypes = {
    renderAll: PropTypes.bool
};

export default TodoPage;