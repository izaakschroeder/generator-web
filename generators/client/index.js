
var util = require('yeoman-util');

function file(name) {
	return util.copy('src/client/' + name, name, {
		overwrite: false
	});
}

module.exports = util.Base.extend({
  initializing: function() {
    // entrypoints
    this.composeWith('@metalab/webpack:entry', {
      express: true,
      data: {
        name: 'client',
        target: 'web',
        partials: [
          'root',
          'env',
          'build-info',
          'hot',
          'babel',
          'postcss',
          'json',
          'vendor',
          'source-maps',
          'optimize',
          'compatibility',
          'stats'
        ],
      }
    });
  },

  writing: {
    state: file('state.js'),
  },
});
