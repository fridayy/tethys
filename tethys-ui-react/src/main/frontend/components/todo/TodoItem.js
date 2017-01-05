/**
 * Stateless component representing a single todo item
 *
 * Created by bnjm on 12/17/16.
 */
import React from 'react';
import './todoitem.css'
import Button from '../button/Button';

const TodoItem = (props) => {
    return (
        <div className="todoItem">
            <b>{props.todo.title}</b>
            <p>{props.todo.description}</p>
            <Button label="delete" onClick={() => props.onClickDelete(props.todo.resourceId)}>Delete</Button>
        </div>
    )
}
export default TodoItem;