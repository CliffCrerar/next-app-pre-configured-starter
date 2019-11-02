import {Component}from 'react';

export default class MousePos extends Component {
    constructor() {
        super()
        this.state = { x: 0, y: 0 }
    }
    classes = {
        style1: {
            position: "fixed",
            padding: '10px',
            top: '10px',
            right: '10px',
            background: '#7bc97f',
            borderRadius: '4px',
        },
        style2: {
            color: 'white'
        }
    }
    componentDidMount = () => document.addEventListener('mousemove', this.handleMouseMove)
    handleMouseMove = (e) => this.setState({ x: e.clientX, y: e.clientY })
    render() {
        return (
            <div style={this.classes.style1}>
                <div style={this.classes.style2}>Mouse X: {this.state.x}</div>
                <div style={this.classes.style2}>Mouse Y: {this.state.y}</div>
            </div>
        )
    }
}
