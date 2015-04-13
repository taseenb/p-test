define(function (require) {

  'use strict';

  var Backbone = require('backbone');

  return Backbone.Model.extend({

    defaults: {
      'title': '',
      'link': '',
      'media': {},
      'date_taken': '',
      'description': '',
      'published': '',
      'author': '',
      'author_id': '',
      'tags': ''
    },

    initialize: function () {
      console('item model ' + this.id);
    }

  });

});