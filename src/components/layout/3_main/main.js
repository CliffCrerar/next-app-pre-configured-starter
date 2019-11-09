import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: this.props.classes,
            error: this.props.error
        }
        // this.setState({classes:{errorStackStyle: { display: 'none' }}})

    }

    componentDidMount() {

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

    // DisplayPage = () => {
    //     // console.log(this.state.error.message);
    //     const { Content } = this.props

    //     if (this.state.error.message !== null) {
    //         return <Content />
    //     } else {
    //         const message =  this.state.error.message;
    //         return (
    //         <>
    //             <div>ERROR MESSAGE: {message}</div>
    //             <br/>
    //             <button  onClick={this.toggleDisplayStack}>See stack</button>
    //             <div style={this.state.classes.errorStackStyle}>ERROR STACK: {this.state.error.stack}</div>
    //             <Content />
    //         </>)
    //     }
    // }
    render() {
        const { Content } = this.props

        return (
            <main style={this.state.classes.main}>
                LAYOUT COMPONENT: MAIN<br />
                <div className="main-content-temp">Main content:
                    <div className="main-content-box">
                        {/* {this.DisplayPage.call(this)} */}
                        <Content />
                    </div>
                </div>
            </main>
        )
    }
}


export default Main

