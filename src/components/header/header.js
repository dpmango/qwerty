//////////
// HEADER
//////////
(function($, APP) {
  APP.Componenets.Header = {
    data: {},
    init: function() {
      this.updateHeaderActiveClass();
      this.hamburgerClickListener();
    },
    closeMobileMenu: function(isOnload) {
      $('[js-hamburger]').removeClass('is-active');
      $('.mobile-navi').removeClass('is-active');

      APP.Modules.ScrollBlock.blockScroll(isOnload);
    },
    hamburgerClickListener: function() {
      _document.on('click', '[js-hamburger]', function() {
        $(this).toggleClass('is-active');
        $('.mobile-navi').toggleClass('is-active');

        APP.Modules.ScrollBlock.blockScroll();
      });
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
