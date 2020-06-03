<?php
session_start();

if(!isset($_SESSION['Id'])){
  location:("location: index.html");
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  <link rel="stylesheet" href="css/style.css">

  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">

  <!--<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>-->

  <title>AlquimiaMusic</title>
</head>

<body>
  <nav class="navbar navbar-expand-lg">

      <a class="navbar-brand"><img src="fotos/alquimia4.png" id="logo" class="logo-brand" alt="logo"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" id="bInicio">Inicio<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.eltipicobot.ml/tfg/php/salir.php">Cerrar Sesión</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="subir">Subir contenido</a>
          </li>
          <li class="nav-item">
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>
        </ul>
      </div>

  </nav>

    <div class="container" id="container">
      <h1>Estos son nuestros artistas:</h1>
      <div class="row">
          <div name="divs" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"></div>
          <div name="divs" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"></div>
          <div name="divs" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"></div>
          <div name="divs" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"></div>
      </div>
      <div class="row">
          <div name="divs" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"></div>
          <div name="divs" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"></div>
          <div name="divs" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"></div>
          <div name="divs" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"></div>
      </div>

    </div>

  <!--  <div class="container" id="container4">

        <form action="formulario.php" method="post">

            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label>Nombre del tema</label>
              <input type="text" name="nombre"><br>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label>Tema</label>
              <input type="file" name="tema"><br>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label>Foto</label>
              <input type="file" name="foto"><br>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Subir</button>
            </div>
        </form>
          </div>



    </div>-->

<footer>

  Derechos reservados | Miguel Gomez &copy;

</footer>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"></script>

    <script src="js/ajax.js"></script>
    <script src="js/validacion.js"></script>
    <script src="js/dom.js"></script>
</body>