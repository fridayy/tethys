import React from 'react';
import {Route} from 'react-router';
import App from './App';
import TodoPage from './components/todo/TodoPage';
import BenchmarkPage from './components/benchmark/BenchmarkPage';
import MetricPage from './components/metric/MetricPage';
import PureJsComponent from './components/pure-js-component/PureJSComponent';


/**
 * Sets all the possible routes between the react components
 */

export default (
    <Route path="/" component={App}>
        <Route path="paged" renderAll={false} component={TodoPage}/>
        <Route path="all" renderAll={true} component={TodoPage}/>
        <Route path="paged?style=1" renderAll={false} component={TodoPage}/>
        <Route path="all?style=1" renderAll={true} component={TodoPage}/>
        <Route path="benchmark" component={BenchmarkPage}/>
        <Route path="metrics" component={MetricPage}/>
        <Route path="helloWorld" component={PureJsComponent}/>
    </Route>
);
