/**
 * Created by bnjm on 3/17/17.
 */
import React, {Component} from 'react';

class PureJSComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello World!"
        }
    }

    render() {
        let p = <p>{"Hello World!"}</p>;
        // return(
        //     React.createElement("p", this, this.state.text)
        // )
        return(
            {p}
        )
    }
}

export default PureJSComponent;