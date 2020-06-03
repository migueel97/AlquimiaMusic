<?php
require 'conexion.php';

$c = "SELECT * FROM usuarios";

if(!$result = mysqli_query($mysqli, $c)) die();

$usuarios = array(); //creamos un array

while($row = mysqli_fetch_array($result))
{
    $Usuario=$row['Usuario'];
    $imagen="/tfg/fotos/" . $row['imagen'];
    $Id=$row['Id'];

    $usuarios[] = array('Usuario'=> $Usuario, 'imagen'=> $imagen, 'Id'=> $Id);

}

//desconectamos la base de datos
/*$close = mysqli_close($conexion)
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
*/

//Creamos el JSON
$json_string = json_encode($usuarios);
echo $json_string;


?>