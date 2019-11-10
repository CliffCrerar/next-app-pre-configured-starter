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
  filePaths = markdown_config['markdown-file-paths'], // get file paths from config
  showReqLog = markdown_config['show-api-request-log'], // checks the console request log switch
  pageMap = markdown_config['page-map']; // gets the special mapping configuration
let filePath = null;

/**
 * TASK ROUTER
 */
function router(req, res) {
  showReqLog && reqLog(req); // switch is in /src/config/conf.json
  filePath = null;
  try {
    readFile.call(this, req.query.file, (status, body) => {
      res.status(status).send(body);
    })
  } catch (err) {
    console.error('ReadFile Error:', err);
    console.error('ERROR Message:', err.message);
    let status;
    try{
      status = JSON.parse(err.message).status
    } catch(err){
      status = 500;
    }
    res.status(status).send(err.message);
  }
}

/**
 * FIND THE REQUESTED FILE
 */
function findFile(fileName) {
  if (checkIfMapped(fileName)) {return filePath}; // check if mapping exists for request query
  const file = fileName + '.md'; // append file extension to name
  const paths = filePaths; // assign global paths to local variable
  for (let i = 0; i < paths.length; i++) { // loop through the paths
    const checkPath = paths[i]; // 
    try {
      if (fs.readdirSync(checkPath).includes(file)) {
        filePath = path.join(checkPath, file);
        break;
      }
    } catch (error) {
      createErrorResponse(404, 'invPath',`The path '${checkPath}' does not exist.`);
    }
  }
  return filePath;
}

function checkIfMapped(fileName) {
  const fileMapping = pageMap.filter(p => p.requestedAs === fileName);
  console.log('fileMapping: ', fileMapping);
  if (fileMapping.length > 0) {
    filePath = fileMapping[0].located;
    return filePath;
  } else {
    return null;
  }
}

function readFile(fileName, callback) {
  // console.log('fileName: ', fileName);
  let
    status = 520,
    body = {};
  if (findFile(fileName) !== null) {
    status = 200;
    body = fs.readFileSync(filePath)
    console.log('File exists');
  } else {
    status = 404
    console.log('File not found');
    createErrorResponse(404, 'fileNotExist',`The file '${fileName}' does not exist.`)
  }
  callback(status, body)
}

function createErrorResponse(status, type, message){
  const errorResponse = {status,type,message}
  throw new Error(JSON.stringify(errorResponse));
}