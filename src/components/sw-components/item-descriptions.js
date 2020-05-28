import React from "react";
import {WithImage} from "../hoc-helper";
import ItemDescription from "../item-description";
import SwapiService from "../../service/swapi-servise";
import DescriptionHelper from "../description-helper";

const { getPerson,
    getPlanet,
    getStarship,
    getPersonUrl,
    getPlanetUrl,
    getStarshipUrl} = new SwapiService();

const PersonValue = [
        <DescriptionHelper label='Gender' filter='gender'/>,
        <DescriptionHelper label='Eye Color' filter='eyeColor'/>,
        <DescriptionHelper label='Birth Year' filter='birthYear'/>
    ];
const PlanetValue = [
    <DescriptionHelper label='Diameter' filter='diameter'/>,
    <DescriptionHelper label='Rotation Period' filter='rotationPeriod'/>,
    <DescriptionHelper label='Population' filter='population'/>
];
const StarshipValue = [
    <DescriptionHelper label='Model' filter='model'/>,
    <DescriptionHelper label='Price' filter='costInCredits'/>,
    <DescriptionHelper label='Crew' filter='crew'/>
];



const PersonDescription = WithImage(ItemDescription, getPerson, getPersonUrl, PersonValue);
const PlanetDescription = WithImage(ItemDescription, getPlanet, getPlanetUrl, PlanetValue);
const StarshipDescription = WithImage(ItemDescription, getStarship, getStarshipUrl, StarshipValue);

export {
    PersonDescription,
    PlanetDescription,
    StarshipDescription
}
