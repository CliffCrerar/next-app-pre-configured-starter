/**
 * Application built in api
 */
import reqLog from './_req-log';
import { markdown_conf } from 'config';
import fs from 'fs';
import path from 'path';
export default (req, res) => router.call(this, req, res);
// console.log('markdown: ', markdown_conf);
const filePaths = markdown_conf['markdown-file-paths'];
const showReqLog = markdown_conf['show-api-request-log'];
let filePath = null;


function router(req, res) {
  showReqLog && reqLog(req)
  filePath = null;
  try {
    readFile.call(this, req.query.file, (status, body) => {
      res.status(status).send(body);
    })
  } catch (err) {
    res.status(500).send(err);
  }
}

function findFile(fileName) {
  const file = fileName + '.md';
  const paths = filePaths;
  // console.log('paths: ', paths);

  for (let i = 0; i < paths.length; i++) {
    const checkPath = paths[i];
    if (fs.readdirSync(checkPath).includes(file)) {
      filePath = path.join(checkPath, file);
      break;
    }
  }
  return filePath;
}

function readFile(fileName, callback) {
  // console.log('fileName: ', fileName);
  let
    status = 520,
    body = {};
  if (findFile(fileName)!==null) {
    status = 200;
    body = fs.readFileSync(filePath)
    console.log('File exists');
  } else {
    status = 404
    console.log('File not found');
  }
  callback(status, body)
}
