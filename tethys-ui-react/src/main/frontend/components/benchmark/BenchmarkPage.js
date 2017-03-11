/**
 * Created by bnjm on 1/29/17.
 */
import React, {Component} from 'react';
import TableRow from './TableRow';
import Button from '../button/Button';
import Data from './Data';
import Stopwatch from './Stopwatch';


let watch = null;

class BenchmarkPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: new Data(),
            count: 0
        };

        this.startBenchmark = this.startBenchmark.bind(this);
        this.updateTables = this.updateTables.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }

    componentDidMount() {
        if(watch !== null) {
            watch.stop();
            watch = null;
        }
    }

    componentDidUpdate() {
       if(watch !== null) {
           watch.stop();
           watch = null;
       }
    }

    startBenchmark() {
        watch = new Stopwatch("Create tables");
        watch.start();
        this.state.store.run(this.state.count);
        this.setState({store: this.state.store});
    }

    updateTables() {
        watch = new Stopwatch("Update tables");
        watch.start();
        this.state.store.update();
        this.setState({store: this.state.store});
    }

    clearAll() {
        watch = new Stopwatch("Clear tables");
        watch.start();
        this.state.store.clear();
        this.setState({store: this.state.store});
    }

    render() {
        let row = this.state.store.data.map((d) => {
            return <TableRow key={d.id} data={d} />
        });
        return (<div>
            Count: <input type="text" onChange={(e) => {this.setState({count: e.target.value})}} value={this.state.count}/>
            <Button onClick={this.startBenchmark}>Start</Button>
            <Button onClick={this.updateTables}>Update</Button>
            <Button onClick={this.clearAll}>Clear</Button>
            <p>Total Rows: {this.state.store.data.length}</p>
            <table className="table table-bordered">
                <tbody>{row}</tbody>
            </table>
        </div>)
    }
}
export default BenchmarkPage;