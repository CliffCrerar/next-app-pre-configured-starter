/**
 * CONFIGURATION DEFAULTS
 * ----------------------------------------
 * MODIFICATION WARNING
 * ----------------------------------------
 * This script sets all the configuration defaults.
 * Do not modify if you are not sure what is going on
 * it will break everything.
 */
const mode = process.env.NODE_ENV === 'development';
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


    }
    // Assign markdown config defaults
    function handleMarkdownConfig(markdownConf) {
        // console.log('markdownConf: ', markdownConf);
        if (mode) {
            markdownConf['markdown-file-paths'].push('src/md-files')
                // markdownConf['readme-home-page'] && markdownConf['markdown-file-paths'].push('/');
        } else {
            markdownConf['markdown-file-paths'] = 'public/markdown'
        }



    }
    return conf
}