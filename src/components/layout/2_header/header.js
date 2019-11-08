/**
 * App Header
 */
import React, { Component } from 'react';
import './header.scss';
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { classes: this.props.classes }
    }
    render() {
        return (
            <header style={this.state.classes}>
                LAYOUT COMPONENT: header
                <h1>{this.props.title}</h1>
            </header>
        )
    }
}