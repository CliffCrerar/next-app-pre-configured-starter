/**
 * PAGE API
 * NOTE: Page api uses delegation function to send tasks to different workers
 */
const
    dotenv = require('dotenv'),
    cors = require('./_cors.js'),
    devMode = process.env.NODE_ENV === 'development',
    {httpJobs, handleError} = require('./http-workers');

devMode && dotenv.config();
// API Entry
function EndPoint(req, res) {
    console.log('CALLED API', req.body, req.query);
    try{
        res.status(200).send('Result of API call');
    } catch(err){
        handleError(err,res)
    }
    
}

export default cors(EndPoint);