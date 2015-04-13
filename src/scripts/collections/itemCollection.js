define(function(require) {

  'use strict';

  var Backbone = require('backbone');

  var Item = require('models/itemModel');

  return Backbone.Collection.extend({

    model: Item

  });

});