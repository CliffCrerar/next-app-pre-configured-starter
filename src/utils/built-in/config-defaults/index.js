/**
 * CONFIGURATION DEFAULTS
 * ----------------------------------------
 * MODIFICATION WARNING
 * ----------------------------------------
 * This script sets all the configuration defaults.
 * Do not modify if you are not sure what is going on
 * it will break everything.
 */

module.exports = function(conf) {
    Object.entries(conf).forEach(
        l1Conf => {
            l1ConfDesc = l1Conf[0];
            l1ConfSet = l1Conf[1];
            switch (l1ConfDesc) {
                case 'layout_config':
                    handleLayoutConfig(l1ConfSet);
                    break;
                case 'markdown_config':
                    handleMarkdownConfig(l1ConfSet);
                    break;
            }
        });
    // Assign Layout config defaults
    function handleLayoutConfig(layoutConf) {
        // console.log('handleLayoutConfig: ', layoutConf);
		layoutConf.main.classes.errorStackStyle = { display: 'none' }
		if(!layoutConf.header.classes.main.textAlign) {layoutConf.header.classes.main.textAlign='center'}
    }
    // Assign markdown config defaults
    function handleMarkdownConfig(markdownConf) {
        // console.log('markdownConf: ', markdownConf);
        // markdownConf['markdown-file-paths'].push('src/md-files')
    }
    return conf
}