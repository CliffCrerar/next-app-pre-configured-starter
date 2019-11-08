/**
 * Write styles
 */
const
    fs = require('fs'),
    path = require('path'),
    execPath = process.cwd();

module.exports = (styles) => {
    console.log('styles: ', styles);
    console.log('execPath: ', execPath);
    fs.writeFileSync(path.join(execPath,'public/default-styles.css'),fs.readFileSync('../../styles.scss')
    
}