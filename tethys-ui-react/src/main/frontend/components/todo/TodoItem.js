/**
 * Created by bnjm on 12/17/16.
 */
import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div>
                <b>{this.props.todo.title}</b>
                <p>{this.props.todo.description}</p>
            </div>
        )
    }
}
export default TodoItem;