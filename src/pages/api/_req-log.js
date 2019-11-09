/**
 * REQUEST LOGGER
 */

export default (req)=>{
  console.log('req.header: ', req.headers);
  console.log('req.query: ', req.query);
  console.log('req.cookies: ', req.cookies);
  console.log('req.body: ', req.body);
  console.log('req.method: ', req.method);
  console.log('req.httpVersion: ', req.httpVersion);
  console.log('req.complete: ', req.complete);
  console.log('req.host: ', req.headers.referer);
  console.log('req.url: ', req.url);
}