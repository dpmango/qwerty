//////////
// CICKS
//////////
(function($, APP) {
  APP.Modules.Clicks = {
    init: function() {
      $(document)
        .on('click', '[href="#"]', function(e) {
          e.preventDefault();
        })
        .on('click', '[js-link]', function(e) {
          var dataHref = $(this).data('href');
          if (dataHref && dataHref !== '#') {
            e.preventDefault();
            e.stopPropagation();
            Barba.Pjax.goTo(dataHref);
          }
        })
        // prevent going the same link (if barba is connected)
        .on('click', 'a, [js-link]', function(e) {
          var href = $(this).data('href') || $(this).attr('href');
          var path = window.location.pathname;

          if (href === path.slice(1, path.length)) {
            e.preventDefault();
            e.stopPropagation();
          }
        })

        // scroll to section skip button
        .on('click', '[js-move-down]', function() {
          $.fn.fullpage.moveSectionDown();
        })

        // open logo portfolio page
        .on('click', '[js-open-logo]', function() {
          $('.portfolio__logotypes-buttons a').removeClass('is-active');
          $(this).addClass('is-active');
          $('.logotypes-logo').removeClass('is-active');
          $('.logotypes-logo.logo').addClass('is-active');
        })

        // open logo-text portfolio page
        .on('click', '[js-open-logo-text]', function() {
          $('.portfolio__logotypes-buttons a').removeClass('is-active');
          $(this).addClass('is-active');
          $('.logotypes-logo').removeClass('is-active');
          $('.logotypes-logo.logo-text').addClass('is-active');
        })

        .on('click', '[js-open-form]', function() {
          $('.contacts-page__info').addClass('closed');
          $('.contacts-page__container').addClass('is-active');
        })

        .on('click', '[js-open-vacancy]', function() {
          $('.vacancies__main').fadeOut();
          $('.vacancies__about').fadeIn();
        })

        // scroll to section
        .on('click', 'a[href^="#section"]', function() {
          // section scroll
          var el = $(this).attr('href');
          var topTarget = $(el).offset().top;

          // $('body, html').animate({scrollTop: topTarget}, 1000);
          TweenLite.to(window, 1, {
            scrollTo: { y: $(el).offset().top, autoKill: false },
            ease: easingSwing,
          });

          return false;
        });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
