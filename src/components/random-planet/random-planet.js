import React, { Component } from "react";
import SwapiService from "../../service/swapi-servise";
import Spinner from "../spinner";
import ErrorMessage from "../error";

import './random-planet.scss'

export default class RandomPlanet extends Component {
    constructor() {
        super();
        this.state = {
            planet: {},
            loading: true,
            error: false
        };
        this.swapi = new SwapiService();

        this.onPlanetLoaded = (planet) => {
            this.setState({planet,
                loading: false})
        };

        this.onError = () => {
            this.setState({
                error: true,
                loading: false})
        };

        this.updatePlanet = () => {
            const id = Math.floor(Math.random()*20 + 2);
            this.swapi
                .getPlanet(id)
                .then(this.onPlanetLoaded)
                .catch(this.onError)
        };
    }
    componentDidMount() {
        this.updatePlanet();
        this.internal = setInterval(this.updatePlanet, 7000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { planet, loading, error } = this.state;

        const errorMessege = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const view = !(loading || error) ? <PlanetView planet={planet}/> : null;

         return (
            <div className='random-planet'>
                {errorMessege}
                {spinner}
                {view}
           </div>
         )
    }
}

const PlanetView = ({planet}) => {
    const {id ,name, population,
        rotationPeriod, diameter} = planet;
    return (
    <React.Fragment>
        <img className='random-planet__img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
             alt="planet"/>
        <div>
            <div className='random-planet__header'>{name}</div>
            <ul className='list-group list-group-flush random-planet__info'>
                <li className="random-planet__data-item list-group-item">
                    Population: {population}
                </li>
                <li className="random-planet__data-item list-group-item">
                    Rotation Period: {rotationPeriod}
                </li>
                <li className="random-planet__data-item list-group-item">
                    Diameter: {diameter}
                </li>
            </ul>
        </div>
    </React.Fragment>
    )
};