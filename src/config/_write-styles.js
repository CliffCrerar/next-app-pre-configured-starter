/**
 * Write styles
 */
const 
    fs = require('fs'),
    path = require('path'),
    execPath = process.cwd();
    
module.exports = (styles)=>{
    console.log('styles: ', styles);
    console.log('execPath: ', execPath);
}