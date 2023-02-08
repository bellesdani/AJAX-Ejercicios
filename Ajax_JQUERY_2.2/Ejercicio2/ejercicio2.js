$("#img").show();

setTimeout(function(){
  $.ajax({
    url: "ejercicio2.php",
    success: function(hora) {
      $("#img").hide();
      $("#contenedor").html(hora);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      $("#img").hide();
      $("#error").html("Error: " + jqXHR.status + " " + errorThrown);
    }
  });
}, 2000);