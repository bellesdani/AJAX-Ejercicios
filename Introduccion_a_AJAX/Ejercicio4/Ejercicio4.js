onload = function() {

    objeto = false;
    if (window.XMLHttpRequest) {
    objeto = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
    objeto = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
     
      document.getElementById("boton").onclick=sacardatos;
      
  }


  function sacardatos(){

    if(objeto) {
        var lugar = document.getElementById("contenedor");

        objeto.open("GET", "datos.xml");
        objeto.onreadystatechange = function(){

        if (objeto.readyState == 4 &&                   
            objeto.status == 200) {
                var xmlDoc = objeto.responseXML;
                var x = xmlDoc.getElementsByTagName("Libro");
                var texto = "";
            
                for(i = 0 ; i<x.length ; i++){
                texto+= x[i].getElementsByTagName("Autor")[0].childNodes[0].nodeValue + "<br>";
                }
                lugar.innerHTML=texto;

            }
        }

        objeto.send(null);
    } 
            
 }
  
      