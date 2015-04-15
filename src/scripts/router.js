define(function (require) {

  'use strict';

//  var _ = require('underscore');
  var Backbone = require('backbone');

  // Views
  var MainView = require('views/mainView');
  var ListView = require('views/listView');
  var DetailView = require('views/detailView');

  return Backbone.Router.extend({

    routes: {
      '': 'list',
      'item/:idx': 'item'
    },

    initialize: function () {
      var mainView = new MainView();
      mainView.render();
    },

    list: function () {
      if (!App.listView) {
        App.listView = new ListView(App.data.items);
      }

      if (App.detailView) {
        App.detailView.hide();
      }

      App.listView.render().show();
    },

    item: function (idx) {
      var index = parseInt(idx);

      if (index < 0 || index > App.data.items.length - 1) {
        return;
      } else {
        var data = App.data.items[index];
        if (!App.detailView) {
          App.detailView = new DetailView();
        }

        if (App.listView) {
          App.listView.hide();
        }

        App.detailView.render(data).show();
      }
    }

  });

});