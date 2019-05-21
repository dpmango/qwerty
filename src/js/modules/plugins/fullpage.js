//////////
// FULLPAGE
//////////
(function($, APP) {
  APP.Modules.Fullpage = {
    init: function() {
      this.start();
      this.listenResize();
    },
    refresh: function() {
      this.start(true);
    },
    listenResize: function() {
      _window.on('resize', debounce(this.start.bind(this), 200));
    },

    start: function(isRefresh) {
      var $fullpage = $('.page')
        .last()
        .find('[js-fullpage]');

      if ($fullpage.length === 0) {
        $('html').removeClass('fp-enabled');
        $('html').attr('style', '');
        return;
      }
      console.log($fullpage);
      var fpOptions = {
        scrollOverflow: true,
        scrollOverflowReset: true,
        // responsiveWidth: 768,
        // https://github.com/alvarotrigo/fullpage.js
      };

      if (window.innerWidth >= 1) {
        if (!$fullpage.hasClass('is-enabled')) {
          $fullpage.addClass('is-enabled');
          $fullpage.fullpage(fpOptions);
        }
      }
      // else {
      //   if ($fullpage.hasClass('is-enabled')) {
      //     // $fullpage.removeClass('is-enabled');
      //     // $.fn.fullpage.destroy('all');
      //   }
      // }
    },
  };
})(jQuery, window.APP);
