/***
 * Zyara's World!
 * もしもし  ٩(♡ε♡)۶
 * ContactPage.js
 */

import React from 'react';

import InfoComponent from "./InfoComponent";

import "./ContactPage.css";


class ContactPage extends InfoComponent {
    getInfoText() {
        return (
            `Below you can find my resume, my LinkedIn, and a few other resources where you can contact me.
             Hope to hear from you soon!`
        );
    }

    render() {
        const classes = `contact-page ${this.props.pageState} ${this.props.animation}`;

        return(
            <div className={ classes }>
                { this.renderInfo() }
                <header className="contact-page">
                    <div className="info-header">
                        <h1 className="contact-page"/>
                        <div className="info" onClick={ this.handleInfoClickShow }/>
                    </div>
                    <div className="hr"/>
                </header>
            </div>
        );
    }
}


export default ContactPage;
