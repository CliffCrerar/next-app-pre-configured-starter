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
	showReqLog = markdown_config['show-api-request-log'], // checks the console request log switch
	// declare functions
	
	// mdFiles = mode ? './public/markdown/' : './markdown/',
	// readDirectory = Dir => fs.readdirSync(path.resolve(mdFiles, Dir)),
	mdFiles = './public/markdown/',
	getFile = (file, filePath = mdFiles) => {
		var fp=filePath+file;
		console.log('fp: ', fp);
		return fs.readFileSync(fp, 'utf8')
},
	createErrorResponse = (status, type, message) => { throw new Error(JSON.stringify({ status, type, message })) };
// declare universal variable
// let filePath = null;
/**
 * TASK ROUTER
 */
function router(req, res) {
	console.log('API Received request');
	showReqLog && console.log('PROCESS CWD: ', process.cwd());
	showReqLog && console.log('THIS DIR: ', __dirname);
	showReqLog && console.log('READING DIR: ', mdFiles);
	showReqLog && reqLog(req); // switch is in /src/config/conf.json
	// filePath = null; // set global variable to null
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
	// 	console.log('fileName: ', fileName);
	//     let
	//         body = {}; // set body
	//     if (findFile(fileName) !== null) { // if the file is found
	//         body = getFile(filePath) // set body if the file is not found
	//     } else { // if file is not found
	//         createErrorResponse(404, 'fileNotExist', `The file '${fileName}' does not exist.`); // create error response
	//     }
	//     callback(body)
	try {
		// if (fileName === 'README') {
			// callback(getFile(fileName + '.md', process.cwd()))
		// } else {
			callback(getFile(fileName + '.md'))
		// }
	} catch (err) {
		createErrorResponse(404, 'fileNotExist', `The file '${fileName}' does not exist.`);
	}

}
// /**
//  * FIND THE REQUESTED FILE:
//  */
// function findFile(fileName) {
// 	console.log('fileName: ', fileName);
//     // if (checkIfMapped(fileName) && mode) return filePath; // check if mapping exists for request query
// 	const file = fileName + '.md'; // append file extension to name
// 	console.log('file: ', file);
//     // for (let i = 0; i < filePaths.length; i++) { // loop through the paths
//     // const checkPath = filePaths[i]; // set path for this iteration
//     try { // try and read the directory
//         if (readDirectory(mdFiles).includes(file)) { // if the read directory contains the file
//             return path.join(mdFiles, file); // return the filepath
//             // break; // stop the loop if the file is found
//         } else {
//             throw new Error(fileName)
//         }
//     } catch (error) { // if the directory cannot be read
//         createErrorResponse(404, 'invPath', `The path '${error.message}' does not exist.`); // create error response
//     }
//     // }

// }
/**
 * CHECKIFMAPPED: check if a mapping exists for the requested file
 */
// function checkIfMapped(fileName) {
//     const fileMapping = pageMap.filter(p => p.requestedAs === fileName); // try and find a mapping
//     if (fileMapping.length > 0) { // if mapping exists
//         filePath = fileMapping[0].located; // get the location per the mapping
//         return filePath; // return the file path per the mapping
//     } else { // if no mapping exists
//         return null; // return null
//     }
// }