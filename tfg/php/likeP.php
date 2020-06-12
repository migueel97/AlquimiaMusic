<?php
require 'conexion.php';

session_start();
//recoger valores del formulario
$IdUsuario = $_COOKIE['id'];
$IdLiked = $_POST['id'];

$Id = $mysqli->query("SELECT MAX(Id) FROM likeP");
$Id = mysqli_fetch_assoc($Id);
$Id = $Id["MAX(Id)"]+1;

$c = "SELECT COUNT(*) as comprobar from likeP where Idusuario = '$IdUsuario' and IdLiked = '$IdLiked'";
$consulta = $mysqli->query($c);
$array = mysqli_fetch_array($consulta);

$c2 = "SELECT Id from likeP where Idusuario = '$IdUsuario' and IdLiked = '$IdLiked'";
$consulta2 = $mysqli->query($c2);
$array2 = mysqli_fetch_array($consulta2);

if($array['comprobar']<1){
  $sql = "INSERT INTO `likeP` VALUES ('$Id', '$IdUsuario', '$IdLiked')";
}else{
  $sql = "DELETE FROM `likeP` WHERE `likeP`.`Id` = $array2[Id]";
}
//echo "$arra"
mysqli_query($mysqli, $sql);
?>