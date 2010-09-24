/*!
// Check/Uncheck jQuery plugin
// Copyright Dan Gilbert, licensed GPL & MIT
// http://github.com/drtangible/check-uncheck-jquery-plugin
*/
(function( $ ){
  $.fn.check = function( handler ) {
    if (handler) {
      this.each(function() {
        $(this).change(function() {
          if ($(this).attr('checked')) {
            handler.call(this); 
          }
        });
      }); 
    } else {
      this.each(function() {
        $(this).attr('checked', true);
        $(this).change();
      });
    }
  };

  $.fn.uncheck = function( handler ) {
    if (handler) {
      this.each(function() {
        $(this).change(function() {
          if (!$(this).attr('checked')) {
            handler.call(this); 
          }
        });
      }); 
    } else {
      this.each(function() {
        $(this).attr('checked', false);
        $(this).change();
      });
    }
  };
})( jQuery );