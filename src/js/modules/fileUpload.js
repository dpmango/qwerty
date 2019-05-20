// //////////////////
// FILE UPLOAD
// //////////////////
(function($, APP) {
  APP.Modules.FileUpload = {
    init: function() {
      _document.on('change', '#chooseFile', function() {
        var filename = $('#chooseFile').val();
        if (/^\s*$/.test(filename)) {
          $('[js-file-upload]').removeClass('active');
          $('[js-noFile]').text('No file chosen...');
        } else {
          $('[js-file-upload]').addClass('active');
          $('[js-noFile]').text(filename.replace('C:\\fakepath\\', ''));
        }
      });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
