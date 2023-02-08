$(document).ready(function(){
    $('button').click(function(){
        $( "#contenedor" ).load( "prueba.html", function() {
            alert( "Load was performed." );
          });
    
})})