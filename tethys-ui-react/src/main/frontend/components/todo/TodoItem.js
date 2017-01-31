/**
 * Stateless component representing a single todo item
 *
 * Created by bnjm on 12/17/16.
 */
import React from 'react';
import './Todoitem.css'
import Button from '../button/Button';
import {OverlayTrigger, Tooltip, Panel} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const TodoItem = (props) => {
    let bsStatus = "danger";
    if (props.todo.markedDone) {
        bsStatus = "success";
    }
    const tooltip = <Tooltip id="tooltip"><strong>Click</strong> to change status.</Tooltip>;
    const footer = <div>
        <small className="date">Created: {props.todo.createdAt}</small>
    </div>;


    const header = <div>{props.todo.title}
        <Button className="close" onClick={() => props.onClickDelete(props.todo.resourceId)}>
            <FontAwesome
                name="times"
            />
        </Button>
    </div>;


    return (
        <Panel header={header} key={props.todo.resourceId} bsStyle={bsStatus} footer={footer}>
            <OverlayTrigger placement="top" overlay={tooltip}>
                <p className="description">{props.todo.description}</p>
            </OverlayTrigger>
        </Panel>
    )
};
export default TodoItem;