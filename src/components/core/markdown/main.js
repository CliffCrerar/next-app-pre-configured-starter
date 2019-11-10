

import React, { Component, Fragment } from 'react';
import { Parser } from 'html-to-react';
import propTypes from 'prop-types';
import handelError from './_http-error'
const html = new Parser()
class MarkdownFileReaderComponent extends Component {
	/* CLASS CONSTRUCTOR */
	constructor(props) {
		super(props)
		// console.log('props: ', props);
		this.state = { md: this.convert('# Loading content . . .') }
	}
	// Define class variables
	convertToMarkdown = this.props.getMarkDownIt(this.props.config);
	convertToReact = this.props.html.parse
	httpGetMdFile = this.props.httpGetMdFile;
	throwError = this.props.throwError;
	query = this.props.children;
	// Handle the markdown file response from the API
	handleHttpGetMdFile = (response) => response.blob()
		.then(blob => blob.text()
			.then(body => { this.changeState(body, response) }));

	// Handle the change state from http call
	changeState = (body, response) => response.ok
		? this.setState({ md: this.convert(body) })
		: this.setState({ md: this.throwError(response.status, response.statusText, body) });

	componentDidMount = () => this.httpGetMdFile(this.query, this.handleHttpGetMdFile);
	convert = (mdText) => this.convertToReact(this.convertToMarkdown.render(mdText));
	render = () => <React.Fragment>{this.state.md}</React.Fragment>
}

MarkdownFileReaderComponent.propTypes = {
	query: propTypes.string,
	config: propTypes.object,
	httpGetMdFile: propTypes.func,
	getMarkDownIt: propTypes.func,
	throwError: propTypes.func,
	html: propTypes.object
}

MarkdownFileReaderComponent.defaultProps = {
	httpGetMdFile: require('./_http-get-md'),
	getMarkDownIt: require('./_md-it'),
	config: require('config').markdown_config,
	throwError: handelError,
	html: html
}

export default MarkdownFileReaderComponent;



