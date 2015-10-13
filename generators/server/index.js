var util = require('yeoman-util');

function file(name) {
	return util.copy('src/server/' + name, name, {
		overwrite: false
	});
}

module.exports = util.Base.extend({
	initializing: function() {
		this.composeWith('@metalab/webpack:entry', {
			express: true,
			data: {
				name: 'server',
				target: 'node',
				partials: [
					'./partial/root.webpack.config.js',
				  './partial/env.webpack.config.js',
				  './partial/build-info.webpack.config.js',
				  './partial/hot.webpack.config.js',
				  './partial/babel.webpack.config.js',
				  './partial/postcss.webpack.config.js',
				  './partial/json.webpack.config.js',
				  './partial/vendor.webpack.config.js',
				  './partial/source-maps.webpack.config.js',
				  './partial/optimize.webpack.config.js',
				]
			}
		});
	},
	writing: {
		// Core.
		app: file('app.js'),

		// Middleware.
		assets: file('assets.js'),
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
