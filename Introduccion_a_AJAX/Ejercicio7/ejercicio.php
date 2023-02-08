<?php  
$compEmail=0; //valor inicial para combrobación email.
$compContra=0;  //valor inicial para comprobacion contraseña
$email=$_GET["envioEmail"];//recoger datos de email
$contra1=$_GET["envioContra1"]; //recoger datos de contraseña 1�
$contra2=$_GET["envioContra2"]; //recoger datos de contraseña 2�
if (strlen($email)>0) { //si hay algo escrito en email ....
    $num1=substr_count($email,"@"); //número de signos @ escritos en el email;
    if ($num1==1) { //correcto si ha una @ en el email
        $textoEmail="<p>Escritura de e-mail correcta</p>";
        $compEmail=1; //comprobación correcta de Email
        }
    else { //incorrecto si hay más o menos de 1 @ en email.
        $textoEmail="<p>El e-mail no se ha escrito correctamente.</p>";
        }
    }
else { //si no hay nada escrito en email ...
   $textoEmail="<p>No has escrito ningun e-mail.</p>"; 
   }
if (strlen($contra1)<6 or strlen($contra2)<6) { //contraseñá menos de 6 caracteres: 
   $textoContra="<p>La contraseña o su repetición tienen menos de 6 caracteres.</p>";
   }
elseif (strlen($contra1)>10 or strlen($contra2)>10) { //contraseña más de 10 caracteres:
   $textoContra="<p>La contraseña o su repetición tienen más de 10 caracteres.</p>";
   }
elseif ($contra1 != $contra2) { //contraseña y repetición distintas
   $textoContra="<p>La contraseña y su repetición no son iguales</p>";
   }
else { //la contraseña y su repetición son correctas.
   $textoContra="<p>La contraseña es correcta.</p>";
   $compContra=1; //Contraseña correcta
   }
if ($compEmail==1 and $compContra==1) { //si todo está correcto enviar mensaje ...
   echo $textoEmail.$textoContra;
   echo "<p>Los datos son correctos y han sido enviados.</p>";
   }
else{ //Si hay algún fallo enviar mensaje ...
   echo $textoEmail.$textoContra;
   echo "<p>Datos incorrectos. Revisa el formulario y envíalo otra vez.</p>";
   }
?>