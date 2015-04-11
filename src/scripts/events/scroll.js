define(function(require){

  var _ = require('underscore');

  var Event = function() {
    this.initialize();
  };

  Event.prototype = {
    initialize: function() {
      this.$body = $('body');
      this.callback = _.throttle(this.onScroll, 100).bind(this);

      $(window).on('scroll', this.callback);
    },
    onScroll: function() {
      App.mediator.publish('scroll', {
        scrollLeft: this.$body.scrollLeft(),
        scrollTop: this.$body.scrollTop()
      });
    }
  };

  return new Event();

});