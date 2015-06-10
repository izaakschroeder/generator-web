
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	initializing: function() {
		this.composeWith('@metalab/license');
		this.composeWith('@metalab/editorconfig');
		this.composeWith('@metalab/eslint');
	},
	prompting: function () {

	},
	end: function() {
		this.log('Woohoo!');
	}
});
