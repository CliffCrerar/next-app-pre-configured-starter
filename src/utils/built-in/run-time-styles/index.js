/**
 * Write styles
 */
const
    fs = require('fs'),
    path = require('path'),
    sass = require('sass'),
    nodeSass = require('node-sass');
execPath = process.cwd();


console.log('execPath: ', execPath);
module.exports = (styles) => {
    
    const configStyles = styles.map(file => `@import '${file}';`).join();
    const headerComment = fs.readFileSync(path.join(__dirname, '.file-header'), 'utf8');
    const cssStyles = nodeSass.renderSync({ data: configStyles })
    const css = headerComment + '\n' + cssStyles.css.toString('utf8');
    
    // console.log('styles: ', styles);
    // console.log('configStyles: ', configStyles);
    // const scssStyles = fs.readFileSync(path.join(execPath,'src','styles.scss'),'utf8');
    // console.log('cssStyles: ', cssStyles);
    // console.log('css: ', css);

    fs.writeFileSync(path.join(execPath, 'public/default-styles.css'), css, 'utf8');
}