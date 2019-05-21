// //////////////////
// STYLES FOR PAGE CLASSES
// //////////////////
(function($, APP) {
  APP.Modules.LengthStyles = {
    init: function() {
      if ($('.portfolio').length > 0) {
        // $('.header__logo').css('display', 'none');
        $('.header__right').addClass('mobile-black');
      } else {
        // $('.header__logo').css('display', 'block');
        $('.header__right').removeClass('mobile-black');
      }

      if ($('.blog').length > 0) {
        $('.header__logo').css('display', 'none');
      } else {
        $('.header__logo').css('display', 'block');
      }

      if ($('.portfolio--fullpage').length > 0) {
        $('.header__right').removeClass('mobile-black');
      } else {
        // $('.header__right').addClass('mobile-black');
      }
      if ($('.portfolio--page').length > 0) {
        $('body').addClass('editable');
      } else {
        $('body').removeClass('editable');
      }
      if ($('.homepage').length > 0) {
        $('.header__phone').css('display', 'block');
      } else {
        $('.header__phone').css('display', 'none');
      }
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
