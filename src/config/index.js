/**
 * Export config items
 * INFO: Index file for config file and procedures under different conditions
 */
const {
    runTimeStyles,
    exportMap,
    configDefaults
} = require('../utils/built-in'),
    conf = require('./conf.json'),
    confJSON = configDefaults(conf), { styles, } = confJSON.app_config,
    markdown_config = confJSON.markdown_config;


module.exports = {
    confJSON,
    styles,
    markdown_config,
    runTimeStyles,
    exportMap
};