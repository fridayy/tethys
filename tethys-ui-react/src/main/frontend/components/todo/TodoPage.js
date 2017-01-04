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

class TodoPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            links: '',
            page: '',
            renderAll: this.props.route.renderAll
        };
        console.log(this.props);
        if (this.state.renderAll) {
            this._getAllEntries();
        } else {
            this._getPagedEntries("0");
        }

        this._getNextPage = this._getNextPage.bind(this);
        this._getPreviousPage = this._getPreviousPage.bind(this);
        this._get = this._get.bind(this);
        this._getPagedEntries = this._getPagedEntries.bind(this);
        this._getAllEntries = this._getAllEntries.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({renderAll: nextProps.route.renderAll});
        if (nextProps.route.renderAll) {
            this._getAllEntries();
        } else {
            this._getPagedEntries(this.state.page.number);
        }
    }

    _get(url) {
        return fetch(url, {
            method: "GET"
        }).then(response => response.json())
          .then(data => { return data })
          .catch(err => console.log(err));
    }

    _getEntries(key, fallBackURL) {
        localForage.getItem(key).then(value => {
            this.setState({
                todos: value._embedded.todoResources,
                page: value.page,
                links: value._links
            })
        }).catch(err => {   console.log("Not found in store falling back to: " + fallBackURL)
                            this._getEntriesRemotely(key, this._get(fallBackURL))})
    }

    _getEntriesRemotely(key, data) {
        data.then(d => {
                this.setState({
                    todos: d._embedded.todoResources,
                    page: d.page,
                    links: d._links
                })
                if(key === null) {
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

    render() {
        const renderAll = this.state.renderAll;

        if (renderAll) {
            return (
                <CompleteTodoList
                    todos={this.state.todos}
                    page={this.state.page}
                />
            )
        } else {
            return <PagedTodoList
                todos={this.state.todos}
                page={this.state.page}
                links={this.state.links}
                onNext={this._getNextPage}
                onPrev={this._getPreviousPage}
            />
        }
    }
}

TodoPage.propTypes = {
    renderAll: PropTypes.bool.isRequired
};

export default TodoPage;