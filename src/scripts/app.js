define(function (require) {

  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var Router = require('router');
  var Mediator = require('mediator-js');

  var helper = require('helper');

  var local = false;
  var feed = local ? 'data/photos_public.json' : 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json';

  // Create App global
  window.App = window.App || {};

  // Global Events - pub/sub
  App.mediator = new Mediator();
  require('resize');
  require('scroll');

  // Get data, prepare data and start router
  $.ajax({
    url: feed,
    dataType: local ? undefined : 'jsonp',
    jsonp: local ? undefined : 'jsoncallback',
    success: function (data) {
      App.data = data;

      // Prepare data
      _.each(App.data.items, function (el, idx) {
        // Format all dates
        var date = new Date(el.published);
        el.published = helper.getFormattedDate(date); //'14th Apr 2015 at 12:45'
        // Clean author names
        el.author = helper.getCleanAuthorName(el.author);
      });

      // Start router
      App.router = new Router();
      Backbone.history.start();
    }
  });


});