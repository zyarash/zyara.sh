/***
 * Zyara's World!
 * もしもし  ٩(♡ε♡)۶
 * ProfilePage.js
 */

import React, { Component } from 'react';

import "./ProfilePage.css";


class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this._description = `I'm a freelance web developer with a strong passion for creative coding & Linux. I have a B.S. in Computer Science and 3+ years of industry experience, including an FTE role at Facebook. In my spare time I enjoy playing video games and listenting to electronic music; particularly riddim, dubstep, and techno. Feel free to check out some of the sites I've worked on, and if you like what you see you're welcome to drop me an email! Thank you for your time! はじめましてよろしくおねがいします〜`;
        this.state = {
            description: {
                show: "",
                hide: this._description,
            }
        }
    }

    componentDidMount() {
        setTimeout(() => {
            let interval = setInterval(() => { 
                let description = this.state.description;
                if (description.hide.length <= 1) {
                    clearInterval(interval); 
                }
                this.setState({ 
                    description: {
                        show: description.show + description.hide[0],
                        hide: description.hide.slice(1, description.hide.length),
                    }
                });
            }, 10);
        }, 1500);
    }

    render() {
        const classes = `profile-page ${this.props.pageState} ${this.props.animation}`;
        const animated = this.props.renderCount ? "finished" : "animation";
        const descriptionShow = this.props.renderCount ? this._description : this.state.description.show;
        const descriptionHide = this.props.renderCount ? "" : this.state.description.hide;

        return(
            <div className={ classes }>
                <div className={ `me-container ${animated}` }>
                    <img id="me" alt="me" src="me.png" width="100%" height="100%"/>
                </div>
                <header className="profile-page">
                    <div className={ `header-cover ${animated}` }/>
                    <h1 className="profile-page"/>
                    <div className="hr"/>
                </header>
                <div className="description">
                    <p className="show">{ descriptionShow }</p>
                    <p className="hide">{ descriptionHide }</p>
                </div>
            </div>
        );
    }
}


export default ProfilePage;
