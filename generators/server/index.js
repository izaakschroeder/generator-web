var util = require('yeoman-util');

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
		app: util.copy('app.js', 'app.js'),
		render: util.copy('render.js', 'render.js'),
		manifest: util.manifest()
	}
});
