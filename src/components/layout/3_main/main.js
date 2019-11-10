/**
 * MAIN Layout Element
 */
import React, { Component } from 'react';
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classes: this.props.classes,
            error: this.props.error
        }
    }
    toggleDisplayStack = () => {
        // this.state.classes
        console.log('this.state.classes: ', this.state.classes);
        const currentState = this.state.classes.errorStackStyle;
        if (currentState === 'none') {
            this.setState({ classes: { errorStackStyle: 'block' } });
        } else {
            this.setState({ classes: { errorStackStyle: 'none' } });
        }
    }

    render() {
        const { Content } = this.props
        return (
            <main style={this.state.classes.main}>
                <Content />
            </main>
        )
    }
}


export default Main

