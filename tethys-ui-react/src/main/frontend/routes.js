import React from 'react';
import {Route} from 'react-router';
import App from './App';
import TodoPage from './components/todo/TodoPage';


/**
 * Sets all the possible routes between the react components
 */

export default (
    <Route path="/" component={App}>
        <Route path="todo" component={TodoPage}/>
    </Route>
);
