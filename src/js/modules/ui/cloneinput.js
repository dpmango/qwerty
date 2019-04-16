//////////
// INPUT FOCUSES
//////////
(function($, APP) {
  APP.Modules.CloneInput = {
    init: function() {
      var $elements = $('[js-clone-input]');
      if ($elements.length === 0) return;

      $elements.each(function(i, container) {
        var $container = $(container);
        var $input = $container.find('input, textarea');
        var $target = $container.find('.input-container__text');

        $input.on('keyup', function(e) {
          console.log(e);
          $target.text($(this).val());
        });
      });
    },
  };
})(jQuery, window.APP);
