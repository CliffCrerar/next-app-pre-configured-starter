/**
 * Customise MD IT
 */

// Markdown it and plugins import
import emoji from 'markdown-it-emoji';
import milt from 'markdown-it-link-target';
import markdown from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

const getMarkDownIt = () => markdown(this.props.conf['md-it-api'])
        .use(emoji).use(markdownItAttrs).use(milt, {target: '_blank'});

        module.exports = getMarkDownIt;