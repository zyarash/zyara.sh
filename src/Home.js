/***
 * Home.js
 **/

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import "./Home.css";


class Home extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { animated: "animate" };
    }

    onClick() {
        this.setState({ animated: "unanimate" });
    }

    render() {
        return(
            <div id="content" className="home">
                <nav className="home">
                    <header>ColorDrop Development</header>
                    <NavLink
                        className={`home root ${this.state.animated}`}
                        exact to="/"
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        onClick={this.onClick}
                        className={`home about ${this.state.animated}`}
                        to="/about"
                    >
                        ABOUT
                    </NavLink>
                    <NavLink
                        onClick={this.onClick}
                        className={`home portfolio ${this.state.animated}`}
                        to="/portfolio"
                    >
                        PORTFOLIO
                    </NavLink>
                    <NavLink
                        onClick={this.onClick}
                        className={`home experiments ${this.state.animated}`}
                        to="/experiments"
                    >
                        EXPERIMENTS
                    </NavLink>
                    <NavLink
                        onClick={this.onClick}
                        className={`home resume ${this.state.animated}`}
                        to="/resume"
                    >
                        RESUME
                    </NavLink>
                    <NavLink
                        onClick={this.onClick}
                        className={`home contact ${this.state.animated}`}
                        to="/contact"
                    >
                        CONTACT
                    </NavLink>
                </nav>
            </div>
        );
    }
}


export default Home;
