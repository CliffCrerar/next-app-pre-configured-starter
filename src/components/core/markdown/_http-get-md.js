/**
 * HTTP Fetch function for MD class
 */

function httpGetMdFile(file,callback) {
    console.log('file: ', file);
    fetch(`/api/get-file?file=${file}`)
        .then(res => {
            try {
                console.log('FETCH MD FILE RESPONSE: ', res)
                callback(res);
            } catch (httpErr) {
                console.log('httpErr: ', httpErr);
                callback(httpErr);
            }
        })
}



module.exports = httpGetMdFile;