/**
 * Maps an item component for each item passed down by the stateful todopage component
 *
 * Created by bnjm on 12/17/16.
 */
import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
        let createEntryRow = function (todo) {
            return (
                <TodoItem
                    key={todo.resourceId}
                    todo={todo}
                    onClickDelete={props.onClickDelete}
                />
            )
        };

        return (
            <div>
                {props.todos.map(createEntryRow, this)}
            </div>
        )
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

export default TodoList;