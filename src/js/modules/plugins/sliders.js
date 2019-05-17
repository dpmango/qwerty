//////////
// SLIDERS
//////////
(function($, APP) {
  APP.Modules.Sliders = {
    data: {
      swipers: [],
      responsiveSwipers: {
        mobileSlider1: {
          instance: undefined,
          disableOn: 769,
        },
      },
    },
    init: function() {
      this.initSwipers();
      this.initResponsiveSwipers();
      this.listenResize();
    },
    listenResize: function() {
      _window.on('resize', debounce(this.initResponsiveSwipers.bind(this), 200));
    },
    initSwipers: function() {
      new Swiper('[js-portfolio-slider]', {
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

      new Swiper('[js-service-slider]', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        parallax: true,
        speed: 600,
        pagination: {
          el: '.swiper-pagination',
        },
        breakpoints: {
          // when window width is <= 992px
          768: {
            loop: true,
            mousewheel: false,
            parallax: false,
            direction: 'horizontal',
          },
        },
      });

      var $portfolioSliders = $('[js-portfolio-item-slider]');
      if ($portfolioSliders.length > 0) {
        $portfolioSliders.each(function(i, slider) {
          var portfolioSlider = new Swiper(slider, {
            loop: false,
            pagination: {
              el: '.swiper-pagination',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            autoplay: false,
          });

          var $navContainer = $(slider).closest('[js-swiper-nav-container]');

          if ($navContainer.length > 0) {
            $navContainer.find('[js-swiper-nav] a').on('click', function() {
              var dataIndex = $(this).data('slide');

              portfolioSlider.slideTo(dataIndex);
            });
          }

          portfolioSlider.on('slideChange', function() {
            if ($navContainer.length > 0) {
              var index = portfolioSlider.realIndex;
              var $navLinks = $navContainer.find('[js-swiper-nav] a');

              if ($navLinks.length === 0) return;
              $navLinks.each(function(i, link) {
                var $link = $(link);
                if ($link.data('slide') == index) {
                  $link.addClass('is-active');
                } else {
                  $link.removeClass('is-active');
                }
              });
            }
          });
        });
      }
    },
    initResponsiveSwipers: function() {
      var mobileSlider1 = '[js-mobile-slider]';
      if ($(mobileSlider1).length > 0) {
        this.initMobileOneSlide(mobileSlider1);
      }
    },
    initMobileOneSlide: function(selector) {
      var dataObj = this.data.responsiveSwipers.mobileSlider1;

      if ($(selector).length > 0) {
        if (window.innerWidth >= dataObj.disableOn) {
          if (dataObj.instance !== undefined) {
            dataObj.instance.destroy(true, true);
            dataObj.instance = undefined;
          }
        } else {
          if (dataObj.instance === undefined) {
            dataObj.instance = new Swiper('[js-mobile-slider]', {
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

    // initFeaturedProductsSwiper: function(){
    //   var screenWidth = $(window).width();
    //   if (screenWidth < 768 && mySwiper == undefined) {
    //     // init
    //   } else if (screenWidth > 769 && mySwiper != undefined) {
    //     mySwiper.destroy();
    //     mySwiper = undefined;
    //     jQuery('.swiper-wrapper').removeAttr('style');
    //     jQuery('.swiper-slide').removeAttr('style');
    //   }
    // },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
