/**
 * Stateful container component
 *
 * Created by bnjm on 1/4/17.
 */
import React, {PropTypes} from 'react';
import TodoList from './TodoList';
import AddTodoComponent from "../add-todo-component/AddTodoComponent";

const PagedTodoList = (props) => {
    let prevButton = '';
    if (props.links.prev !== undefined) {
        prevButton = <button onClick={props.onPrev}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>;
    }

    let nextButton = '';
    if (props.links.next !== undefined) {
        nextButton = <button onClick={props.onNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
    }

    return (
        <div>
            <h1>Todos (Paged)</h1>
            <small>No browser storage</small>
            <div>
                {prevButton} {nextButton}
            </div>
            <small>Page: {props.page.number + 1}/{props.page.totalPages} | Total
                Elements: {props.page.totalElements}</small>
            <AddTodoComponent onClickAdd={props.onClickAdd}/>
            <TodoList
                todos={props.todos}
                onClickDelete={props.onClickDelete}
                onClickUpdate={props.onClickUpdate}/>
            <div>
                {prevButton} {nextButton}
            </div>
            <small>Page: {props.page.number + 1}/{props.page.totalPages} | Total
                Elements: {props.page.totalElements}</small>
        </div>
    )
};

PagedTodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    page: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    links: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    onClickUpdate: PropTypes.func.isRequired
};

export default PagedTodoList;