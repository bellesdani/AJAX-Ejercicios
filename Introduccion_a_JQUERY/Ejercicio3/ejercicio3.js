$(document).ready(function(){
    $("input").click(function(){
        if( $(this).val() == 'green' ) {
            $("#contenedor").css('background-color', 'green');
        }else if ($(this).val() == 'blue' ){
            $("#contenedor").css('background-color', 'blue');
            }else{
            $("#contenedor").css('background-color','red');
        }
    });
})