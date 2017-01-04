/**
 * Stateless component representing a single todo item
 *
 * Created by bnjm on 12/17/16.
 */
import React from 'react';

const TodoItem = (props) => {
        return (
            <div>
                <b>{props.todo.title}</b>
                <p>{props.todo.description}</p>
            </div>
        )
}
export default TodoItem;