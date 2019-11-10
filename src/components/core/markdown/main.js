

import React, { Component, Fragment } from 'react';
import { Parser } from 'html-to-react';
import propTypes from 'prop-types';
const html = new Parser()
class MarkdownFileReaderComponent extends Component {
	/* CLASS CONSTRUCTOR */
	constructor(props) {
		super(props)
		console.log('props: ', props);
		this.state = {
			md: this.parseMarkdownToHtml('# Loading content . . .')
		}
		this.handleHttpGetMdFile = this.handleHttpGetMdFile.bind(this);
		this.parseMarkdownToHtml = this.parseMarkdownToHtml.bind(this);
	}
	toReact = this.props.html
	query = this.props.children;
	markdown = this.props.getMarkDownIt(this.props.conf.markdown_conf);
	httpGetMdFile = this.props.httpGetMdFile;
	// Handle the markdown file response from the API
	handleHttpGetMdFile(response) {
		// console.log('response: ', response);
		if (response.ok) {
			this.setStateContent(response.status)
			response.blob()
				.then(blob=>
					blob.text().then(text=>{
						const content = text;
						this.setStateContent(content);
					})
			);
		} else {
			const
				msg = `### The requested file '${this.query}' does not exist`,
				instruction = this.props.conf.markdown_conf['error-instruction'],
				fullMessage = `# ${response.status} ${response.statusText} \n${msg} \n >${instruction}`;
				this.setStateError(fullMessage)
		}
	}
	setStateError = (msg)=> this.setState({md: ((self,msgToParse) => (<div className="display-error">
				{self.parseMarkdownToHtml(msgToParse)}</div>))(this,msg)});
	setStateContent = (content) => this.setState({md:this.parseMarkdownToHtml(`${content}`)});
	componentDidMount = () => this.httpGetMdFile(this.query, this.handleHttpGetMdFile);
	parseMarkdownToHtml = (mdText) => this.toReact.parse(this.markdown.render(mdText));
	render = () => <React.Fragment>{this.state.md}</React.Fragment>
}

MarkdownFileReaderComponent.propTypes = {
	query: propTypes.string,
	conf: propTypes.object,
	httpGetMdFile: propTypes.func,
	getMarkDownIt: propTypes.func,
	html: propTypes.object
}

MarkdownFileReaderComponent.defaultProps = {
	httpGetMdFile: require('./_http-get-md'),
	getMarkDownIt: require('./_md-it'),
	html: html
}

export default MarkdownFileReaderComponent;



