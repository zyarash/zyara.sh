/***
 * Zyara's World!
 * もしもし  ٩(♡ε♡)۶
 * InfoComponent.js
 */

import React, { Component } from 'react';

import "./InfoComponent.css";


class InfoComponent extends Component {
    constructor(props){ 
        super(props);
        this.handleInfoClickShow = this.handleInfoClickShow.bind(this);
        this.handleInfoClickHide = this.handleInfoClickHide.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
        this.getInfoText = this.getInfoText.bind(this);
        this.state = { info: 0 };
    }

    getInfoText() {
        throw { name: "NotImplementedError", message: "Method needs to be implemented on child" };
    }

    handleInfoClickShow() {
        this.setState({ info: 1 });
    }

    handleInfoClickHide() {
        this.setState({ info: 0 });
    }

    renderInfo() {
        if (this.state.info) {
            return(
                <div className="info-overlay">
                    <div className="info-contain">
                        <div className="info-text">
                            { this.getInfoText() }
                        </div>
                    </div>
                    <div className="info-close" onClick={ this.handleInfoClickHide }/>
                </div>
            )
        }
        return null;
    }
}


export default InfoComponent;
