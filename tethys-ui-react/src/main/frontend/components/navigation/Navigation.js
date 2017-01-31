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
        return (
            <div className="navigation">
                <Link to="/">Home</Link>
                {" | "}
                <Link to="paged">Todos (Paged)</Link>
                {" | "}
                <Link to="all">Todos (All)</Link>
                {" | "}
                <Link to="benchmark">Benchmark</Link>
            </div>
        )
};

export default Navigation;