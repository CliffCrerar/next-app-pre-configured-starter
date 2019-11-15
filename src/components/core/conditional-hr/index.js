/**
 * CONDITIONAL HR Component
 * INFO: This component is used in the app main layout and is set to display an hr element depending on the condition set in the /src/config/conf.json "separate-layout-with-hr" attribute.
 */
import React, {Component} from 'react';
export default class ConditionalHr extends Component {
    constructor(props){
        super(props)
        this.state={
            classes:{
                main:{
                    display: this.props['separate-layout-with-hr'] ? 'block' : 'none'
                }
            }
        }
        // console.log(this.props);
    }

    render(){
        return <hr style={this.state.classes.main}/>
    }
}