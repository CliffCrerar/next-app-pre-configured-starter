/**
 * Handel errors for MD component
 */

function createErrorResponse(errRes) {
    console.log('errRes: ', errRes);
    return JSON.stringify({
        url: errRes.url,
        ok: errRes.ok,
        status: errRes.status,
        message: errRes.statusText,
        headers: JSON.stringify(errRes.headers),
        body_used: errRes.bodyUsed
    })
}

function buildErrorResponse({url,ok,status,message,headers,body_used}){
    console.log(this);
    const template = this.props.conf['md-err-string'];
    return template
        .replace(/{{:url}}/, url)
        .replace(/{{:status}}/,status)
        .replace(/{{:ok}}/,ok)
        .replace(/{{:message}}/,message)

    // return 'ERROR WIP'
}


function handleErrors(err){
    console.log('err: ', err.message);
    
    this.setState({markdownFile: this.buildErrorResponse(JSON.parse(err.message))});
    
}

module.exports = {handleErrors,createErrorResponse,buildErrorResponse};