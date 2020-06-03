cargar();

function cargar(){
  const xhttp =   new XMLHttpRequest();
  var divs = document.getElementsByName("divs");
  for(i=0; i<8; i++){
    divs[i].addEventListener("click", cargarPerfil);
  }

  xhttp.open("GET", "php/jsonPerfiles.php", true);
  xhttp.send();

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let datos = JSON.parse(this.responseText);
        let i = 0;
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
        newImg.setAttribute("class", "imagenes")
        divs[i].appendChild(newImg);

        i++;
      }
    }
  };
}

function cargarPerfil(e){

  if (e.srcElement)
	  var id = e.srcElement.parentNode.firstChild.innerHTML;
  else if (e.target)
  	  var id = e.target.parentNode.firstChild.innerHTML;

  const xhttp = new XMLHttpRequest();
  var divs = document.getElementsByName("divs");

  xhttp.open("GET", "php/jsonPerfil.php", true);
  xhttp.send();

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let datos = JSON.parse(this.responseText);

      var i=0;

      for(let j of datos){

        for(k=0; k<8; k++){
          for(l=0; l<1; l++){
            if(divs[k].firstChild){
              divs[k].firstChild.remove();
              l=-1;
            }
          }
        }

        if(j.Id == id){

          let newSpan = document.createElement("span");
          newSpan.innerHTML = j.nombre;
          divs[i].appendChild(newSpan);

          let newImg = document.createElement("img");
          newImg.setAttribute("src", "fotos/"+j.foto);
          newImg.setAttribute("class", "imagenes")
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