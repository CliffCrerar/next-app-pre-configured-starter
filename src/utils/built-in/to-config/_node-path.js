/**
 * Node Path
 * INFO: Uses the array app_config.node_path from the conf.json to setup the NODE_PATH environment variable
 * and exports it as a function to the next.config.js file and run to setup the node path 
 */

const
    path = require('path'),
    confPath = path.join(process.cwd(), 'src', 'config', 'conf');
module.exports = () =>
    process.env.NODE_PATH = require(confPath)
        .app_config.node_path
        .join(require('os')
            .platform() === 'win32' ? ';' : ':');