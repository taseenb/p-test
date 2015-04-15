define(function (require) {

  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');

  var detailTpl = require('text!tpl/detail.html');

  return Backbone.View.extend({

    el: '#detail',

    initialize: function () {
      App.mediator.subscribe('scroll', this.onScroll.bind(this));
      App.mediator.subscribe('resize', this.onResize.bind(this));

      return this;
    },

    render: function (data) {
      var html = _.template(detailTpl)(data);
      this.$el.hide().html(html);

      // Clean description: only keep the 3rd p element
      this.$('.description p:lt(2)').remove();

      this.$el.show();

      return this;
    },

    show: function () {
      this.$el.show();

      return this;
    },

    hide: function () {
      this.$el.hide();

      return this;
    },

    onScroll: function (e) {
//      console.log(e);
    },

    onResize: function (e) {
//      console.log(e);
    }

  });

});