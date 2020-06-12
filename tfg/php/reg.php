<?php
require 'conexion.php';
require 'validacion.php';
//guardamos la info del formulario
$usuario = $_POST['usuario'];
$contraseña = $_POST['passwd'];
$contraseña2 = $_POST['passwd2'];
$Genero = $_POST['Genero'];
$imagen = $_FILES['image']['name'];
var_dump($Genero);
//validamos los campos
if(!validar_foto($imagen) || !validar_nombre($usuario) || !validar_contraseña($contraseña) || !comprobar_contraseñas($contraseña, $contraseña2)){
  header("location: ../index.html");
}
//seleccionamos Id para que sea autoincremental
$Id = $mysqli->query("SELECT MAX(Id) FROM usuarios");
$Id = mysqli_fetch_assoc($Id);
$Id = $Id["MAX(Id)"]+1;
//consulta para comprobar si ya existe el nombre de usuario
$c = "SELECT COUNT(*) as comprobar from usuarios where Usuario = '$usuario'";
$consulta = $mysqli->query($c);
$array = mysqli_fetch_array($consulta);
//Insertamos en la base de datos el nuevo usuario, si el usuario ya existe redireccionamos a la pagina principañ
if($array['comprobar']<1){
  $directorio = $_SERVER["DOCUMENT_ROOT"].'/tfg/fotos/';
  move_uploaded_file($_FILES['image']['tmp_name'],$directorio.$imagen);

  $sql = "INSERT INTO usuarios VALUES ('$Id', '$usuario', '$contraseña', '$imagen', '$Genero')";
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