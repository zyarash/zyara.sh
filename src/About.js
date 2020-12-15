/***
 * About.js
 **/

import React, { Component } from 'react';

import Nav from "./Nav";

import "./About.css";


class About extends Component {
    render() {
        return(
            <div id="content" className="about">
                <div id="portrait"/>
                <Nav/>
            </div>
        );
    }
}


export default About;
