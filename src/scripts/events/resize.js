define(function(require){

  var _ = require('underscore');

  var Event = function() {
    this.initialize();
  };

  Event.prototype = {
    initialize: function() {
      this.$win = $(window);
      this.callback = _.debounce(this.onResize, 250).bind(this);

      this.$win.on('resize', this.callback);
    },
    onResize: function() {
      App.mediator.publish('resize', {
        width: this.$win.width(),
        height: this.$win.height()
      });
    }
  };

  return new Event();

});