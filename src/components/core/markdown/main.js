import './styles.scss'

import React, { Component } from 'react';
// import ReactMarkdown from 'react-markdown/with-html';
import propTypes from 'prop-types';

class MarkdownFileReaderComponent extends Component {
    /* CLASS VARIABLES */
	query;
    contained;
	createErrorResponse;
	httpGetMdFile;
	handleErrors;
	buildErrorResponse;
	getMarkDownIt;
    /* CLASS CONSTRUCTOR */
	constructor(props) {
		super(props)
		console.log('props: ', props);
        this.state = this.props.conf['init-state'];
		this.query = this.props.children;
		
		/** Extend class with required methods */
		// this.contained = this.props.contained;
		// this.createErrorResponse = this.props.createErrorResponse;
		this.httpGetMdFile = this.props.httpGetMdFile;
		// this.handleErrors = this.props.handleErrors;
		// this.buildErrorResponse = this.props.buildErrorResponse;
        this.md = this.props.getMarkDownIt(this.props.conf);
	}
	componentDidMount = () => this.httpGetMdFile(this.query)

	render() {
		// const source = this.state.markdownFile;
		console.log('this.query: ', this.query);
		return (
			(
			<div>
				{/* <ReactMarkdown
					source={source}
					escapeHtml={false}
				/> */}

				Testing
				{(()=>this.md.render('# TESTING RENDER'))()}
			</div>)
		)
	}
}

MarkdownFileReaderComponent.propTypes = {
	query: propTypes.string,
    contained: propTypes.bool,
    conf: propTypes.object,
	createErrorResponse: propTypes.func ,
	httpGetMdFile: propTypes.func,
	handleErrors: propTypes.func,
	buildErrorResponse: propTypes.func,
	getMarkDownIt: propTypes.func
}

MarkdownFileReaderComponent.defaultProps = {
    contained: true,
    conf: require('config').markdown,
	httpGetMdFile: require('./_http-get-md'),
	createErrorResponse: require('./_handel-errors').createErrorResponse,
	handleErrors: require('./_handel-errors').handleErrors,
	buildErrorResponse: require('./_handel-errors').buildErrorResponse,
	getMarkDownIt: require('./_md-it')
}


export default MarkdownFileReaderComponent;



