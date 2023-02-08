$(document).ready(function() {
    $.ajax({
        url: "datos.txt" , 
        success: function(data) {
            $("#contenedor").html(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#error").html("Error: " + errorThrown + " " + textStatus); 
        }
    });       
})