/**
 * Next.js Config file
 */
// Setup node path
require('./src/config').nodePath();
// declare variables call plugins;
const
  {configureHost,styles} = require('./src/config');
  withPlugins = require('next-compose-plugins'),
  sourceMaps = require('@zeit/next-source-maps'),
  sass = require('@zeit/next-sass'),
  mode = process.env.NODE_ENV === 'development',
  webpack = require('webpack'),
  dotenv = require('dotenv'),
  plugins = [[sass], [sourceMaps]];
 
console.log('|------------------------------------------------|');
console.log('|--> MODE: ', mode ? 'Development' : 'Production'  );
console.log('|------------------------------------------------|');
dotenv.config(); // initialize .env file
require('./src/utils/run-time-styles')(styles)
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
