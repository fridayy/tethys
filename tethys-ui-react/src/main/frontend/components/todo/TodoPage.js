/**
 * Created by bnjm on 12/17/16.
 */
import React, {Component} from 'react';
import TodoList from './TodoList';

class TodoPage extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: [],
                      links : '',
                      page : ''};

        this.getNextPage = this.getNextPage.bind(this)
        this.getPreviousPage = this.getPreviousPage.bind(this)
    }

    componentWillMount() {
        this.getTodos("/v1/todos")
    }


    getTodos(url) {
        fetch(url, {
            method: "GET"
        }).then(response => response.json())
            .then(data => this.setState({todos: data._embedded.todoResources,
                                        page : data.page,
                                        links : data._links}))
    }

    getNextPage() {
        let url = this.state.links.next.href;
        url = url.split("8000/")[1];
        fetch(url, {
            method: "GET"
        }).then(response => response.json())
            .then(data => this.setState({todos: data._embedded.todoResources,
                page : data.page,
                links : data._links}))
    }

    getPreviousPage() {
        let url = this.state.links.prev.href;
        url = url.split("8000/")[1];
        fetch(url, {
            method: "GET"
        }).then(response => response.json())
            .then(data => this.setState({todos: data._embedded.todoResources,
                page : data.page,
                links : data._links}))
    }

    render() {

        let prevButton = '';
        if(this.state.links.prev !== undefined) {
            prevButton = <button onClick={this.getPreviousPage}>Previous</button>;
        }

        let nextButton = '';
        if(this.state.links.next !== undefined) {
            nextButton = <button onClick={this.getNextPage}>Next</button>
        }

        return (
            <div>
                <h1>Todos</h1>
                <div>
                    {prevButton} {nextButton}
                </div>
                <small>Page: {this.state.page.number + 1}/{this.state.page.totalPages} | Total Elements: {this.state.page.totalElements}</small>
                <TodoList todos={this.state.todos}/>
                <div>
                    {prevButton} {nextButton}
                </div>
                <small>Page: {this.state.page.number + 1}/{this.state.page.totalPages} | Total Elements: {this.state.page.totalElements}</small>
            </div>
        )
    }
}
export default TodoPage;