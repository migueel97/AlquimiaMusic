cargar();
document.getElementById("bBusqueda").addEventListener("click", buscar);
var tof;
/*Rellena el container principal con la información de la tabla usuarios
a través del jsonPerfil.php*/
function cargar(){
  const xhttp =   new XMLHttpRequest();
  //selecciona todos los divs hijo del container y los guarda en divs
  var divs = document.getElementsByName("divs");

//Accedemos al json a través de una consulta ajax
  xhttp.open("GET", "php/jsonPerfiles.php", true);
  xhttp.send();

  xhttp.onreadystatechange = function(){
    if((this.readyState) == 4 && (this.status == 200)){
      var datos = JSON.parse(this.responseText);
        var i = 0;
        //recorremos el json para rellenar los divs con los elementos del json
      for(let j of datos){

        let newDiv = document.createElement("div");
        divs[i].appendChild(newDiv);

        let newSpan = document.createElement("span");
        newSpan.innerHTML = j.Id;
        newSpan.setAttribute("style", "display:none;");
        newDiv.appendChild(newSpan);

        let newSpan2 = document.createElement("span");
        newSpan2.innerHTML = j.Usuario;
        newDiv.appendChild(newSpan2);

        let newBr = document.createElement("br");
        newDiv.appendChild(newBr);

        let newImg = document.createElement("img");
        newImg.setAttribute("src", j.imagen);
        newImg.setAttribute("class", "imagenes");
        newDiv.appendChild(newImg);

        numeroLike(j.Id, i, "php/jsonLikeP.php");

        let newLike = document.createElement("i");
        newLike.setAttribute("class", "far fa-heart");

        divs[i].appendChild(newLike);
        if(window.location == "https://www.eltipicobot.ml/tfg/logueado.php"){
          comprobarLike(j.Id, "php/jsonLikeP.php");
          document.getElementsByTagName("i")[i].addEventListener("click", function(){
              like(j.Id, 'php/likeP.php');
              inicio();
          });

        }


        newDiv.addEventListener("click", cargarPerfil/*(j.Id)*/);
        //una vez el evento es lanzado se elimina para evitar problemas
        newDiv.addEventListener("click", function(){
          newDiv.removeEventListener("click", cargarPerfil);
        });

        i++;
      }
      let p = document.getElementById("p");
      p.innerHTML = "Filtrar por género";

      let newSelect = document.createElement("select");
      newSelect.setAttribute("class", "select");
      newSelect.setAttribute("id", "select");

      let newOption1 = document.createElement("option");
      newOption1.innerHTML = "Todos";
      newOption1.value = "todos";

      let newOption2 = document.createElement("option");
      newOption2.innerHTML = "R&B";
      newOption2.value = "R&B";

      let newOption3 = document.createElement("option");
      newOption3.innerHTML = "Rap";
      newOption3.value = "Rap";

      let newOption4 = document.createElement("option");
      newOption4.innerHTML = "Rock";
      newOption4.innerHTML = "Rock";

      let newOption5 = document.createElement("option");
      newOption5.innerHTML = "Indie";
      newOption5.innerHTML = "Indie";

      p.appendChild(newSelect);
      newSelect.appendChild(newOption1);
      newSelect.appendChild(newOption2);
      newSelect.appendChild(newOption3);
      newSelect.appendChild(newOption4);
      newSelect.appendChild(newOption5);

      document.getElementById("select").addEventListener("change", categorias);
    }
  };
}

function cargarPerfil(/*id*/e){
//detectamos el elemento que lanza el div para saber que perfil cargar
  if(e.srcElement){
    if(e.srcElement.tagName == "DIV"){
      var id = e.srcElement.firstChild.innerHTML;
      //console.log(e.srcElement.firstChild.innerHTML)
    }else{
      var id = e.srcElement.parentNode.firstChild.innerHTML;
    //  console.log(e.srcElement.parentNode.firstChild.innerHTML)
    }
  }else if (e.target) {
    if(e.target.tagName == "DIV"){
      //console.log(e.target.firstChild.innerHTML)
      var id = e.target.firstChild.innerHTML;
    }else{
      //console.log(e.target.parentNode.firstChild.innerHTML)
      var id = e.target.parentNode.firstChild.innerHTML;
    }
  }
//  console.log(id);
    var divs = document.getElementsByName("divs");
//accemos a la info del json a través de una consulta ajax
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "php/jsonPerfil.php", true);
  xhttp.send();

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let datos = JSON.parse(this.responseText);

      var i=0;
//borramos el contenido anterior de los divs
      for(let k=0; k<8; k++){
        for(let l=0; l<1; l++){
          if(divs[k].firstChild){
            divs[k].firstChild.remove();
            l=-1;
          }
        }
      }
      document.getElementById("p").remove();
//recorremos el json para rellenar de nuevo los divs
      for(let j of datos){
//comprobamos que la canción pertenece al artista que queremos
        if(j.IdUsuario == id){

          let newDiv = document.createElement("div");
          divs[i].appendChild(newDiv);

          let newSpan = document.createElement("span");
          newSpan.innerHTML = j.nombre;
          newDiv.appendChild(newSpan);

          let newImg = document.createElement("img");
          newImg.setAttribute("src", "fotos/"+j.foto);
          newImg.setAttribute("class", "imagenes");
          newDiv.appendChild(newImg);

          let newAudio = document.createElement("audio");
          newAudio.setAttribute("src", "musica/"+j.tema);
          newAudio.controls = true;
          newAudio.setAttribute("style", "max-width: 180px;");
          newDiv.appendChild(newAudio);

          numeroLikeC(j.Id, i, "php/jsonLikeC.php");

          let newLike = document.createElement("i");
          newLike.setAttribute("class", "far fa-heart");

          divs[i].appendChild(newLike);


          if(window.location == "https://www.eltipicobot.ml/tfg/logueado.php"){
            comprobarLikeC(j.Id, "php/jsonLikeC.php", i);
   
            document.getElementsByTagName("i")[i].addEventListener("click", function(){
                like(j.Id, 'php/likeC.php');
                limpiarLikes(id);
            });
          }


          i++;
        }

      }

    }
  };
}

function buscar(){
  event.preventDefault();

//detectamos el elemento que lanza el div para saber que perfil cargar
    var filtro = document.getElementById("busqueda").value;
    var divs = document.getElementsByName("divs");
    console.log(filtro)
//accemos a la info del json a través de una consulta ajax
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "php/jsonPerfil.php", true);
  xhttp.send();

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let datos = JSON.parse(this.responseText);

      var i=0;
//borramos el contenido anterior de los divs
      for(let k=0; k<8; k++){
        for(let l=0; l<1; l++){
          if(divs[k].firstChild){
            divs[k].firstChild.remove();
            l=-1;
          }
        }
      }
//recorremos el json para rellenar de nuevo los divs
      for(let j of datos){

        console.log(j.nombre)
        console.log(filtro)
//comprobamos que la canción pertenece al artista que queremos
        if(j.tema == filtro || j.nombre == filtro /*|| j.Id == id*/){

          let newSpan = document.createElement("span");
          newSpan.innerHTML = j.nombre;
          divs[i].appendChild(newSpan);

          let newImg = document.createElement("img");
          newImg.setAttribute("src", "fotos/"+j.foto);
          newImg.setAttribute("class", "imagenes");
          divs[i].appendChild(newImg);

          let newAudio = document.createElement("audio");
          newAudio.setAttribute("src", "musica/"+j.tema);
          newAudio.setAttribute("style", "max-width: 180px;");
          newAudio.controls = true;
          divs[i].appendChild(newAudio);
          i++;
        }

      }

    }
  };
}

function categorias(){
  //event.preventDefault();
//detectamos el elemento que lanza el div para saber que perfil cargar
    var filtro = document.getElementById("select").value;
    if(filtro == "todos"){
      inicio();
      return "";
    }
    var divs = document.getElementsByName("divs");
    /*añade el evento que permite a los divs cargarse con la información
    de un artista en concreto*/
    for(let i=0; i<8; i++){
      divs[i].addEventListener("click", cargarPerfil);
      //una vez el evento es lanzado se elimina para evitar problemas
      divs[i].addEventListener("click", function(){
        divs[i].removeEventListener("click", cargarPerfil);
      });
    }
//accemos a la info del json a través de una consulta ajax
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "php/jsonPerfiles.php", true);
  xhttp.send();

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let datos = JSON.parse(this.responseText);

      var i=0;
//borramos el contenido anterior de los divs
      for(let k=0; k<8; k++){
        for(let l=0; l<1; l++){
          if(divs[k].firstChild){
            divs[k].firstChild.remove();
            l=-1;
          }
        }
      }
//recorremos el json para rellenar de nuevo los divs
      for(let j of datos){
//comprobamos que la canción pertenece al artista que queremos
        if(j.Genero == filtro){

          let newSpan = document.createElement("span");
          newSpan.innerHTML = j.Id;
          newSpan.setAttribute("style", "display:none;");
          divs[i].appendChild(newSpan);

          let newSpan2 = document.createElement("span");
          newSpan2.innerHTML = j.Usuario;
          divs[i].appendChild(newSpan2);

          let newBr = document.createElement("br");
          divs[i].appendChild(newBr);

          let newImg = document.createElement("img");
          newImg.setAttribute("src", j.imagen);
          newImg.setAttribute("class", "imagenes");
          divs[i].appendChild(newImg);

          i++;
        }

      }

    }
  };
}



function comprobarLike(idLiked, json){
 
  var idusuario = obtenerCookie('id');

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", json, true);
  xhttp.send();

  xhttp.onreadystatechange = function(tof){

    if(this.readyState == 4 && this.status == 200){
      var datos = JSON.parse(this.responseText);

        //recorremos el json para rellenar los divs con los elementos del json


      for(let j of datos){
        if(j.Idusuario == idusuario && j.IdLiked == idLiked){
          document.getElementsByTagName("i")[j.IdLiked-1].setAttribute("class", "fas fa-heart");
        }

      }

    }

  };
}

function comprobarLikeC(idLiked, json, i){
  var idusuario = obtenerCookie('id');

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", json, true);
  xhttp.send();

  xhttp.onreadystatechange = function(tof){

    if(this.readyState == 4 && this.status == 200){
      var datos = JSON.parse(this.responseText);

        //recorremos el json para rellenar los divs con los elementos del json


      for(let j of datos){
        if(j.Idusuario == idusuario && j.IdCancion == idLiked){
          console.log(i)
          document.getElementsByTagName("i")[i].setAttribute("class", "fas fa-heart");
        }

      }

    }

  };
}

function numeroLike(idLiked, iddiv, json){
  
  var divs = document.getElementsByName("divs");
  var cont = 0;
  var liked;

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", json, true);
  xhttp.send();

  xhttp.onreadystatechange = function(tof){

    if(this.readyState == 4 && this.status == 200){
      var datos = JSON.parse(this.responseText);

        //recorremos el json para rellenar los divs con los elementos del json


      for(let j of datos){
        if(j.IdLiked == idLiked){
          cont++;
          liked = idLiked;
        }
      }
      let previous = document.getElementsByTagName("i")[liked-1];


      let newSpan = document.createElement("span");
      newSpan.innerHTML = cont+" Me gusta"

      if(liked != undefined){
        divs[iddiv].insertBefore(newSpan, previous);
      }
    }

  };
}

function numeroLikeC(idLiked, iddiv, json){
  var divs = document.getElementsByName("divs");
  var cont = 0;
  var liked;

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", json, true);
  xhttp.send();

  xhttp.onreadystatechange = function(tof){

    if(this.readyState == 4 && this.status == 200){
      var datos = JSON.parse(this.responseText);

        //recorremos el json para rellenar los divs con los elementos del json


      for(let j of datos){
        if(j.IdCancion == idLiked){
          cont++;
          liked = idLiked;
        }
      }
      let previous = document.getElementsByTagName("i")[liked-1];

      let newSpan = document.createElement("span");
      newSpan.innerHTML = cont+" Me gusta"

      if(liked != undefined){
        divs[iddiv].insertBefore(newSpan, previous);
      }
    }

  };
}



function obtenerCookie(clave) {
    var name = clave + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function crearCookie(clave, valor, diasexpiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (diasexpiracion*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = clave + "=" + valor + ";" + expires +";path=/";
}

function like(id, json){
  const data = new FormData();
data.append('id', id);

fetch(json, {
   method: 'POST',
   body: data
})
.then(function(response) {
   if(response.ok) {
       return response.text()
   } else {
       throw "Error en la llamada Ajax";
   }

})
.then(function(texto) {
   //console.log("exito");
})
.catch(function(err) {
   console.log("err");
});
}

function limpiarLikes(id){
  var divs = document.getElementsByName("divs");
  var i = document.getElementsByTagName("i");
  console.log("hola")
    for(let k=0; k<=i.length; k++){
      for(let l=0; l<1; l++){
        if(divs[k].lastChild.tagName != "DIV"){
          if(divs[k].lastChild){
            divs[k].lastChild.remove();
            l=-1;
          }
        }

      }
    }
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "php/jsonPerfil.php", true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);

        var i=0;

        for(let j of datos){
  //comprobamos que la canción pertenece al artista que queremos
          if(j.IdUsuario == id){

            numeroLikeC(j.Id, i, "php/jsonLikeC.php");

            let newLike = document.createElement("i");
            newLike.setAttribute("class", "far fa-heart");

            divs[i].appendChild(newLike);

              comprobarLikeC(j.Id, "php/jsonLikeC.php", i);
              document.getElementsByTagName("i")[i].addEventListener("click", function(){
                  like(j.Id, 'php/likeC.php');
                  limpiarLikes(id);
              });



            i++;
          }

        }
      }
    };
}