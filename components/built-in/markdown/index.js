import './styles.scss'
import emoji from 'markdown-it-emoji';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import propTypes from 'prop-types';
import milt from 'markdown-it-link-target';
import markdown from 'markdown-it',
import markdownItAttrs from 'markdown-it-attrs',

class MatNextMarkdown extends Component {
	constructor({ query, contained }) {
		super({ query })
		console.log(this.md);
		this.state = {
			containerClasses: ['contained'],
			markdownFile: 'Loading Markdown File'
		};
		this.md = markdown({ html: true, linkify: true, typographer: true, })
			.use(emoji)
			.use(markdownItAttrs)
			.use(milt, {
				target: '_blank'
			});
	}
	componentDidMount() {
		this.httpGetMdFile(props.query)
	}
	httpGetMdFile(query) {
		console.log('query: ', query);

	}
	render() {
		return (
			<div>
				 <ReactMarkdown source={md.render(props.children)} escapeHtml={false}/>
			</div>
		)
	}
}

MatNextMarkdown.propTypes = {
	query: propTypes.string,
	contained: propTypes.string
}

MatNextMarkdown.defaultProps = {
	contained: true
}


export default MatNextMarkdown;



