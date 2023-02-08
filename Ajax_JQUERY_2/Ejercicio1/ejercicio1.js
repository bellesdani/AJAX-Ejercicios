$(document).ready(function(){
    $('button').click(function(){
        $.ajax({
            url: "texto.txt"
            }).done(function(msg) {
                $('#contenedor').html(msg);
              });
    })
    
})