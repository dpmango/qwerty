//////////
// HEADER
//////////
(function($, APP) {
  APP.Componenets.Header = {
    data: {},
    init: function() {
      this.updateHeaderActiveClass();
      this.hamburgerClickListener();
      this.languageActive();
      this.scrollToNextSection();
    },
    closeMobileMenu: function(isOnload) {
      $('[js-hamburger]').removeClass('is-active');
      $('.mobile-navi').removeClass('is-active');
      $('.header').removeClass('is-active');

      APP.Modules.ScrollBlock.blockScroll(isOnload);
    },
    hamburgerClickListener: function() {
      _document.on('click', '[js-hamburger]', function() {
        $(this).toggleClass('is-active');
        $('.mobile-navi').toggleClass('is-active');
        $('.header__phone').toggleClass('is-active');
        $('.header').toggleClass('is-active');

        APP.Modules.ScrollBlock.blockScroll();
      });
    },
    languageActive: function() {
      _document.on('click', '[js-choose-language]', function() {
        $('.header__language').removeClass('is-active');
        $(this).addClass('is-active');

        APP.Modules.ScrollBlock.blockScroll();
      });
    },

    scrollToNextSection: function() {
      // $(document).on('click', '[js-scroll-to-section]', function() {
      //   var fuller = $(this)
      //       .closest('.section')
      //       .next(),
      //     section = $(this).closest('.fullpage');
      //   section.animate(
      //     {
      //       scrollTop: section.scrollTop() + fuller.offset().top,
      //     },
      //     700,
      //   );
      // });
    },
    updateHeaderActiveClass: function() {
      // SET ACTIVE CLASS IN HEADER
      // * could be removed in production and server side rendering when header is inside barba-container
      var headerMenuList = $('.header__menu li');
      if (headerMenuList.length === 0) return;

      headerMenuList.each(function(i, val) {
        if (
          $(val)
            .find('a')
            .attr('href') == window.location.pathname.split('/').pop()
        ) {
          $(val).addClass('is-active');
        } else {
          $(val).removeClass('is-active');
        }
      });
    },
  };
})(jQuery, window.APP);
