function enviar() {
    //Recoger datos del formulario:
    reemail=document.getElementById("email").value; //Email escrito por el usuario
    recontra1=document.getElementById("password").value; //Contraseña primera
    recontra2=document.getElementById("password2").value; //Contraseña segunda
    //Escribir la url para enviar los datos anteriores:
    ruta="ejercicio.php" //ruta del archivo
    envio1="envioEmail="+reemail; //datos email
    envio2="envioContra1="+recontra1; //datos contraseña 1�
    envio3="envioContra2="+recontra2; //datos contraseña 2�
    url=ruta+"?"+envio1+"&"+envio2+"&"+envio3; //url para enviar


    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(XMLHttpRequestObject) {
        var objeto = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", url);
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
            objeto.innerHTML = XMLHttpRequestObject.responseText;
        }
    }
    XMLHttpRequestObject.send(null);
    }
}

window.onload = function(){
    document.getElementById('enviar').onclick = enviar;
}
        
            