//////////
// FULLPAGE
//////////
(function($, APP) {
  APP.Modules.Fullpage = {
    init: function() {
      $('[js-fullpage]').fullpage({
        scrollOverflow: true,
        scrollOverflowReset: true,
        // https://github.com/alvarotrigo/fullpage.js
      });
    },

    refresh: function() {},
  };
})(jQuery, window.APP);
