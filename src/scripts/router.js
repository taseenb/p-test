define(function(require) {

  'use strict';

  var Backbone = require('backbone');

  /**
   * Create router.
   */
  return Backbone.Router.extend({
    initialize: function() {
      console.log('router initialized');

      App.mediator.subscribe('scroll', this.onScroll.bind(this));
      App.mediator.subscribe('resize', this.onResize.bind(this));

    },

    onResize: function(e) {
      console.log(e);
    },

    onScroll: function(e) {
      console.log(e);
    }
  });

});