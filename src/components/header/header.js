//////////
// HEADER
//////////
(function($, APP) {
  APP.Componenets.Header = {
    data: {},
    init: function(fromPjax) {
      if (!fromPjax) {
        this.hamburgerClickListener();
        this.languageActive();
        this.scrollToNextSection();
      }
    },
    closeMobileMenu: function(isOnload) {
      $('[js-hamburger]').removeClass('is-active');
      $('.mobile-navi').removeClass('is-active');
      $('.header').removeClass('is-active');

      APP.Modules.ScrollBlock.blockScroll(isOnload);
    },
    hamburgerClickListener: function() {
      var _this = this;
      _document.on('click', '[js-hamburger]', function() {
        $(this).toggleClass('is-active');
        $('.mobile-navi').toggleClass('is-active');
        $('.header__phone').toggleClass('is-active');
        $('.header').toggleClass('is-active');

        APP.Modules.ScrollBlock.blockScroll();
      });

      _document.on('click', '.mobile-navi__menu li a', function(e) {
        e.stopPropagation();
        _this.closeMobileMenu(true);
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
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
