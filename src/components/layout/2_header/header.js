/**
 * App Header
 */
import React, { Component } from 'react';
import './header.scss';
export default class Header extends Component {
    constructor() {
        super()
        this.state={
            classes:{
                showElement:{
                    display: 'block'
                }
            }
        }
    }
    render() {
        return (
            <header style={this.state.classes.showElement}>
                LAYOUT COMPONENT: header
            </header>
        )
    }
}