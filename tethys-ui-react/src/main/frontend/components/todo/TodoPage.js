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

class TodoPage extends Component {

    constructor(props) {
        super(props);
        // Set inital state
        this.state = {
            todos: [],
            links: '',
            page: '',
            renderAll: this.props.route.renderAll,
            lastSynched: ''
        };

        // If renderAll is passed as prop from react-router all entries shall be shown
        if (this.state.renderAll) {
            this._getAllEntries();
        } else {
            this._getPagedEntries("0", "/v1/todos");
        }

        // Method bindings
        this._getNextPage = this._getNextPage.bind(this);
        this._getPreviousPage = this._getPreviousPage.bind(this);
        this._get = this._get.bind(this);
        this._getPagedEntries = this._getPagedEntries.bind(this);
        this._getAllEntries = this._getAllEntries.bind(this);
        this._onClickDelete = this._onClickDelete.bind(this);
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

    _getEntries(key, fallBackURL) {
        // Check if the entry exists already in IndexedDB and set corresponding state
        localForage.getItem(key).then(value => {
            this.setState({
                todos: value._embedded.todoResources,
                page: value.page,
                links: value._links,
                lastSynched: value.accessed.creationTime
            })
            // If it does not exist already try to get the items from the backend
        }).catch(err => {
            this._getEntriesRemotely(key, this._get(fallBackURL))
        })
    }

    _getEntriesRemotely(key, data) {
        data.then(d => {
                this.setState({
                    todos: d._embedded.todoResources,
                    page: d.page,
                    links: d._links,
                    lastSynched: d.accessed.creationTime
                })
                // If there is no key passed use the pagination number returned by the backend
                if (key === null) {
                    this._saveEntriesToStorage(d.page.number.toString(), d)
                } else {
                    this._saveEntriesToStorage(key, d)
                }
            }
        ).catch(err => console.log(err));
    }

    _saveEntriesToStorage(key, value) {
        localForage.setItem(key, value)
            .catch(err => console.log(err));
    }

    _getAllEntries() {
        this._getEntries("todos", "/v1/todos?size=1000000")
    }

    _getPagedEntries(page, url) {
        this._getEntries(page, url)
    }

    _getNextPage() {
        let url = this.state.links.next.href;
        url = url.split("8000/")[1];
        this._getPagedEntries((this.state.page.number + 1).toString(), url);
    }

    _getPreviousPage() {
        let url = this.state.links.prev.href;
        url = url.split("8000/")[1];
        this._getPagedEntries((this.state.page.number.toString() - 1), url);
    }

    _onClickDelete(resourceId) {
        console.log(resourceId);
    }


    render() {
        const renderAll = this.state.renderAll;
        const lastSynch = moment(this.state.lastSynched).format("dddd, MMMM Do YYYY, h:mm:ss a");

        if (renderAll) {
            return (
                <div>
                    <b>Last Synch: {lastSynch} </b>
                    <TodoStoragePanel/>
                    <CompleteTodoList
                        todos={this.state.todos}
                        page={this.state.page}
                        onClickDelete={this._onClickDelete}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <b>Last Synch: {lastSynch} </b>
                    <TodoStoragePanel/>
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