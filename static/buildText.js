console.log('Build text');
const
    fs = require('fs'),
    path = require('path'),
    excl = ['z_img-temp.md'],
    p = path.join(__dirname, 'md')
getPageText = (files) => {
    console.log('p: ', p);
    const obj = {}
    files.forEach(file =>
        obj[(
            file.split('-')[1] +
            '-' +
            file.split('-')[2]
        ).split('.')[0]] = fs.readFileSync(path.join(p, file), 'utf8'))
    return obj;
};

module.exports = () => fs.writeFileSync(
    path.join(process.cwd(), 'static', 'pageText.json'),
    JSON.stringify(getPageText(fs.readdirSync(p))),
    'utf8'
);