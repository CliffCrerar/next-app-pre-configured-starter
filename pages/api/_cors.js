
const Cors = require('micro-cors');

const cors = Cors({
    allowedMethods: ['POST','GET'],
    allowHeaders: ['Content-Type']
})

module.exports = cors;