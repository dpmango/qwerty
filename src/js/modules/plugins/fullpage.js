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

      var haveBoth = false;

      if ($fullpageDesktop.length === 0 && $fullpageMobile.length === 0) {
        $('html').removeClass('fp-enabled');
        $('html').attr('style', '');
        return;
      }

      if ($fullpageDesktop.length > 0 && $fullpageMobile.length > 0) {
        haveBoth = true;
      }

      // https://github.com/alvarotrigo/fullpage.js
      var defaultFpOptions = {
        scrollOverflow: true,
        scrollOverflowReset: true,
        onLeave: onLeaveCb,
      };

      var fpOptionsDesktop = {
        scrollOverflow: true,
        scrollOverflowReset: true,
        onLeave: onLeaveCb,
      };

      if (!haveBoth) {
        if (!$fullpageDesktop.hasClass('is-enabled')) {
          $fullpageDesktop.addClass('is-enabled');
          $fullpageDesktop.fullpage(fpOptionsDesktop);
        }
      } else {
        if (!haveBoth) {
          $.extend(fpOptionsDesktop, {
            responsiveWidth: 768,
          });
        }

        if (window.innerWidth >= 769) {
          if (!$fullpageDesktop.hasClass('is-enabled')) {
            $fullpageDesktop.addClass('is-enabled');
            $fullpageDesktop.fullpage(fpOptionsDesktop);
          }
        } else {
          if ($fullpageDesktop.hasClass('is-enabled') && !haveBoth) {
            $fullpageDesktop.removeClass('is-enabled');
            $.fn.fullpage.destroy('all');
          }
        }

        if (window.innerWidth <= 768) {
          if (!$fullpageMobile.hasClass('is-enabled')) {
            $fullpageMobile.addClass('is-enabled');
            $fullpageMobile.fullpage(defaultFpOptions);
          }
        } else {
          if ($fullpageMobile.hasClass('is-enabled') && !haveBoth) {
            $fullpageMobile.removeClass('is-enabled');
            $.fn.fullpage.destroy('all');
          }
        }
      }

      // events
      function onLeaveCb(from, to, dir) {
        var $portfolio = $('.portfolio');
        if ($portfolio.length > 0) {
          var $sections = $portfolio.find('.section');
          var $nextSection = $($sections[to]);
          var color = $nextSection.data('header-color');
          if (color === 'white') {
            $('.header__right').addClass('mobile-black');
          } else {
            $('.header__right').removeClass('mobile-black');
          }
        }
      }
    },
  };
})(jQuery, window.APP);
