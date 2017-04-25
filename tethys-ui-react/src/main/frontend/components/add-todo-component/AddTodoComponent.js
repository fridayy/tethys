/**
 * Created by bnjm on 4/26/17.
 */
import React, {Component} from 'react';
import {FormControl} from 'react-bootstrap';
import './addtodocomponent.css'
import {Button} from 'react-bootstrap'

class AddTodoComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        };

        this.setTitle = this.setTitle.bind(this);
        this.setDescription= this.setDescription.bind(this);
    }

    setTitle(e)  {
        this.setState({title: e.target.value})
    }

    setDescription(e) {
        this.setState({description: e.target.value})
    }


    render() {
        return (
            <div className="add-dialog">
                <FormControl
                    type="text"
                    placeholder="Enter Title"
                    onChange={this.setTitle}
                />
                <FormControl
                    type="text"
                    placeholder="Enter Description"
                    onChange={this.setDescription}
                />
                <Button onClick={() => {this.props.onClickAdd(this.state)}}>Add</Button>
            </div>
        )
    }
}
export default AddTodoComponent;