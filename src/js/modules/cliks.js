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
          var $img = $(this)
            .closest('.vacancies__grid')
            .find('.vacancies__image');
          var $title = $(this)
            .closest('.vacancies__grid')
            .find('.vacancies__title');

          $('.vacancies__main .vacancies__right')
            .find('.vacancies__image')
            .html($img);
          $('.vacancies__main .vacancies__right')
            .find('.vacancies__title')
            .html($title);

          $('.vacancies__main .vacancies__right').fadeIn();
        })

        // toggler vacancies info right side mobile resolution
        .on('click', '.vacancies__right-title', function() {
          $(this)
            .parent()
            .toggleClass('is-open');
        })

        .on('click', '[js-open-input-file]', function() {
          $(this)
            .parents('.input-file-parent')
            .addClass('is-open');
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

      if ($(document).width() < 768) {
        // $(document).on('click', '[js-open-vacancy--pr]', function() {
        //   $('.vacancies__main').fadeOut();
        //   $('.vacancies__about--pr').fadeIn();
        // })

        $(document).on('click', '[js-close-vacancy]', function() {
          $('.vacancies__about').fadeOut();
          $('.vacancies__right').css('display', 'none');
          $('.vacancies__content').fadeIn();
        });

        // open vacancies info vacancies page
        $(document).on('click', '[js-open-vacancy--pr]', function() {
          $('.vacancies__main').fadeOut();
          $('.vacancies__about--pr').fadeIn();
          $('.vacancies__right').css('display', 'block');
        });

        // open vacancies info vacancies page
        $(document).on('click', '[js-open-vacancy--designer]', function() {
          $('.vacancies__main').fadeOut();
          $('.vacancies__about--designer').fadeIn();
          $('.vacancies__right').css('display', 'block');
        });

        $(document).on('click', '[js-open-empty-request]', function() {
          $('.vacancies__content').fadeOut();
          $('.vacancies__request-form').fadeIn();
          $('.vacancies__right-form .vacancies__close').css('display', 'block');
        });

        $(document).on('click', '[js-close-empty-form]', function() {
          $('.vacancies__request-form').fadeOut();
          $('.vacancies__content').fadeIn();
          $('.vacancies__right-form .vacancies__close').css('display', 'none');
        });
      }
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
