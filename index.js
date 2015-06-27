/* jshint node: true */
'use strict';

var VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-cli-auto-register-helpers',

  init: function() {
    var checker = new VersionChecker(this);
    this._checkerForEmber = checker.for('ember', 'bower');
  },

  treeFor: function() {
    if (this._checkerForEmber.lt('1.13.0')) {
      return this._super.treeFor.apply(this, arguments);
    } else {
      console.warn('ember-auto-register-helpers is not required for Ember 2.0.0 and later please remove from your `package.json`.');
    }
  }
};
