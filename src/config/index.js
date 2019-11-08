/**
 * Export config items
 * INFO: Index file for config file and procedures under different conditions
 */

const
    confJSON = require('./conf.json'),
    nodePath = require('./_node-path'),
    configureHost = require('./_host');

module.exports = { confJSON, nodePath, configureHost }