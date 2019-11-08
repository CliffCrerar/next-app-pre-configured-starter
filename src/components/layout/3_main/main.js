import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = { classes: this.props.classes }
    }
    render() {
        const { Content } = this.props

        return (
            <main style={this.state.classes.main}>
                LAYOUT COMPONENT: MAIN<br />
                <div className="main-content-temp">Main content:
                <div className="main-content-box">
                        <Content />
                    </div>
                </div>
            </main>
        )
    }
}

export default Main

