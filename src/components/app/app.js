import './bootstrap.min.scss'
import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import './app.scss'
import ErrorMessage from "../error";
import ErrorBoundry from "../error-boundry/error-boundry";
import {LoginPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage} from "../pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {StarshipDescription} from "../sw-components";


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
            loggedIn: false
        };
        this.onLogin = () => {
            this.setState({
                loggedIn: true
            })
        }
    }
    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        const { hasError } = this.state;
        if(hasError) {
            return <ErrorMessage />
        }
        return (
            <ErrorBoundry>
                <BrowserRouter>
                    <Header />
                    <RandomPlanet />
                    <Switch>
                        <Route path='/'
                               render={() => <h1>Welcome to StarDB</h1>}
                               exact />
                        <Route path='/people/:id?' component={PeoplePage}/>
                        <Route path='/planets/' component={PlanetsPage}/>
                        <Route path='/starships/' exact component={StarshipsPage}/>
                        <Route path='/starships/:id'
                               render={({ match }) =><StarshipDescription itemId={match.params.id}/>}/>
                        <Route path='/login/'
                               render={() => <LoginPage
                                   isLoggedIn={this.state.loggedIn}
                                   Login={this.onLogin}
                               />}
                        />
                        <Route path='/secret/'
                               render={() => <SecretPage isLoggedIn={this.state.loggedIn}/>}
                        />
                        <Route
                            render={() => <h2>Page not found</h2>}/>
                    </Switch>
                </BrowserRouter>

            </ErrorBoundry>
        )
    }
}
