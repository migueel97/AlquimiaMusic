<?php
require 'conexion.php';

$c = "SELECT * FROM temas";

if(!$result = mysqli_query($mysqli, $c)) die();

$temas = array();
//creamos un array con los datos de la tabla temas*/
while($row = mysqli_fetch_array($result))
{
    $IdUsuario=$row['IdUsuario'];
    $nombre=$row['nombre'];
    $tema=$row['tema'];
    $foto=$row['foto'];
    $Id=$row['Id'];

    $temas[] = array('IdUsuario'=> $IdUsuario, 'nombre'=> $nombre, 'tema'=> $tema, 'foto'=> $foto, 'Id'=> $Id);

}

//Creamos el JSON con los datos del array
$json_string = json_encode($temas);
echo $json_string;


?>
