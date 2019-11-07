/**
 * Export config items
 * INFO: Index file for config file and procedures under different conditions
 */

const 
    conf = require('./conf.json'),
    nodePath = require('./_node-path'),
    configureHost = require('./_host');

module.exports = {conf,nodePath,configureHost}