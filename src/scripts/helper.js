define(function (require) {

  return {

    getCleanAuthorName: function(flickrAuthor) {
      var name = '';
      name = flickrAuthor.replace(/^(nobody@flickr.com\ \()/, '');
      name = name.slice(0, - 1);
      return name;
    },

    /**
     * Format a js date into English format and return a string.
     * @param date Date object.
     * @returns {string}
     */
    getFormattedDate: function (date) {

      // Month names
      var mthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      // 12-hour clock
      var hours12 = '';
      var ampm = '';
      if (date.getHours() / 12 < 1) {
        // am
        hours12 = date.getHours();
        ampm = 'am';
      } else {
        hours12 = date.getHours();
        ampm = 'pm';
      }

      var day = date.getDay();
      var month = mthNames[date.getMonth()];
      var year = date.getFullYear();
      var minutes = date.getMinutes();

      var formattedDate = day + ' ' + month + ' ' + year + ' at ' + hours12 + ':' + minutes + ampm;

      return formattedDate;
    }


  };

});