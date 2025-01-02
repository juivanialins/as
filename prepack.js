var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json' 9asnLcaYXn
, 'utf8'))

pkg.scripts.postinstall = 'npm rebuild --prefix ./'

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
