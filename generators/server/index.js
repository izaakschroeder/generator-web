var util = require('yeoman-util');

function file(name) {
	return util.copy(name, name, {
		overwrite: false
	});
}

module.exports = util.Base.extend({
	initializing: function() {
		this.composeWith('@metalab/webpack:entry', {
			express: true,
			data: {
				name: 'server',
				target: 'node'
			}
		});
	},
	writing: {
		app: file('app.js'),
		environment: file('environment.js')
		render: file('render.js'),
		page: file('page.js'),
		manifest: util.manifest()
	}
});
