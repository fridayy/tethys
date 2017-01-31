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
        this._getPagedEntries = this._getPagedEntries.bind(this);
        this._getAllEntries = this._getAllEntries.bind(this);
        this._onClickDelete = this._onClickDelete.bind(this);
        this._deleteEntry = this._deleteEntry.bind(this);
    }

    // If the renderAll prop changes render the correct version of the page
    componentWillReceiveProps(nextProps) {
        this.setState({renderAll: nextProps.route.renderAll});
        if (nextProps.route.renderAll) {
            this._getAllEntries();
        } else {
            this._getPagedEntries(this.state.page.number, "/v1/todos");
        }
    }

    _checkState() {
        // If renderAll is passed as prop from react-router all entries shall be shown
        if (this.state.renderAll) {
            this._getAllEntries();
        } else {
            this._getPagedEntries("/v1/todos");
        }
    }

    // Fetches a given resource
    _get(url) {
        return fetch(url, {
            method: "GET"
        }).then(response => response.json())
            .then(data => {
                return data
            })
            .catch(err => console.log(err));
    }

    // Deletes a given resource
    _delete(url) {
        return fetch(url, {
            method: "DELETE"
        }).catch(err => console.log(err));
    }

    _deleteEntry(key, deleteUrl) {
        localForage.removeItem(key).then(res => {
            this._delete(deleteUrl).then(res => {
                this._checkState();
            });
        }).catch(err => console.log(err));
    }

    _getEntries(fallBackURL) {
        let todos = [];

        localForage.getItem("lastSync").then(result => { this.setState({lastSynched : result}) });

        localForage.length().then(numberOfKeys => {
            if (numberOfKeys === 0 || this._checkForSync(this.state.lastSynched)) {
                this.setState({showAlert: true});
                this._getEntriesRemotely(this._get(fallBackURL));
            }
        });
        localForage.iterate((value, key, iterationNumber) => {
            todos.push(value);
        }).then(() => {
            this.setState({todos: todos,
                           lastSynched: this.state.lastSynched});
        });
    }

    _getEntriesRemotely(data) {
        data.then(d => {
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
        this._getEntries("/v1/todos?size=1000000")
    }

    _getPagedEntries(url) {
        this._getEntriesRemotely(this._get(url));
    }

    _getNextPage() {
        let url = this.state.links.next.href;
        url = url.split("8000/")[1];
        this._getPagedEntries(url);
    }

    _getPreviousPage() {
        let url = this.state.links.prev.href;
        url = url.split("8000/")[1];
        this._getPagedEntries(url);
    }

    _onClickDelete(resourceId) {
        console.log(resourceId);
        this._deleteEntry(resourceId, "/v1/todo/" + resourceId);
    }

    /**
     * Checks if its time to sync
     * @param lastSync
     * @returns {boolean}
     * @private
     */
    _checkForSync(lastSync) {
        if(moment().isSameOrAfter(moment(lastSync).add(30, 's'))) {
            return true;
        }
        return false;
    }


    render() {
        const renderAll = this.state.renderAll;
        const lastSynch = moment(this.state.lastSynched).format("dddd, MMMM Do YYYY, h:mm:ss a");

        if (renderAll) {
            return (
                <div>
                    <CloseableAlert visible={this.state.showAlert} alertType="info" title="Synchronize!" text="Getting Todos remotely."/>
                    <b>Last Synch: {lastSynch} </b>
                    <TodoStoragePanel/>
                    <CompleteTodoList
                        todos={this.state.todos}
                        onClickDelete={this._onClickDelete}
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
                    /></div>)
        }
    }
}

TodoPage.propTypes = {
    renderAll: PropTypes.bool.isRequired
};

export default TodoPage;