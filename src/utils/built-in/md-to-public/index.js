/**
 * MD-TO-PUBLIC
 * INFO: For production move all md files to public folder 
 */
const
// Declare node variables
    path = require('path'),
    fs = require('fs'),
    cp = require('child_process'),
    // Declare module variables
    mode = process.env.NODE_ENV === 'development',
    root = process.cwd(),
    rp = path.resolve,
    public = rp(root, 'public'),
    writeToDir = rp(public, 'markdown'),
    mdDirExist = fs.existsSync(writeToDir),
    // Declare module operational functions
    dirExist = (dir) => fs.existsSync(public, dir),
    readDir = (dir) => fs.readdirSync(rp(root, dir)),
    readFile = (file) => fs.readFileSync(file, 'utf8'),
    copyFile = (filePath, fileName) => fs.copyFileSync(rp(root, filePath, fileName), rp(writeToDir, fileName));
console.log('mode: ', mode);
module.exports = (paths) => {
    try {
        console.log('paths: ', paths);
        mode ?
            (() => mdDirExist && cp.execSync('rm -rd ' + writeToDir))() :
            ((cf) => {
                cf.bind(this);
                !mdDirExist ? fs.mkdir(writeToDir, [], function(err) {
                    if (err) throw new error({ msg: 'Could not create markdown folder', err });
                    cf(paths)
                }) : cf(paths);
            })(copyFiles);
    } catch (err) {
        console.error('PROBLEM DURIN BUILD');
        console.error(err);
    }
}

function copyFiles(paths, err) {
    console.log(this);
    paths.forEach(path => {
        try {
            console.log('writeToDir: ', writeToDir);
            readDir(path).forEach(file => copyFile(path, file));
        } catch (err) {
            console.error(err);
        }
    })
}