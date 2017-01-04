/**
 * Stateful container component
 *
 * Created by bnjm on 1/4/17.
 */
import React, {PropTypes} from 'react';
import TodoList from './TodoList';

const PagedTodoList = (props) => {
    let prevButton = '';
    if (props.links.prev !== undefined) {
        prevButton = <button onClick={props.onPrev}>Previous</button>;
    }

    let nextButton = '';
    if (props.links.next !== undefined) {
        nextButton = <button onClick={props.onNext}>Next</button>
    }

    return (
        <div>
            <h1>Todos</h1>
            <div>
                {prevButton} {nextButton}
            </div>
            <small>Page: {props.page.number + 1}/{props.page.totalPages} | Total
                Elements: {props.page.totalElements}</small>
            <TodoList
                todos={props.todos}/>
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
    page: PropTypes.object.isRequired,
    links: PropTypes.object.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired
}

export default PagedTodoList;