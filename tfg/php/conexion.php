<?php
/*Conexión con la base de datos*/
$host = "localhost";
$usuario = "migueel97_tipico";
$clave = "Contraseña1";
$bd = "migueel97_eltipicobot";

$mysqli = mysqli_connect($host, $usuario, $clave, $bd);
$mysqli -> set_charset("utf8");
?>
