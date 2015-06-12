
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	initializing: function() {
		this.composeWith('@metalab/license');
		this.composeWith('@metalab/editorconfig');
		this.composeWith('@metalab/eslint');
		this.composeWith('@metalab/gulp');
		this.composeWith('@metalab/webpack');
		this.composeWith('@metalab/webpack:babel');
		this.composeWith('@metalab/webpack:sass');
		this.composeWith('@metalab/webpack:vendor');
	},
	prompting: function () {

	},
	end: function() {
		this.log('Woohoo!');
	}
});
