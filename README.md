This is a jQuery plugin that adds methods for dealing with checkboxes, the pinnacle of all user interaction.

Just download and include 'jquery.check-uncheck.js' in your project. This plugin requires jQuery 1.4. At least I think it does - you're free to give it a shot with an older version.

	$(':checkbox').check(function() {
		// Do some stuff when a checkbox is checked.
	});

	$(':checkbox').uncheck(function() {
		// Do some other, much different stuff when a checkbox is unchecked.
	});

	// Check all the checkboxes.
	$(':checkbox').check();

	// Uncheck all the checkboxes.
	$(':checkbox').uncheck();
	
	
	
If you'd like to copy and past from here, have at it.

jquery.check-uncheck.js

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