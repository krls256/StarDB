import React, { Component } from "react";
import Row from "../row";
import { PlanetList } from "../sw-components";
import  { PlanetDescription } from "../sw-components";

export default class PlanetsPage extends Component
{
    constructor() {
        super();
        this.state = {
            currentItem: null
        };
        this.setItem = (currentItem) => {
            this.setState({currentItem})
        }
    }
    render() {
        return (
            <Row left={<PlanetList seter={this.setItem}/>}
                 right={<PlanetDescription itemId={this.state.currentItem}/>}
            />
        )
    }
}
