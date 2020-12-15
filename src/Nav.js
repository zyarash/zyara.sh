/***
 * Nav.js
 **/

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import "./Nav.css";


class Nav extends Component {
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
            <nav className="default">
                <NavLink
                    className={`default root ${this.state.animated}`}
                    exact to="/"
                >
                    HOME
                </NavLink>
                <NavLink
                    onClick={this.onClick}
                    className={`default about ${this.state.animated}`}
                    to="/about"
                >
                    ABOUT
                </NavLink>
                <NavLink
                    onClick={this.onClick}
                    className={`default portfolio ${this.state.animated}`}
                    to="/portfolio"
                >
                    PORTFOLIO
                </NavLink>
                <NavLink
                    onClick={this.onClick}
                    className={`default experiments ${this.state.animated}`}
                    to="/experiments"
                >
                    EXPERIMENTS
                </NavLink>
                <NavLink
                    onClick={this.onClick}
                    className={`default resume ${this.state.animated}`}
                    to="/resume"
                >
                    RESUME
                </NavLink>
                <NavLink
                    onClick={this.onClick}
                    className={`default contact ${this.state.animated}`}
                    to="/contact"
                >
                    CONTACT
                </NavLink>
            </nav>
        );
    }
}


export default Nav;
