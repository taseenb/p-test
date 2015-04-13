define(function(require) {

  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');

  var listTpl = require('text!tpl/list.html');

  return Backbone.View.extend({

    el: '#list',

    initialize: function(data) {
      App.mediator.subscribe('scroll', this.onScroll.bind(this));
      App.mediator.subscribe('resize', this.onResize.bind(this));

      this.listData = data;

      return this;
    },

    render: function() {
      if (!this.rendered) {
        var html = _.template(listTpl)({
          list: this.listData
        });
        this.$el.html(html);
        this.rendered = true;
      }

      return this;
    },

    show: function() {
      this.$el.show();

      return this;
    },

    hide: function() {
      this.$el.hide();

      return this;
    },

    onScroll: function(e) {
      console.log(e);
    },

    onResize: function(e) {
      console.log(e);
    }

  });

});