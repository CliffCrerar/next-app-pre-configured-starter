const
	// React = require('react'),
	ReactMarkdown = require('react-markdown/with-html'),
	milt = require('markdown-it-link-target'),
	markdown = require('markdown-it'),
	markdownItAttrs = require('markdown-it-attrs'),
	emoji = require('markdown-it-emoji'),
	md = markdown({ html: true, linkify: true, typographer: true, })
		.use(emoji)
		.use(markdownItAttrs)
		.use(milt, {
			target: '_blank'
		});
const MatNextMarkdown = (props) => <ReactMarkdown source={md.render(props.children)} escapeHtml={false}/>

export default MatNextMarkdown;



