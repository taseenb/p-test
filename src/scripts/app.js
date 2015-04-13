define(function (require) {

  'use strict';

  var Backbone = require('backbone');
  var Router = require('router');
  var Mediator = require('mediator-js');

  var local = false;
  var feed = local ? 'data/photos_public.json' : 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json';


  // Create App global
  window.App = window.App || {};

  // Global Events - pub/sub
  App.mediator = new Mediator();
  require('resize');
  require('scroll');

  // Get data and start router
  $.ajax({
    url: feed,
    dataType: local ? 'json' : 'jsonp',
    jsonp: local ? undefined : 'jsoncallback',
    success: function (data) {
      App.data = data;

      console.log(data);

      // Start router
      App.router = new Router();
      Backbone.history.start();
    }
  });

  console.log('start app!');

});