/**
 *
 * Stateless functional presentation component
 *
 * Created by bnjm on 12/17/16.
 */
import React from 'react';
import {Link} from 'react-router';
import './navigation.css';

const Navigation = () => {

    let icon = <i className="fa fa-angle-double-right" aria-hidden="true"></i>


    return (
        <div className="navigation">
            <Link to="/">Home</Link>
            {icon}
            <Link to="paged">Todos (Paged)</Link>
            {icon}
            <Link to="all">Todos (All)</Link>
            {icon}
            <Link to="benchmark">Benchmark</Link>
            {icon}
            <Link to="metrics">Metrics</Link>
        </div>
    )
};

export default Navigation;