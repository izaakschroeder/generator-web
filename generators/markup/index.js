var util = require('yeoman-util');

function file(name) {
	return util.copy('src/markup/' + name, name, {
		overwrite: false
	});
}

module.exports = util.Base.extend({
  writing: {
    page: file('page.js'),
    render: file('render.js'),
  }
});
