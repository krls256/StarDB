import React, { Component } from "react";

export default class ErrorButton extends Component {
    constructor() {
        super();
        this.state = {
            renderError: false
        };
    }
    render() {
        if(this.state.renderError) {
            this.foo.none()
        }
        return (
            <button className="btn btn-danger btn-block"
            onClick={() => this.setState({renderError: true})}>Throw an error</button>
        )
    }
}