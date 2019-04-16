//////////
// INPUT FOCUSES
//////////
(function($, APP) {
  APP.Modules.InputFocuses = {
    init: function() {
      var $elements = $('[js-input-focus]');
      if ($elements.length === 0) return;

      $elements.each(function(i, container) {
        var $container = $(container);
        var $input = $container.find('input, textarea');

        $input.on('focus', function() {
          $container.addClass('is-focused');
        });

        $input.on('blur', function() {
          if ($input.val().trim() !== '') {
            $container.addClass('is-focused');
          } else {
            $container.removeClass('is-focused');
          }
        });
      });
    },
  };
})(jQuery, window.APP);
