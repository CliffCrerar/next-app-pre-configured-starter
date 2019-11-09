/**
 * Customise MD IT
 */

// Markdown it and plugins import
// import emoji from 'markdown-it-emoji';
import mila from 'markdown-it-link-attributes';
import markdown from 'markdown-it';
import attrs from 'markdown-it-attrs';
import options from './_md-opts';

const getMarkDownIt = (props) =>{
        console.log('MD props: ', props);
        const {markDownItOptions,lintAttributeOptions} = options(props);
        return new markdown(markDownItOptions)
                //.use(emoji)
                .use(attrs)
                .use(mila,lintAttributeOptions);

}

module.exports = getMarkDownIt;