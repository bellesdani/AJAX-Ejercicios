onload = function() {

    objeto = false;
    if (window.XMLHttpRequest) {
    objeto = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
    objeto = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
     
      document.getElementById("click").onclick=sacardatos;
      
  }
  
  
  function sacardatos(){
  
  
  
      if(objeto) {
          var lugar = document.getElementById("contenedor");
  
          objeto.open("GET", "datos.json");
          objeto.onreadystatechange = function(){
  
          if (objeto.readyState == 4 &&                   
            objeto.status == 200) {
  
              lugar.innerHTML = objeto.responseText;
  
                 }
               }
  
               objeto.send(null);
              } 
              
             }
    
        
            
  
  