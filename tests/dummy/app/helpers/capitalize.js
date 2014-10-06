import Ember from 'ember';

export function capitalize(value) {
  return typeof value === 'string' && value.toUpperCase();
}

export default Ember.Handlebars.makeBoundHelper(capitalize);
