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
                <Link to="logout">Logout</Link>
                {" | "}
                <Link to="todos">Todos</Link>
                {" | "}
                <Link to="usermanagement">User Management</Link>
            </div>
        )
    }
}
export default Navigation;