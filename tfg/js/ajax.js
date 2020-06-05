cargar();

/*Rellena el container principal con la información de la tabla usuarios
a través del jsonPerfil.php*/
function cargar(){
  const xhttp =   new XMLHttpRequest();
  //selecciona todos los divs hijo del container y los guarda en divs
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
//Accedemos al json a través de una consulta ajax
  xhttp.open("GET", "php/jsonPerfiles.php", true);
  xhttp.send();

  xhttp.onreadystatechange = function(){
    if((this.readyState) == 4 && (this.status == 200)){
      var datos = JSON.parse(this.responseText);
        var i = 0;
        //recorremos el json para rellenar los divs con los elementos del json
      for(let j of datos){
        let newSpan = document.createElement("span");
        newSpan.innerHTML = j.Id;
        newSpan.setAttribute("style", "display:none;");
        divs[i].appendChild(newSpan);

        let newSpan2 = document.createElement("span");
        newSpan2.innerHTML = j.Usuario;
        divs[i].appendChild(newSpan2);

        let newImg = document.createElement("img");
        newImg.setAttribute("src", j.imagen);
        newImg.setAttribute("class", "imagenes");
        divs[i].appendChild(newImg);

        i++;
      }
    }
  };
}

function cargarPerfil(e){
//detectamos el elemento que lanza el div para saber que perfil cargar
  if(e.srcElement){
    if(e.srcElement.tagName == "DIV"){
      console.log(e.srcElement.firstChild.innerHTML)
      var id = e.srcElement.firstChild.innerHTML;
    }else{
      console.log(e.srcElement.parentNode.firstChild.innerHTML)
      var id = e.srcElement.parentNode.firstChild.innerHTML;
    }
  }else if (e.target) {
    if(e.target.tagName == "DIV"){
      var id = e.target.firstChild.innerHTML;
      console.log(e.target.firstChild.innerHTML)
    }else{
      console.log(e.target.parentNode.firstChild.innerHTML)
      var id = e.target.parentNode.firstChild.innerHTML;
    }
  }

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
//recorremos el json para rellenar de nuevo los divs
      for(let j of datos){
//comprobamos que la canción pertenece al artista que queremos
        if(j.Id == id){

          let newSpan = document.createElement("span");
          newSpan.innerHTML = j.nombre;
          divs[i].appendChild(newSpan);

          let newImg = document.createElement("img");
          newImg.setAttribute("src", "fotos/"+j.foto);
          newImg.setAttribute("class", "imagenes");
          divs[i].appendChild(newImg);

          let newAudio = document.createElement("audio");
          newAudio.setAttribute("src", "musica/"+j.tema);
          newAudio.controls = true;
          divs[i].appendChild(newAudio);
          i++;
        }

      }

    }
  };
}