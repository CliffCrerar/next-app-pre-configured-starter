/**
 * HTTP Fetch function for MD class
 */

function httpGetMdFile(query) {
    console.log('query: ', query);
    fetch('/api')
        .then(res => {
            try {
                console.log('FETCH MD FILE RESPONSE: ', res)
                if (!res.ok) throw new Error(this.createErrorResponse(res));
                // res.blob().then(body=>console.log(body))
                // res.text().then(body=>console.log(body))
                // res.json().then(body=>console.log(body))
            } catch (httpErr) {
                this.handleErrors(httpErr);
            }
        })
}



module.exports = httpGetMdFile;