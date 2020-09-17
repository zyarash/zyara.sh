/***
 * Zyara's World!
 * もしもし  ٩(♡ε♡)۶
 * PortfolioPage.js
 */

import React, { Component } from 'react';

import { PROJECTS } from "./PROJECTS";

import InfoComponent from "./InfoComponent";

import "./PortfolioPage.css";


class Project extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.open(this.props.project.link);
    }

    render() {
        return(
            <div className={`project ${this.props.project.name}`} onClick={this.handleClick}/>
        )
    }
}


class PortfolioPage extends InfoComponent {
    getInfoText() {
        return (
            `Below you can find some of the sites that I've worked on for various clients.`
        );
    }

    render() {
        const projects = PROJECTS.map(p => {
            return (<Project project={p}/>)
        });

        const classes = `portfolio-page ${this.props.pageState} ${this.props.animation}`;

        return(
            <div className={ classes }>
                { this.renderInfo() }
                <header className="portfolio-page">
                    <div className="info-header">
                        <h1 className="portfolio-page"/>
                        <div className="info" onClick={ this.handleInfoClickShow }/>
                    </div>
                    <div className="hr"/>
                </header>
                { projects }
            </div>
        );
    }
}


export default PortfolioPage;
