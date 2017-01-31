/**
 * Stateless component that shows all entries for performance measurement purposes
 *
 * Created by bnjm on 1/4/17.
 */
import React, {PropTypes} from 'react';
import TodoList from './TodoList';

const CompleteTodoList = (props) => {

        let totalElements = props.todos.length;

        return(
            <div>
                <h1>Todos</h1>
                <small>Total Elements: {totalElements}</small>
                <TodoList
                    todos={props.todos}
                    onClickDelete={props.onClickDelete}
                />
                <small>Total Elements: {totalElements}</small>
            </div>
        )
};

CompleteTodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default CompleteTodoList;