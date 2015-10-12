
var util = require('yeoman-util');

module.exports = util.Base.extend({
	initializing: function() {
		// entrypoints
		this.composeWith('@metalab/webpack:entry', {
			express: true,
			data: {
				name: 'client',
				target: 'web'
			}
		});
	},
});
