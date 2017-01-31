/**
 * Created by bnjm on 1/29/17.
 */
import React from 'react';
import './Benchmark.css';

const TableRow = (props) => {
        return (
            <tr>
                <td>{props.data.id}</td>
                <td>{props.data.label}</td>
                <td>{props.data.label}</td>
                <td>{props.data.label}</td>
            </tr>
        )
    };
export default TableRow;