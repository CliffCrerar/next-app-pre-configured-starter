
const Cors = require('micro-cors');
const os = require('os')

const cors = Cors({
    allowedMethods: ['POST'],
    allowHeaders: ['Content-Type'],
    origin: process.env.NODE_ENV === 'development' ? 'localhost:3000' : os.hostname()
})

module.exports = cors;