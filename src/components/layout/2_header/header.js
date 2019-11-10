/**
 * Header
 * Info is the applicaiton header section header can be configured:
 * TODO:
 * static: display the same text on every page,
 * title: display the page title as the page header for each page
 * hero: page header is hero, configure pages per links as to when to display hero.
 */
import React, { Component } from 'react';
import './header.scss';
export default class Header extends Component {
    constructor(props) {
        // console.log('HEADER props: ', props);
        super(props)
        this.state = { classes: this.props.classes }
    }
    render() {
        return (
            <header style={this.state.classes.main}>
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            </header>
        )
    }
}