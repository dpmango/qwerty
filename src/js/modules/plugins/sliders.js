//////////
// SLIDERS
//////////
(function($, APP) {
  var aboutSwiper = {
    instance: undefined,
    disableOn: 992,
  };
  APP.Modules.Sliders = {
    init: function() {
      // EXAMPLE SWIPER
      new Swiper('[js-slider]', {
        wrapperClass: 'swiper-wrapper',
        slideClass: 'example-slide',
        direction: 'horizontal',
        loop: false,
        watchOverflow: true,
        setWrapperSize: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
        // loop: true,
        normalizeSlideIndex: true,
        // centeredSlides: true,
        freeMode: true,
        // effect: 'fade',
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.example-next',
          prevEl: '.example-prev',
        },
        breakpoints: {
          // when window width is <= 992px
          992: {
            autoHeight: true,
          },
        },
      });

      // INIT CHECKERS
      var aboutSelector = '[js-mobile-slider]';

      if ($(aboutSelector).length > 0) {
        if (_window.width() >= aboutSwiper.disableOn) {
          if (aboutSwiper.instance !== undefined) {
            aboutSwiper.instance.destroy(true, true);
            aboutSwiper.instance = undefined;
          }
          // return
        } else {
          if (aboutSwiper.instance === undefined) {
            // ABOUT SWIPER
            aboutSwiper.instance = new Swiper(aboutSelector, {
              wrapperClass: 'swiper-wrapper',
              slideClass: 'swiper-slide',
              wrapperClass: 'swiper-wrapper',
              direction: 'horizontal',
              loop: true,
              watchOverflow: true,
              setWrapperSize: true,
              centeredSlides: true,
              spaceBetween: 0,
              slidesPerView: 1,
              normalizeSlideIndex: true,
              grabCursor: true,
              freeMode: false,
              pagination: {
                el: '.swiper-pagination',
              },
              breakpoints: {
                // when window width is <= 992px
                992: {
                  spaceBetween: 36,
                },
                576: {
                  spaceBetween: 20,
                },
                414: {
                  spaceBetween: 10,
                },
              },
            });
          }
        }
      }
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
