/**
 * Next.js Config file
 */
// Setup node path
require('./src/config').configureNodePath();
// declare variables call plugins;
const
  {configureHost,styles,runTimeStyles} = require('./src/config');
  withPlugins = require('next-compose-plugins'),
  sourceMaps = require('@zeit/next-source-maps'),
  sass = require('@zeit/next-sass'),
  mode = process.env.NODE_ENV === 'development',
  webpack = require('webpack'),
  dotenv = require('dotenv'),
  plugins = [[sass], [sourceMaps]];
  fs=require('fs');
 
console.log('|------------------------------------------------|');
console.log('|--> MODE: ', mode ? 'Development' : 'Production'  );
console.log('|------------------------------------------------|');

/*------------------BUILD CONFIGURATION-----------------------------*/
dotenv.config(); // initialize .env file
runTimeStyles(styles);
/*------------------BUILD CONFIGURATION-----------------------------*/

module.exports = withPlugins(plugins, {
  target: mode ? 'server' : 'serverless',
  webpack: config => {
    const env = new webpack.EnvironmentPlugin({
      DEBUG: mode,
      ORIGIN_URL: configureHost()
    })
    config.node = { fs: 'empty' };
    config.plugins.push(env)
    return config;
  }
});
