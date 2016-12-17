/**
 * Created by bnjm on 12/17/16.
 */
import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        let createEntryRow = function (todo) {
            return (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            )
        };

        return (
            <div>
                {this.props.todos.map(createEntryRow, this)}
            </div>
        )
    }
}
export default TodoList;