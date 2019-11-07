/**
 * HTTP ERROR Handler
 */

function handleError(err,res){
    console.log('API ERROR HANDLER:',err)
    console.log();
    res.status(500).send(err);
}

module.exports = handleError;