import Ember from 'ember';

const { Component, run: { next } } = Ember;

export default Component.extend({
  didInsertElement() {
    next(() => {
      this.$().addClass('--is-opened');
    });
  },

  'data-test-modal-background': true,

  click(e) {
    e.preventDefault();

    let onClick = this.get('onClick');

    if (onClick) {
      return onClick();
    }
  }
});
