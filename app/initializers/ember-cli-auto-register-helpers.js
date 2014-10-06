import Ember from 'ember';
import config from '../config/environment';

export var initialize = function() {
  var matcher = new RegExp(config.modulePrefix + '/helpers/.*');

  Ember.A(Ember.keys(window.require.entries)).filter(function(path) {
    return matcher.test(path);
  }).forEach(function(path) {
    var helperName = path.replace(config.modulePrefix + '/helpers/','');
    Ember.Handlebars.registerHelper(helperName, window.require(path)['default']);
  });
};

export default {
  name: 'ember-cli-auto-register-helpers',

  initialize: initialize
};
