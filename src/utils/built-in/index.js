/**
 * BUILT IN functions
 * INFO: For inherent functionalitu
 */

const
    runTimeStyles = require('./run-time-styles'),
    exportMap = require('./to-config/_export-map'),
    configureHost = require('./to-config/_host'),
    configureNodePath = require('./to-config/_node-path'),
    configDefaults = require('./config-defaults');

module.exports = { runTimeStyles, exportMap, configureHost, configureNodePath, configDefaults };