/**
 * HTTP Fetch function for MD class
 */

const httpGetMdFile = (file,callback) =>fetch(`/api/get-file?file=${file}`).then(res => callback(res))
module.exports = httpGetMdFile;