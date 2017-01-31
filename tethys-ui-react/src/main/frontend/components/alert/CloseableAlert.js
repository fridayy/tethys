/**
 * Created by bnjm on 1/29/17.
 */
import React, {Component, PropTypes} from 'react';
import {Alert, Button} from 'react-bootstrap';
import './CloseableAlert.css';

class CloseableAlert extends Component {
    constructor(props) {
        super(props);
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
        this.handleAlertShow = this.handleAlertShow.bind(this);
        this.state = {alertVisible: true}
    }

    handleAlertDismiss() {
        this.setState({alertVisible: false});
    }

    handleAlertShow() {
        this.setState({alertVisible: true});
    }

    render() {
        if (this.props.visible && this.state.alertVisible) {
            return (
                <Alert bsStyle={this.props.alertType} onDismiss={this.handleAlertDismiss}>
                    <h4><b>{this.props.title}</b></h4>
                    <p>{this.props.text}</p>
                    <p>
                        <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
                    </p>
                </Alert>
            )
        } else {
            return null;
        }
    }
}

CloseableAlert.propTypes = {
    visible: PropTypes.bool.isRequired,
    alertType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default CloseableAlert;