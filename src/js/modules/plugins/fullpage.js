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
      var $fullpageDesktop = $('.page')
        .last()
        .find('[js-fullpage]');

      var $fullpageMobile = $('.page')
        .last()
        .find('[js-fullpage-mobile]');

      if ($fullpageDesktop.length === 0 && $fullpageMobile.length === 0) {
        $('html').removeClass('fp-enabled');
        $('html').attr('style', '');
        return;
      }

      var fpOptions = {
        scrollOverflow: true,
        scrollOverflowReset: true,
        // responsiveWidth: 768,
        // https://github.com/alvarotrigo/fullpage.js
      };

      if (window.innerWidth >= 769) {
        if (!$fullpageDesktop.hasClass('is-enabled')) {
          $fullpageDesktop.addClass('is-enabled');
          $fullpageDesktop.fullpage(fpOptions);
        }
      }

      if (window.innerWidth <= 768) {
        if (!$fullpageMobile.hasClass('is-enabled')) {
          $fullpageMobile.addClass('is-enabled');
          $fullpageMobile.fullpage(fpOptions);
        }
      }

      // else {
      //   if ($fullpage.hasClass('is-enabled')) {
      //     $fullpage.removeClass('is-enabled');
      //     $.fn.fullpage.destroy('all');
      //   }
      // }
    },
  };
})(jQuery, window.APP);
