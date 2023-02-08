$(document).ready(function() {
  $("#boton").on("click", function() {
    $("p").desaparecerParrafos()
  })
  $.fn.desaparecerParrafos = function () {
    $(this).fadeOut()
  }
});