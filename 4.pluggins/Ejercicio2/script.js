$(document).ready(function() {
  $("#boton").on("click", function() {
    $("img").deslizar()
  })
  $.fn.deslizar = function () {
    $(this).slideUp()
  }
});