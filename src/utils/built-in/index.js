/**
 * BUILT IN functions
 * INFO: For inherent functionalitu
 */

const
    exportMap = require('./to-config/_export-map'),
    configureHost = require('./to-config/_host'),
    configureNodePath = require('./to-config/_node-path'),
    configDefaults = require('./config-defaults');

module.exports = {  exportMap, configureHost, configureNodePath, configDefaults };