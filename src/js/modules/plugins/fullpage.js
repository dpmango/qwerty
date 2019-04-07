//////////
// FULLPAGE
//////////
(function($, APP) {
  APP.Modules.Fullpage = {
    init: function() {
      $('[js-fullpage]').fullpage({
        //options here
        // https://github.com/alvarotrigo/fullpage.js
      });
    },

    refresh: function() {},
  };
})(jQuery, window.APP);
