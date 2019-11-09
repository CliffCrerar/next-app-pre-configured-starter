import './styles.scss'

import React, { Component, Fragment } from 'react';
// import ReactMarkdown from 'react-markdown/with-html';
import { Parser } from 'html-to-react';
import propTypes from 'prop-types';
const html = new Parser()
// console.log('htmlParse: ', htmlParseToReact);
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
		this.state = {
			status: '',
			md: this.parseMarkdownToHtml('# Loading content <span>. . . <span>')
		}
		this.query = this.props.children;
		this.httpGetMdFile = this.props.httpGetMdFile;
		this.handleGetMdFile = this.handleGetMdFile.bind(this);
	}
	componentDidMount = () => this.httpGetMdFile(this.query, this.handleGetMdFile);

	handleGetMdFile(response) {
		console.log('response: ', response);
		if(response.ok){
			
		} else {
			function errMsg(stat,text){
				const msg = `### The requested file '${this.query}' does not exist`
				return `<div># ${stat} ${text} \n${msg} {class="display-error"}</div>`;
			}
			this.setState({md:
				this.parseMarkdownToHtml(errMsg.call(this,response.status,response.statusText))
			})
		}
	}

	parseMarkdownToHtml = (mdText)=> {
		const md = this.props.getMarkDownIt(this.props.conf)
		return this.props.html.parse(md.render(mdText));
	}

	render() {
		return <React.Fragment>{this.state.md}</React.Fragment>
	}
}

MarkdownFileReaderComponent.propTypes = {
	query: propTypes.string,
	// contained: propTypes.bool,
	conf: propTypes.object,
	// createErrorResponse: propTypes.func,
	httpGetMdFile: propTypes.func,
	// handleErrors: propTypes.func,
	// buildErrorResponse: propTypes.func,
	getMarkDownIt: propTypes.func,
	html: propTypes.object
}

MarkdownFileReaderComponent.defaultProps = {
	contained: true,
	conf: require('config').markdown,
	httpGetMdFile: require('./_http-get-md'),
	// createErrorResponse: require('./_handel-errors').createErrorResponse,
	// handleErrors: require('./_handel-errors').handleErrors,
	// buildErrorResponse: require('./_handel-errors').buildErrorResponse,
	getMarkDownIt: require('./_md-it'),
	html: html
}


export default MarkdownFileReaderComponent;



