// //////////////////
// SELECTRIC
// //////////////////
(function($, APP) {
  APP.Modules.Selectric = {
    init: function() {
      $(function() {
        $('[js-select]').selectric();
      });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
