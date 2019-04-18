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
        centeredSlides: true,
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

      var mySwiper = undefined;
      function initSwiper() {
        var screenWidth = $(window).width();
        if (screenWidth < 768 && mySwiper == undefined) {
          mySwiper = new Swiper('[js-mobile-slider]', {
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
        } else if (screenWidth > 769 && mySwiper != undefined) {
          mySwiper.destroy();
          mySwiper = undefined;
          jQuery('.swiper-wrapper').removeAttr('style');
          jQuery('.swiper-slide').removeAttr('style');
        }
      }

      var swiper = new Swiper('[js-portfolio-slider]', {
        spaceBetween: 0,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });

      //Swiper plugin initialization
      initSwiper();

      //Swiper plugin initialization on window resize
      $(window).on('resize', function() {
        initSwiper();
      });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
