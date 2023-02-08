$(document).ready(function() {
(function($) {
  $.fn.showMessage = function(options) {
    var settings = $.extend({
      message: "Hello, World!"
    }, options );
    
    return this.click(function() {
      alert(settings.message);
    });
  };
})(jQuery);

$(document).ready(function() {
  $("#elemento").showMessage({
    message: "Hola Antonio"
  });
 })
});