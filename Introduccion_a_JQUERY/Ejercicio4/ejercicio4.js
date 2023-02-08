$(document).ready(function() {
    $("#check").click(function() {
        if ($(this).prop('checked')) {
            var contenedor = "<div id='contenedor'></div>";
            $("body").append(contenedor);
            $("#contenedor").append("Aqui está la suma<input type='text' id='campo'>");
                $('#campo').val(parseInt($('#num1').val())+parseInt($('#num2').val()))
        }else {
            $("#contenedor").remove();
        }          
    });     
});