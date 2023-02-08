

   function funcion() {
        var objeto = false;
        objeto = new XMLHttpRequest();
        if (objeto){
            var contenido = document.getElementById("contenedor");
            objeto.open("GET", "datos.txt")
            objeto.onreadystatechange = function() {
                if (objeto.readyState == 4 && objeto.status == 200) {
                    contenido.innerHTML = objeto.responseText;
                }
            }
            objeto.send(null);
            
        }
    }
    $(document).ready(function() {
            $("body").append("<div id='contenedor'></div>");
            $("#contenedor").animate({'color': 'red'}, function () {
                window.onload = funcion();
                });
                $("p").animate({'color': 'blue' , 'font-size': '30px'});
            });