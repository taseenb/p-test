define(function(require) {

  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');

  var headerTpl = require('text!tpl/header.html');
  var contentTpl = require('text!tpl/content.html');
  var footerTpl = require('text!tpl/footer.html');

  return Backbone.View.extend({

    el: '#main',

    initialize: function() {
      App.mediator.subscribe('scroll', this.onScroll.bind(this));
      App.mediator.subscribe('resize', this.onResize.bind(this));
    },

    render: function() {
      var header = _.template(headerTpl)({
        title: App.data.title,
        link: App.data.link,
        modified: App.data.modified
      });
      var content = _.template(contentTpl)();
      var footer = _.template(footerTpl)();

      var html = header + content + footer;
      this.$el.html(html);
    },

    onScroll: function(e) {
//      console.log(e);
    },

    onResize: function(e) {
//      console.log(e);
    }

  });

});