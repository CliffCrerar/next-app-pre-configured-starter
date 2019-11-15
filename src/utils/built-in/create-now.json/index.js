const 
	fs = require('fs'),
	path = require('path'),
	cp = require('child_process')
	root = process.cwd();

module.exports = () =>{
	const 
		conf = require('../../../config'),
		appTitle = require('../../../../package.json').name;
		nowJson = {
			name: appTitle
		}
		if(fs.existsSync(path.join(root,'now.json'))){
			cp.execSync(`rm ${path.join(root,'now.json')}`)
			fs.writeFileSync(path.join(root,'now.json',nowJson,'utf8'))
		}else {
			fs.writeFileSync(path.join(root,'now.json',nowJson,'utf8'))
		}
}