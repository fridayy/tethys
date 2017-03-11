/**
 * Created by bnjm on 1/31/17.
 */
import React, {Component} from 'react';
import {BACKEND_URL} from '../../commons/constants';
import Chart from 'chart.js';

class MetricPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metrics: undefined
        };
        this._getMetrics = this._getMetrics.bind(this);
    }

    componentDidMount() {
        // this._getMetrics();
    }

    _getMetrics() {
        fetch(BACKEND_URL + "/metrics?url=http://localhost:3000/all", {
            method: "GET"
        }).then(response => response.json())
            .then(data => {
                this.setState({metrics: data})
            })
            .catch(error => console.error(error));
    }

    render() {
        return (<div>
            <h1>Metrics</h1>
            <small>provided by: <a href="https://github.com/macbre/phantomas">phantomas</a></small>
        </div>)
    }
}
export default MetricPage;