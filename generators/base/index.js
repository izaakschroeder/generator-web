
var util = require('yeoman-util');

function file(name) {
	return util.copy('src/' + name, name, {
		overwrite: false
	});
}

module.exports = util.Base.extend({
  writing: {
    state: file('state.js'),
    app: file('container/app.js'),
		root: file('container/root.js'),
		store: file('store/index.js'),
		log: file('store/log.js'),
    manifest: util.manifest(),
  },
});
