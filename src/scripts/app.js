define(function (require) {

  'use strict';

  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Router = require('router');
  var Mediator = require('mediator-js');

  // Create App global
  window.App = window.App || {};

  // Events - pub/sub
  App.mediator = new Mediator();
  require('resize');
  require('scroll');

  // Start router
  App.router = new Router();
  Backbone.history.start();

  console.log('start app!!!');
  console.log($(), _, Backbone);

});