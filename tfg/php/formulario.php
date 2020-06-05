<?php
require 'conexion.php';
require 'validacion.php';

session_start();
//recoger valores del formulario
$usuario = $_POST['usuario'];
$tema = $_FILES['tema']['name'];
$foto = $_FILES['image']['name'];
$Id = $_SESSION['Id'];
//validar formulario
if(!validar_foto($imagen) || !validar_audio($tema) || !validar_nombre($usuario)){
  header("location: ../logueado.php");
}
/*Guardar canciones y fotos en sus respectivas carpetas*/
$directorio = $_SERVER["DOCUMENT_ROOT"].'/tfg/fotos/';
move_uploaded_file($_FILES['image']['tmp_name'],$directorio.$foto);

$directorio = $_SERVER["DOCUMENT_ROOT"].'/tfg/musica/';
move_uploaded_file($_FILES['tema']['tmp_name'],$directorio.$tema);

$sql = "INSERT INTO temas VALUES ('$Id', '$usuario', '$tema', '$foto')";
if (mysqli_query($mysqli, $sql)) {
      header("location: ../logueado.php");
      echo"<p>Tema subido</p>";
} else {
      header("location: ../logueado.html");
}
mysqli_close($mysqli);

?>