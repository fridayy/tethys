/**
 * Created by bnjm on 12/17/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Link to="/">Home</Link>
                {" | "}
                <Link to="todo">Todos</Link>
            </div>
        )
    }
}
export default Navigation;