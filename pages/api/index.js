/**
 * PAGE API
 * NOTE: Page api uses delegation function to send tasks to different workers
 */
const
    dotenv = require('dotenv'),
    cors = require('./_cors.js'),
    devMode = process.env.NODE_ENV === 'development';

devMode && dotenv.config();
// API Entry
function EndPoint(req, res) {
}

export default cors(EndPoint);