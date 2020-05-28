import React, { Component } from "react";
import './header.scss'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <h1>
                    <Link to='/'>Star DB</Link>
                </h1>
                <ul className='header__list'>
                    <li>
                        <Link to='/people/'>People</Link>
                    </li>
                    <li>
                        <Link to='/planets/'>Planets</Link>
                    </li>
                    <li>
                        <Link to='/starships/'>StarShips</Link>
                    </li>
                    <li>
                        <Link to='/login/'>Login</Link>
                    </li>
                    <li>
                        <Link to='/secret/'>Secret</Link>
                    </li>
                </ul>
            </header>
        );
    }
}
