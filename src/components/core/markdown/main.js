/**
 * MAIN Markdown component
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import handelError from './_http-error'
class MarkdownFileReaderComponent extends Component {
	/* CLASS CONSTRUCTOR */
	constructor(props) {
		super(props)
		// Set initial state
		this.state = { md: this.convert('# Loading content . . .') }
	}
	// life cycle hooks
	componentDidMount = () => this.httpGetMdFile(this.query, this.handleHttpGetMdFile);
	// Define class variables
	convertToMarkdown = this.props.getMarkDownIt(this.props.config); // converts to markdown
	convertToReact = this.props.htmlToReact.parse // converts to react
	httpGetMdFile = this.props.httpGetMdFile; // http get request function
	throwError = this.props.throwError; // http error function
	query = this.props.children; // the file that must be called
	// Handle the markdown file response from the API
	handleHttpGetMdFile = response =>
		response.blob().then(blob => blob.text().then(body => { this.changeState(body, response) }));
	// Handle the change state from http call
	changeState = (body, response) => response.ok // is response an error ?
		? this.setState({ md: this.convert(body) }) // is not an error
		: this.setState({ md: this.throwError(response.status, response.statusText, body) }); // is an error
	// function that converts to html then to react
	convert = mdText => this.convertToReact(this.convertToMarkdown.render(mdText));
	// Render component
	render = () => <Fragment>{this.state.md}</Fragment>
}

// Set property types
MarkdownFileReaderComponent.propTypes = {
	query: propTypes.string, // the the filename that will be called
	config: propTypes.object, // the markdown config
	httpGetMdFile: propTypes.func, // the function that calls the file
	getMarkDownIt: propTypes.func, // the function that converts markdown to html
	throwError: propTypes.func, // the function that creates error responses
	htmlToReact: propTypes.object // the function that converts html to react
}

MarkdownFileReaderComponent.defaultProps = {
	httpGetMdFile: require('./_http-get-md'),
	getMarkDownIt: require('./_md-it'),
	config: require('config').markdown_config,
	throwError: handelError,
	htmlToReact: require('./_html-to-react')
}

export default MarkdownFileReaderComponent;



