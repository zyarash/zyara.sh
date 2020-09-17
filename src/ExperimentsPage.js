/***
 * Zyara's World!
 * もしもし  ٩(♡ε♡)۶
 * ExperimentsPage.js
 */

import React from 'react';

import InfoComponent from "./InfoComponent";

import "./ExperimentsPage.css";


class ExperimentsPage extends InfoComponent {
    getInfoText() {
        return (
            `Here you can find various CanvasJS & CSS3 projects I've worked on,
            on my own accord. Enjoy!`
        );
    }

    render() {
        const classes = `experiments-page ${this.props.pageState} ${this.props.animation}`;

        return(
            <div className={ classes }>
                { this.renderInfo() }
                <header className="experiments-page">
                    <div className="info-header">
                        <h1 className="experiments-page"/>
                        <div className="info" onClick={ this.handleInfoClickShow }/>
                    </div>
                    <div className="hr"/>
                </header>
            </div>
        );
    }
}


export default ExperimentsPage;
