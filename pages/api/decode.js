module.exports = {
    decode:(s)=>Buffer.from(s,'base64').toString('ascii'),
    encode:(s)=>Buffer.from(s,'ascii').toString('base64')
}


