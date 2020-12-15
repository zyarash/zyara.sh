/***
 * App.js
 **/

import React, { Component } from 'react';

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import {
    CSSTransition,
    SwitchTransition
} from 'react-transition-group';


import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Experiments from "./Experiments";
import Resume from "./Resume";
import Contact from "./Contact";

import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);

        if (window.location.pathname != "/") {
            this.state = { rendered: 1 };
        }
        else {
            this.state = { rendered: 0 };
        }
    }

    componentDidMount() {
        console.log("yea");
    }

    render() {
        return (
            <BrowserRouter>
                <Route render={({ location }) => (
                    <SwitchTransition mode="out-in">
                        <CSSTransition key={location.pathname} timeout={750}>
                            <div id="animation">
                                <Switch location={location}>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/about" component={About}/>
                                    <Route path="/portfolio" component={Portfolio}/>
                                    <Route path="/experiments" component={Experiments}/>
                                    <Route path="/resume" component={Resume}/>
                                    <Route path="/contact" component={Contact}/>
                                </Switch>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                )}/>
            </BrowserRouter>
        );
    }
}

export default App;
