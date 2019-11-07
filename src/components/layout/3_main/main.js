import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props)
        const classes={
            showElement: {
                display: "block"
            }
        }
        this.state = {classes}
    }
    render() {
        return (
            <main style={this.state.classes.showElement}>
                LAYOUT COMPONENT: MAIN<br />
                <div className="main-content-temp">Main content:
                <div className="main-content-box">
                        {this.props.content}
                    </div>
                </div>
            </main>
        )
    }
}

export default Main

