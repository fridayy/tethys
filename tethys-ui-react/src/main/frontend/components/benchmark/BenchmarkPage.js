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
            store: new Data()
        };

        this.startBenchmark = this.startBenchmark.bind(this);
        this.updateTables = this.updateTables.bind(this);
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
        this.state.store.run();
        this.setState({store: this.state.store});
    }

    updateTables() {
        watch = new Stopwatch("Update tables");
        watch.start();
        this.state.store.update();
        this.setState({store: this.state.store});
    }


    render() {
        let row = this.state.store.data.map((d,i) => {
            return <TableRow key={d.id} data={d} />
        });
        return (<div>
            <Button onClick={this.startBenchmark}>Start</Button>
            <Button onClick={this.updateTables}>Update</Button>
            <p>Total Rows: {this.state.store.data.length}</p>
            <table className="table table-bordered">
                <tbody>{row}</tbody>
            </table>
        </div>)
    }
}
export default BenchmarkPage;