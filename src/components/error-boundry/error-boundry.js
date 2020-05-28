import React, {Component} from "react";
import ErrorMessage from "../error";

export default class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            error: false
        }
    }
    componentDidCatch() {
        this.setState({error: true});
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }
        return this.props.children
    }
}