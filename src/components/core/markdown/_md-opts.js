export default (conf) => {
    // console.log('MD conf: ', conf);

    const tempLinkAttrConf = {
        attrs: {
            target: '_blank',
            rel: 'noopener'
        }
    }

    function linkAttributeOptions(opts = '') {

        // console.log('linkAttributeOptions opts: ', opts);
        return opts.map(o => {
            if (o['use-pattern']) {
                return {
                    pattern: o.pattern,
                    attr: o.attr
                }
            } else {
                return { attr: o.attr };
            }
        })
    }


    function markDownItOptions(opts) {
        // console.log('markDownItOptions opts: ', opts);

        return {
            html: opts['parse-html'],        // Enable HTML tags in source
            xhtmlOut: opts['close-single-tag'],        // Use '/' to close single tags (<br />).
            // This is only for full CommonMark compatibility.
            breaks: opts['break-tag-linebreaks'],        // Convert '\n' in paragraphs into <br>
            langPrefix: 'language-',  // CSS language prefix for fenced blocks. Can be
            // useful for external highlighters.
            linkify: opts['all-links'],        // Autoconvert URL-like text to links

            // Enable some language-neutral replacement + quotes beautification
            typographer: opts["typographer"],

            // Double + single quotes replacement pairs, when typographer enabled,
            // and smartquotes on. Could be either a String or an Array.
            //
            // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
            // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
            quotes: '“”‘’',

            // Highlighter function. Should return escaped HTML,
            // or '' if the source string is not changed and should be escaped externally.
            // If result starts with <pre... internal wrapper is skipped.
            highlight: function (/*str, lang*/) { return ''; }
        }
    }

    return {
        markDownItOptions: markDownItOptions(conf),
        linkAttributeOptions: linkAttributeOptions(conf.link_attributes)
    };

}