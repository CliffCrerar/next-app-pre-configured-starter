/**
 * Application built in api
 */
import reqLog from './_req-log';
import fs from 'fs';
export default (req, res) => router(req, res);

function router(req, res) {
  reqLog(req)
  try {
    readFile(req.query.file, ( status, body ) => {
      res.status(status).send(body);
    })
  } catch (err) {
    res.status(500).send(err);
  }
}

function readFile(file, callback) {
  callback(404,{})
}
