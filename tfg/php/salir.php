<?php
session_start();
//cerramos la sesión y redireccionamos a la pagina principal
session_destroy();

header("location: ../index.html");
exit();

?>
