export default class SwapiService {
    _apiBase = 'https://swapi.co/api/';
    _imageBase = 'https://starwars-visualguide.com/assets/img/';
    _getResource = async (url) => {
        const res = await fetch(this._apiBase + url);
        if (!res.ok) {
            throw new Error(`Something went wrong\n Error status: ${res.status}`);
        }
        return await res.json();
    };
    getAllPeople = async () => {
        const people = await this._getResource(`people/`);
         return people.results.map((person) => this._transformPerson(person));
    };
    getPerson = async (id) => {
        const person = await this._getResource(`people/${id}/`);
        return this._transformPerson(person)
    };
    getAllPlanets = async () => {
        const planets = await this._getResource(`planets/`);
        return planets.results.map((planet) => this._transformPlanet(planet));
    };
    getPlanet = async (id) => {
        const planet = await this._getResource(`planets/${id}`);
        return this._transformPlanet(planet)
    };
    getAllStarships = async () => {
        const starship = await this._getResource(`starships/`);
        return starship.results.map((starship) => this._transformStarship(starship));
    };
    getStarship = async (id) => {
        const starship = await this._getResource(`starships/${id}`);
        return this._transformStarship(starship)
    };
    getPersonUrl = (id) => {
        return `${this._imageBase}characters/${id}.jpg`;
    };
    getPlanetUrl = (id) => {
        return `${this._imageBase}planets/${id}.jpg`;
    };
    getStarshipUrl = (id) => {
        return `${this._imageBase}starships/${id}.jpg`;
    };
    _findId = (item) => {
        const key = /\d?\d/;
        return  item.url.match(key)[0];
    };
    _transformPlanet = (planet) => {
        return {
            id: this._findId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };
    _transformPerson = (person) => {
        return{
            id: this._findId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };
    _transformStarship = (starship) => {
        return {
            id: this._findId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }
}