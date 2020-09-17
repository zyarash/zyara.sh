/***
 * Zyara's World!
 * もしもし  ٩(♡ε♡)۶
 * App.js
 */

import React, { Component } from 'react';

import ContactPage from "./ContactPage";
import ExperimentsPage from "./ExperimentsPage";
import PortfolioPage from "./PortfolioPage";
import ProfilePage from "./ProfilePage";

import "./App.css";
import "./Loading.css";


class Loading extends Component {
    render() {
        return( 
            <div className="loading-page">
                <img id="logo" src="logo.png" alt="logo"/>
            </div>
        );
    }
}


class Arrow extends Component {
    render() {
        return(
            <div className={ `arrow ${this.props.position}` }/>
        )
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            pageIdx: 0,
            pages: [ProfilePage, PortfolioPage, ExperimentsPage, ContactPage],
            renderCount: 0,
            animations: {
                left: "",
                center: "",
                right: "",
            },
            disableScroll: false,
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.renderPages = this.renderPages.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loaded: true});
        }, 3000);
    }

    handlePageChange(e) {
        if (this.state.disableScroll) { return; }

        let pageIdx = this.state.pageIdx;
        let animations = {};
        if (e.target.classList.contains("right")) {
            pageIdx = pageIdx + 1;
            if (pageIdx > this.state.pages.length - 1) {
                pageIdx = 0;
            }
            animations = {
                left: "",
                center: "animation-left",
                right: "animation"
            }
        }
        else {
            pageIdx = pageIdx - 1;
            if (pageIdx < 0) {
                pageIdx = this.state.pages.length - 1;
            }
            animations = {
                left: "animation",
                center: "animation-right",
                right: ""
            }
        }

        this.setState({
            animations: animations,
            disableScroll: true,
        });
        setTimeout(() => {
            this.setState({
                pageIdx: pageIdx,
                animations: {
                    left: "",
                    center: "",
                    right: "",
                },
                renderCount: this.state.renderCount + 1,
                disableScroll: false,
            });
        }, 300);
    }

    renderPages() {
        let leftIdx = (this.state.pageIdx - 1 < 0 ? this.state.pages.length - 1 : this.state.pageIdx - 1);
        let rightIdx = (this.state.pageIdx + 1 > this.state.pages.length - 1 ? 0 : this.state.pageIdx + 1);

        const LeftTag = this.state.pages[leftIdx];
        const CenterTag = this.state.pages[this.state.pageIdx];
        const RightTag = this.state.pages[rightIdx];

        return([
            <LeftTag pageState="left-page" animation={this.state.animations.left} renderCount={this.state.renderCount}/>,
            <CenterTag pageState="center-page" animation={this.state.animations.center} renderCount={this.state.renderCount}/>,
            <RightTag pageState="right-page" animation={this.state.animations.right} renderCount={this.state.renderCount}/>,
        ])
    }

    render() {
        if (this.state.loaded) {
            return(
                <React.Fragment>
                    <div onClick={ this.handlePageChange }><Arrow position="left"/></div>
                    <div id="content">{ this.renderPages() }</div>
                    <div onClick={ this.handlePageChange }><Arrow position="right"/></div>
                </React.Fragment>
            )
        }
        return(<div id="content" className="loading"><Loading/></div>);
    }
}


export default App;
