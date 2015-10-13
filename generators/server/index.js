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
		// Core.
		app: file('app.js'),

		// Middleware.
		cookies: file('cookies.js'),
		environment: file('environment.js'),
		error: file('error.js'),
		logging: file('logging.js'),
		page: file('page.js'),
		tag: file('tag.js'),
		useragent: file('useragent.js'),

		// `package.json`.
		manifest: util.manifest()
	}
});
