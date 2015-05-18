import Ember from 'ember';
import startApp from '../helpers/start-app';
import { test } from 'ember-qunit';
import { module } from 'qunit';

var App;

module('Acceptance: helpers work', {
  setup() {
    App = startApp();
  },
  teardown() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index');
    assert.equal(Ember.$('#capitalized').text(), 'FOO', 'helper was autoloaded');
  });
});
