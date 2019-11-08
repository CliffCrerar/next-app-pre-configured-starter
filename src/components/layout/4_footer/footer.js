import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state= {classes: this.props.classes}
    }
    render() {
        return (
            <footer style={this.state.classes.main}>
                LAYOUT COMPONENT: header
            </footer>
        )
    }
}

export default Footer;