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
          $('.swiper-button-prev').click();
          // $('.logotypes-logo').removeClass('is-active');
          // $('.logotypes-logo.logo').addClass('is-active');
        })

        .on('click', '.swiper-button-prev', function() {
          $('.portfolio__logotypes-buttons a').removeClass('is-active');
          $('[js-open-logo]').addClass('is-active');
        })

        // open logo-text portfolio page
        .on('click', '[js-open-logo-text]', function() {
          $('.portfolio__logotypes-buttons a').removeClass('is-active');
          $(this).addClass('is-active');
          $('.swiper-button-next').click();
          // $('.logotypes-logo').removeClass('is-active');
          // $('.logotypes-logo.logo-text').addClass('is-active');
        })

        .on('click', '.swiper-button-next', function() {
          $('.portfolio__logotypes-buttons a').removeClass('is-active');
          $('[js-open-logo-text]').addClass('is-active');
        })

        // open request form contacts page
        .on('click', '[js-open-form]', function() {
          $('.contacts-page__info').addClass('closed');
          $('.contacts-page__container').addClass('is-active');
        })

        // open vacancies info vacancies page
        .on('click', '[js-open-vacancy--pr]', function() {
          $('.vacancies__main').fadeOut();
          $('.vacancies__about--pr').fadeIn();
        })

        // open vacancies info vacancies page
        .on('click', '[js-open-vacancy--designer]', function() {
          $('.vacancies__main').fadeOut();
          $('.vacancies__about--designer').fadeIn();
        })

        // close vacancies info vacancies page
        .on('click', '[js-close-vacancy]', function() {
          $('.vacancies__about').fadeOut();
          $('.vacancies__main').fadeIn();
        })

        // open request form vacancies page
        .on('click', '[js-open-request]', function() {
          $('.vacancies__content').fadeOut();
          $('.vacancies__about').fadeOut();
          $('.vacancies__main').css('display', 'block');
          $('.vacancies__main .vacancies__right').fadeIn();
        })

        // toggler vacancies info right side mobile resolution
        .on('click', '.vacancies__right-title', function() {
          $(this)
            .parent()
            .toggleClass('is-open');
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
