
var util = require('yeoman-util');

module.exports = util.Base.extend({
  initializing: function() {

    // license
    // this.composeWith('@metalab/license:spdx');

    // contributing
    this.composeWith('@metalab/contributing');

    // editorconfig
    this.composeWith('@metalab/editorconfig');

    // eslint
    this.composeWith('@metalab/eslint');
    this.composeWith('@metalab/eslint:babel');
    this.composeWith('@metalab/eslint:style');
    this.composeWith('@metalab/eslint:filenames');
    this.composeWith('@metalab/eslint:docs');
    this.composeWith('@metalab/eslint:import');
    this.composeWith('@metalab/eslint:react');
    this.composeWith('@metalab/eslint:modern');
    this.composeWith('@metalab/eslint:errors');

    // flowtype
    // this.composeWith('@metalab/flowtype');

    // webpack
    this.composeWith('@metalab/webpack');
    this.composeWith('@metalab/webpack:babel');
    this.composeWith('@metalab/webpack:build-info');
    this.composeWith('@metalab/webpack:compatibility');
    this.composeWith('@metalab/webpack:env');
    this.composeWith('@metalab/webpack:hot');
    this.composeWith('@metalab/webpack:json');
    this.composeWith('@metalab/webpack:optimize');
    this.composeWith('@metalab/webpack:postcss');
    this.composeWith('@metalab/webpack:root');
    this.composeWith('@metalab/webpack:sharp');
    this.composeWith('@metalab/webpack:source-maps');
    this.composeWith('@metalab/webpack:stats');
    this.composeWith('@metalab/webpack:vendor');

    // app layout
    this.composeWith('../base');
    this.composeWith('../markup');

    // entrypoints
    this.composeWith('../client');
    this.composeWith('../server');
  },

  writing: {
    manifest: util.manifest(),
    install: function() {
      this.npmInstall();
    }
  },

  end: function() {
    this.log('🎆  Fire the engines with `npm run dev`!');
  }
});
