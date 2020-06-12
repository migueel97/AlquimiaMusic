<?php
require 'conexion.php';

session_start();
//recoger valores del formulario
$IdUsuario = $_COOKIE['id'];
$IdCancion = $_POST['id'];

$Id = $mysqli->query("SELECT MAX(Id) FROM likeC");
$Id = mysqli_fetch_assoc($Id);
$Id = $Id["MAX(Id)"]+1;

$c = "SELECT COUNT(*) as comprobar from likeC where Idusuario = '$IdUsuario' and IdCancion = '$IdCancion'";
$consulta = $mysqli->query($c);
$array = mysqli_fetch_array($consulta);

$c2 = "SELECT Id from likeC where Idusuario = '$IdUsuario' and IdCancion = '$IdCancion'";
$consulta2 = $mysqli->query($c2);
$array2 = mysqli_fetch_array($consulta2);

if($array['comprobar']<1){
  $sql = "INSERT INTO `likeC` VALUES ('$Id', '$IdUsuario', '$IdCancion')";
}else{
  $sql = "DELETE FROM `likeC` WHERE `likeC`.`Id` = $array2[Id]";
}
//echo "$arra"
mysqli_query($mysqli, $sql);
?>