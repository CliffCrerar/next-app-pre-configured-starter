/**
 * HTTP ERROR
 * INFO: This component is displayed when an http get markdown file throws an error
 */

export default (statCode, statText, errMessage) => {
    console.log('errMessage: ', errMessage);
    console.log('statText: ', statText);
    console.log('statCode: ', statCode);
    let errObject,errType,message;
    try{
        errObject = JSON.parse(errMessage);
        message = errObject.message;
        errType = errObject.type;
    } catch(err) {
        errType = null;
        message = 'Unknown Error';
    }
    
    return (
        <React.Fragment>
            <div className="display-error">
                <h1>{statCode} {statText}</h1>
                <h4>ERROR MESSAGE: <br />{message}</h4>
                <p>{errorInstruction(errType)}</p>
            </div>
        </React.Fragment>
    )
}

function errorInstruction(type){
    switch(type){
        case 'invPath': return "Either path added to the config attribute 'markdown-file-paths' does not exist or was entered incorrectly";
        case 'fileNotExist': return "Check the file name that the MarkDown react component is calling, or ensure that the path where the file is has been added to the 'markdown-file-paths'."
        case 'other': 'Other error';
        default: return '';
    }
}