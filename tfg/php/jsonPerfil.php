<?php
require 'conexion.php';

$c = "SELECT * FROM temas";

if(!$result = mysqli_query($mysqli, $c)) die();

$temas = array();
//creamos un array con los datos de la tabla temas*/
while($row = mysqli_fetch_array($result))
{
    $Id=$row['Id'];
    $nombre=$row['nombre'];
    $tema=$row['tema'];
    $foto=$row['foto'];

    $temas[] = array('Id'=> $Id, 'nombre'=> $nombre, 'tema'=> $tema, 'foto'=> $foto);

}

//Creamos el JSON con los datos del array
$json_string = json_encode($temas);
echo $json_string;


?>
