<?php
require 'conexion.php';

$c = "SELECT * FROM usuarios";

if(!$result = mysqli_query($mysqli, $c)) die();

$usuarios = array();
//creamos un array con los datos de la tabla temas*/
while($row = mysqli_fetch_array($result))
{
    $Usuario=$row['Usuario'];
    $imagen="/tfg/fotos/" . $row['imagen'];
    $Id=$row['Id'];
    $Genero=$row['Genero'];

    $usuarios[] = array('Usuario'=> $Usuario, 'imagen'=> $imagen, 'Id'=> $Id, 'Genero'=> $Genero);

}

//Creamos el JSON con los datos del array
$json_string = json_encode($usuarios);
echo $json_string;


?>