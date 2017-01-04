/**
 * Stateless component that shows all entries for performance measurement purposes
 *
 * Created by bnjm on 1/4/17.
 */
import React, {PropTypes} from 'react';
import TodoList from './TodoList';

const CompleteTodoList = (props) => {
        return(
            <div>
                <h1>Todos</h1>
                <small>Total Elements: {props.page.totalElements}</small>
                <TodoList todos={props.todos}/>
                <small>Total Elements: {props.page.totalElements}</small>
            </div>
        )
};

CompleteTodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    page: PropTypes.object.isRequired
};

export default CompleteTodoList;