<?php
require 'conexion.php';

$c = "SELECT * FROM temas";

if(!$result = mysqli_query($mysqli, $c)) die();

$temas = array(); //creamos un array

while($row = mysqli_fetch_array($result))
{
    $Id=$row['Id'];
    $nombre=$row['nombre'];
    $tema=$row['tema'];
    $foto=$row['foto'];

    $temas[] = array('Id'=> $Id, 'nombre'=> $nombre, 'tema'=> $tema, 'foto'=> $foto);

}

//desconectamos la base de datos
/*$close = mysqli_close($conexion)
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
*/

//Creamos el JSON
$json_string = json_encode($temas);
echo $json_string;


?>