import React from "react";
import { WithData } from "../hoc-helper";
import ItemList from "../item-list/item-list";
import SwapiService from "../../service/swapi-servise";

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships} = new SwapiService();

const ListWithFunction = (fn) => (Wrapped) => {
    return (props) => {
        return <Wrapped {...props} >{fn}</Wrapped>
    }
};
const renderPerson = (i) => {
    return `${i.name} (${i.gender} ${i.birthYear})`
};
const renderPlanet = (i) => `${i.name} (diameter: ${i.diameter})`;
const renderStarship = (i) => `${i.name} (Model: ${i.model})`;

const PersonList = WithData(ListWithFunction(renderPerson)(ItemList), getAllPeople);
const PlanetList = WithData(ListWithFunction(renderPlanet)(ItemList), getAllPlanets);
const StarshipList = WithData(ListWithFunction(renderStarship)(ItemList), getAllStarships);
export {
    PersonList,
    PlanetList,
    StarshipList
};
