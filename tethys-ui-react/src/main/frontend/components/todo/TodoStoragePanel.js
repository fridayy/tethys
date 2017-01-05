/**
 * Created by bnjm on 1/5/17.
 */
import React, {Component} from 'react';
import Button from '../button/Button';
import localForage from 'localforage';

class TodoStoragePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageVisible: false,
            message: "Storage cleared."
        }

        this._clearStorage = this._clearStorage.bind(this);
    }

    _clearStorage() {
        localForage.clear().then(success => {
            this.setState({messageVisible: true})
        }).catch(err => this.setState({message: err}))
    }

    _clearTodoItems() {
        localForage.removeItem("todos").then(success => {
            this.setState({messageVisible: true})
        }).catch(err => this.setState({message: err}))
    }

    render() {
        if (this.state.messageVisible) {
            return (
                <div>
                    <b>{this.state.message}</b>
                </div>
            )
        } else {
            return (
                <div>
                    <Button onClick={this._clearStorage}>Clear Storage</Button>
                </div>
            )
        }
    }
}
export default TodoStoragePanel;