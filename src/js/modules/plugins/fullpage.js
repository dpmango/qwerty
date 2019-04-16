//////////
// FULLPAGE
//////////
(function($, APP) {
  APP.Modules.Fullpage = {
    init: function() {
      this.start();
      this.listenResize();
    },

    listenResize: function() {
      _window.on('resize', debounce(this.start, 200));
    },

    start: function() {
      var $fullpage = $('[js-fullpage]');
      var fpOptions = {
        scrollOverflow: true,
        scrollOverflowReset: true,
        responsiveWidth: 768,
        // https://github.com/alvarotrigo/fullpage.js
      };

      if (_window.width() >= 768) {
        if (!$('html').hasClass('fp-enabled')) {
          $fullpage.fullpage(fpOptions);
        }
      } else {
        if ($('html').hasClass('fp-enabled')) {
          $.fn.fullpage.destroy('all');
        }
      }
    },
  };
})(jQuery, window.APP);
