/**
 * Export config items
 * INFO: Index file for config file and procedures under different conditions
 */

const
    conf=require('./conf.json'),
    confJSON = require('./defaults')(conf),
    nodePath = require('../utils/built-in/to-config/_node-path'),
    configureHost = require('../utils/built-in/to-config/_host'),
    { styles,  } = confJSON.app_config,
    markdown_config = confJSON.markdown_config;
    

module.exports = { confJSON, nodePath, configureHost, styles, markdown_config };