<?php
require 'conexion.php';
require 'validacion.php';

$usuario = $_POST['usuario'];
$contraseña = $_POST['passwd'];
$contraseña2 = $_POST['passwd2'];
$imagen = $_FILES['image']['name'];

$iD = $mysqli->query("SELECT MAX(iD) FROM usuarios");
$iD = mysqli_fetch_assoc($iD);
$iD = $iD["MAX(iD)"]+1;

$c = "SELECT COUNT(*) as comprobar from usuarios where Usuario = '$usuario'";
$consulta = $mysqli->query($c);
$array = mysqli_fetch_array($consulta);

if($array['comprobar']<1){
  $directorio = $_SERVER["DOCUMENT_ROOT"].'/tfg/fotos/';
  move_uploaded_file($_FILES['image']['tmp_name'],$directorio.$imagen);

  $sql = "INSERT INTO usuarios VALUES ('$iD', '$usuario', '$contraseña', '$imagen')";
  if (mysqli_query($mysqli, $sql)) {
        header("location: ../index.html");
        echo"<p>Ya has sido registrado</p>";
  } else {
        header("location: ../index.html");
  }
}else{
  header("location: ../index.html");
}


mysqli_close($mysqli);

?>
