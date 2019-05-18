// //////////////////
// STYLES FOR PAGE CLASSES
// //////////////////
(function($, APP) {
  APP.Modules.LengthStyles = {
    init: function() {
      $(function() {
        if ($('.blog').length > 0) {
          $('.header__logo').css('display', 'none');
        }
        if ($('.portfolio').length > 0) {
          $('.header__logo').css('display', 'none');
          $('.header__right').addClass('mobile-black');
        }
        if ($('.portfolio--fullpage').length > 0) {
          $('.header__right').removeClass('mobile-black');
        }
        if ($('.portfolio--page').length > 0) {
          $('body').addClass('editable');
        }
        if ($('.homepage').length > 0) {
          $('.header__phone').css('display', 'block');
        }
      });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
