/**
 * Next.js Config file
 */
// declare variables call plugins;
const
  buildText = require('./static/buildText'),
  withPlugins = require('next-compose-plugins'),
  sourceMaps = require('@zeit/next-source-maps'),
  sass = require('@zeit/next-sass'),
  os = require('os'),
  mode = process.env.NODE_ENV === 'development',
  protocol = mode ? 'http' : 'https',
  host = mode ? 'localhost' : os.hostname(),
  port = mode ? ':3000' : '80' || '443',
  // {exportMap} = require('./static/utils'),
  webpack = require('webpack'),
  dotenv = require('dotenv'),
  plugins = [
    [sass],
    [sourceMaps]
  ],
  // Config file
  node_path = require('./static/config').Config.node_path;

  
// Setup Node Path
process.env.NODE_PATH = node_path.join(os.platform() === 'win32' ? ';' : ':');
buildText();
console.log('|------------------------------------------|');
console.log('|--> MODE: ',mode?'Development':'Production');
console.log('|------------------------------------------|');
dotenv.config(); // initialize .env file
module.exports = withPlugins(plugins, {
  target: mode ? 'server' : 'serverless',
  webpack: config => {
    const env = new webpack.EnvironmentPlugin({
      DEBUG: mode,
      ORIGIN_URL: `${protocol}://${host}${port}`
    })
    config.node = { fs: 'empty' };
    config.plugins.push(env)
    return config;
  }
})
