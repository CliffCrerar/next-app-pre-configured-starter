/**
 * NEXT.JS Get markdown file api
 * INFO: This is the api file that is used the built in markdown React component, the component
 *       sends all requests according to it's children or source attribute. The API will search all directories
 *       defined in main configuration file's markdown section 'markdown-file-paths' or use the special mapping
 *       configuration for specially mapped files.
 */
// IMPORTS
import reqLog from './_req-log';
import { markdown_config } from 'config';
import fs from 'fs';
import path from 'path';
// export via task router
export default (req, res) => router.call(this, req, res); // pass request to task router
// Global Variable declarations
const
// declare variables
    mode = process.env.NODE_ENV === 'development',
    filePaths = markdown_config['markdown-file-paths'], // get file paths from config
    showReqLog = markdown_config['show-api-request-log'], // checks the console request log switch
    pageMap = markdown_config['page-map'], // gets the special mapping configuration
    // declare functions
    root = process.cwd(),
    readDirectory = Dir => fs.readdirSync(path.join(root, Dir)),
    getFile = FilePath => fs.readFileSync(path.join(root, FilePath), 'utf8'),
    createErrorResponse = (status, type, message) => { throw new Error(JSON.stringify({ status, type, message })) };
// declare universal variable
let filePath = null;
/**
 * TASK ROUTER
 */
function router(req, res) {
    console.log('API Received request');
    showReqLog && reqLog(req); // switch is in /src/config/conf.json
    filePath = null; // set global variable to null
    try { // try and run the readfile function
        readFile.call(this, req.query.file, body => res.status(200).send(body));
    } catch (err) { // if an error occurs by means of createErrorResponse
        console.error('ERROR Message:', err.message); // show error message in the console
        console.error('STACK:', err.stack); // shoe error stack in the console
        let status; // declare status
        try { // try and read message returned by createErrorResponse (Should always be JSON)
            status = JSON.parse(err.message).status // convert to json to get status code
        } catch (err) { // if not a json object (error should be unknown and then must be debugged)
            status = 500; // set status to internal server error code
        }
        res.status(status).send(err.message); // send response
    }
}
/**
 * READFILE: The function the reads the file after the path has been determined
 */
function readFile(fileName, callback) {
    let
        body = {}; // set body
    if (mode) {


        if (findFile(fileName) !== null) { // if the file is found
            body = getFile(filePath) // set body if the file is not found
        } else { // if file is not found
            createErrorResponse(404, 'fileNotExist', `The file '${fileName}' does not exist.`); // create error response
        }
    } else {
        getFile(path.join('public/markdown/' + fileName + '.md'));
    }
    callback(body)
}
/**
 * FIND THE REQUESTED FILE:
 */
function findFile(fileName) {
    if (checkIfMapped(fileName) && mode) return filePath; // check if mapping exists for request query
    const file = fileName + '.md'; // append file extension to name
    for (let i = 0; i < filePaths.length; i++) { // loop through the paths
        const checkPath = filePaths[i]; // set path for this iteration
        try { // try and read the directory
            if (readDirectory(checkPath).includes(file)) { // if the read directory contains the file
                filePath = path.join(checkPath, file); // set the global filepath variable
                break; // stop the loop if the file is found
            }
        } catch (error) { // if the directory cannot be read
            createErrorResponse(404, 'invPath', `The path '${checkPath}' does not exist.`); // create error response
        }
    }
    return filePath; // return the filepath
}
/**
 * CHECKIFMAPPED: check if a mapping exists for the requested file
 */
function checkIfMapped(fileName) {
    const fileMapping = pageMap.filter(p => p.requestedAs === fileName); // try and find a mapping
    if (fileMapping.length > 0) { // if mapping exists
        filePath = fileMapping[0].located; // get the location per the mapping
        return filePath; // return the file path per the mapping
    } else { // if no mapping exists
        return null; // return null
    }
}