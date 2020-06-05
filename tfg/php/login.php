<?php
require 'conexion.php';
require 'validacion.php';

session_start();
if(isset($_SESSION['iD'])){
  location:("location: ../logueado.php");
}
//guardamos la info del formulario
$usuario = $_POST['usuario'];
$contraseña = $_POST['passwd'];
//validamos el usuario y la contraseña
if(!validar_nombre($usuario) || !validar_contraseña($contraseña)){

  header("location: ../index.html");
}
//comprobamos que existe un usuario con dicho usuario y contraseña
$c = "SELECT COUNT(*) as comprobar from usuarios where Usuario = '$usuario' and Contraseña = '$contraseña'";
$consulta = mysqli_query($mysqli, $c);
$array = mysqli_fetch_array($consulta);
//abrimos la sesion con el id correspondiente
$c2 = "SELECT Id as var_ses from usuarios where Usuario = '$usuario'";
$consulta2 = mysqli_query($mysqli, $c2);
$array2 = mysqli_fetch_array($consulta2);
$Id = $array2['var_ses'];

//si las credenciales son correctas nos loguea, si no nos envia a la pagina principal
if($array['comprobar']==1){
  $_SESSION['Id'] = $Id;
  header("location: ../logueado.php");
}else{
  header("location: ../index.html");
}

?>