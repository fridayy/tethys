import React from 'react';
import {Route} from 'react-router';
import App from './App';
import TodoPage from './components/todo/TodoPage';


/**
 * Sets all the possible routes between the react components
 */

export default (
    <Route path="/" component={App}>
        <Route path="paged" renderAll={false} component={TodoPage} />
        <Route path="all" renderAll={true} component={TodoPage} />
        <Route path="paged?style=1" renderAll={false} component={TodoPage} />
        <Route path="all?style=1" renderAll={true} component={TodoPage} />
    </Route>
);
