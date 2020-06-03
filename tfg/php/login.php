<?php
require 'conexion.php';
session_start();
if(isset($_SESSION['iD'])){
  location:("location: ../logueado.php");
}

$usuario = $_POST['usuario'];
$contraseña = $_POST['passwd'];

$c = "SELECT COUNT(*) as comprobar from usuarios where Usuario = '$usuario' and Contraseña = '$contraseña'";
$consulta = mysqli_query($mysqli, $c);
$array = mysqli_fetch_array($consulta);

$c2 = "SELECT Id as var_ses from usuarios where Usuario = '$usuario'";
$consulta2 = mysqli_query($mysqli, $c2);
$array2 = mysqli_fetch_array($consulta2);
$Id = $array2['var_ses'];

if($array['comprobar']==1){
  $_SESSION['Id'] = $Id;
  header("location: ../logueado.php");
}else{
  header("location: ../index.html");
  echo "No hay ningún usuario con ese nombre de usuario y esa contraseña";
}

?>