import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './main/frontend/routes';

/**
 * JavaScript main entry point.
 *
 * THIS FILE CANNOT BE MOVED!
 */
ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('root')
);
