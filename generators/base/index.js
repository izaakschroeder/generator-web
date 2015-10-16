
var util = require('yeoman-util');

function file(name) {
	return util.copy('src/' + name, name, {
		overwrite: false
	});
}

module.exports = util.Base.extend({
	initializing: function() {
		this.composeWith('@metalab/flowtype:lib', {
			express: true,
			data: {
				path: 'node_modules/fbjs/flow/include'
			}
		});
	},
  writing: {
    state: file('state.js'),
    app: file('container/app.js'),
		root: file('container/root.js'),
		store: file('store/index.js'),
		log: file('store/log.js'),
    manifest: util.manifest(),
  },
});
