import './styles.scss'
import emoji from 'markdown-it-emoji';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import propTypes from 'prop-types';
import milt from 'markdown-it-link-target';
import markdown from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

class MatNextMarkdown extends Component {
	query;
	contained;
	constructor(props) {
		super(props)
		this.query = this.props.query;
		this.contained = this.props.contained;

		console.log('this.md: ', this.md);
		this.state = {
			containerClasses: ['contained'],
			markdownFile: '# Loading Markdown File'
		};
		this.md = markdown(
			{
				html: true,
				linkify: true,
				typographer: true,
			}
		)
			.use(emoji)
			.use(markdownItAttrs)
			.use(milt, {
				target: '_blank'
			});
	}
	componentDidMount = () => this.httpGetMdFile(this.query)
	httpGetMdFile(query) {
		console.log('query: ', query);

		fetch('/api')
			.then(res => {
				try {
					console.log('FETCH MD FILE RESPONSE: ', res)
					if (!res.ok) throw new Error(this.createErrorResponse(res));
					// res.blob().then(body=>console.log(body))
					// res.text().then(body=>console.log(body))
					// res.json().then(body=>console.log(body))
				} catch (httpErr) {
					console.log('httpErr: ', httpErr);
					console.error('HTTP CALL ERROR:', httpErr);
				}
			})
	}
	createErrorResponse(errRes){
		console.log('errRes: ', errRes);
		return JSON.stringify({
			url:'url',
			ok: false,
			status:900
		})
	}	
	handleErrors = (err) => {
		console.error('FETCH MD FILE ERROR:', err)
		this.setState({
			markdownFile: `
			## ERROR GETTING FILE:\n
			- URL: ${err.url}
			- OK: ${err.ok.toString()} \n
			- STATUS: ${err.status} \n
		`});
	}
	render() {
		return (
			<div>
				<ReactMarkdown
					source={this.md.render(this.state.markdownFile)}
					escapeHtml={false}
				/>
			</div>
		)
	}
}

MatNextMarkdown.propTypes = {
	query: propTypes.string,
	contained: propTypes.bool
}

MatNextMarkdown.defaultProps = {
	contained: true
}


export default MatNextMarkdown;



