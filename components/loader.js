import { Component } from 'react';
export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 'block',
            height: this.props.height,
            width: this.props.width,
            position: this.props.position
        }
    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{`
                    .loading-img img{
                        position: relative;
                        height: 70px;
                    }
                `}</style>
                <div style={this.state} className="loading-img">
                    <img src="static/loading.gif" alt="loading-img" />
                </div>
            </React.Fragment>
        )
    }

}