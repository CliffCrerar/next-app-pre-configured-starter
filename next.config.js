/**
 * Next.js Config file
 */
// Setup node path
require('./src/utils/built-in/to-config/_node-path')();
// declare variables call plugins;
const
// mdFilesToPublic = require('./src/utils/built-in/md-to-public'),
    runTimeStyles = require('./src/utils/built-in/run-time-styles'),
    configureHost = require('./src/utils/built-in/to-config/_host'),
    createNowFile = require('./src/utils/built-in/create-now.json'),
    { styles, markdown_config } = require('./src/config'),
    withPlugins = require('next-compose-plugins'),
    sourceMaps = require('@zeit/next-source-maps'),
    sass = require('@zeit/next-sass'),
    mode = process.env.NODE_ENV === 'development',
    webpack = require('webpack'),
    dotenv = require('dotenv'),
    plugins = [
        [sass],
        [sourceMaps]
    ],
    target = mode ? 'server' : 'serverless',
    distDir = mode ? '.next' : 'build',
    fs = require('fs');

console.log('|------------------------------------------------|');
console.log('|--> MODE: ', mode ? 'Development' : 'Production');
console.log('|--> TARGET: ', target);
console.log('|--> DIST DIR:', distDir);
console.log('|------------------------------------------------|');

/*------------------BUILD CONFIGURATION-----------------------------*/
dotenv.config(); // initialize .env file
runTimeStyles(styles);
createNowFile();
fs.copyFileSync('./README.md', './public/markdown/README.md');
// mdFilesToPublic(markdown_config['markdown-file-paths']);
/*------------------BUILD CONFIGURATION-----------------------------*/

module.exports = withPlugins(plugins, {
    target,
    // distDir,
    webpack: config => {
        const env = new webpack.EnvironmentPlugin({
            DEBUG: mode,
            ORIGIN_URL: configureHost()
        });
        // globalGently  = new webpack.DefinePlugin({ 'global.GENTLY': false });
        config.node = { fs: 'empty' };
        // !mode && config.plugins.push(copyPlugin);
        config.plugins.push(env)
        return modifyConfig(config);
    }
});

function modifyConfig(conf) {
    // console.log('conf: ', conf);

    console.log('CONFIG TARGET: ', require('./next.config.js'));
    return conf
}