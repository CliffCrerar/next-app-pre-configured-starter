const 
	fs = require('fs'),
	path = require('path'),
	cp = require('child_process'),
	rootPath = process.cwd(),
	Path = (p) => path.join(rootPath,p),
	req =(p)=> require(Path(p))
module.exports = () =>{
	const 
		conf = req('src/config'),
		appTitle = req('package.json').name;
		nowJson = JSON.stringify({
			name: appTitle
		});
		if(fs.existsSync(Path('now.json'))){
			cp.execSync(`rm ${Path('now.json')}`)
			fs.writeFileSync(Path('now.json'),nowJson,'utf8')
		}else {
			fs.writeFileSync(Path('now.json'),nowJson,'utf8')
		}
}