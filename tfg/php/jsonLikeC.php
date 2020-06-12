<?php
require 'conexion.php';

$c = "SELECT * FROM likeC";

if(!$result = mysqli_query($mysqli, $c)) die();

$likes = array();
//creamos un array con los datos de la tabla temas*/
while($row = mysqli_fetch_array($result))
{
    $Id=$row['Id'];
    $Idusuario=$row['Idusuario'];
    $IdCancion=$row['IdCancion'];

    $likes[] = array('Id'=> $Id, 'Idusuario'=> $Idusuario, 'IdCancion'=> $IdCancion);

}

//Creamos el JSON con los datos del array
$json_string = json_encode($likes);
echo $json_string;

?>
