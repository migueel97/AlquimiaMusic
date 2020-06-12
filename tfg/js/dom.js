document.getElementById("logo").addEventListener("click", inicio);
document.getElementById("bInicio").addEventListener("click", inicio);
if(document.getElementById("log1")){
  document.getElementById("log1").addEventListener("click", login);
}

if(document.getElementById("bReg")){
  document.getElementById("bReg").addEventListener("click", registro);
}

if(document.getElementById("subir")){
  document.getElementById("subir").addEventListener("click", subir);
}

function inicio(){
  event.preventDefault();

  let cont1 = document.getElementById("container");
  let cont2 = document.getElementById("container2");
  let cont3 = document.getElementById("container3");
  let cont4 = document.getElementById("container4");

  if(cont4){
      cont4.remove();
  }

  if(cont3){
      cont3.remove();
  }
  if(cont2){
      cont2.remove();
  }

  if(cont1){
    cont1.remove();
  }

    let newCont = document.createElement("div");
    newCont.setAttribute("class", "container");
    newCont.setAttribute("id", "container");

    let newH1 = document.createElement("h1");
    newH1.innerHTML = "Estos son nuestro artistas:";

    let newP = document.createElement("p");
    newP.setAttribute("id", "p")

    let newRow1 = document.createElement("div");
    newRow1.setAttribute("class", "row");

    let newDiv1 = document.createElement("div");
    newDiv1.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");
    newDiv1.setAttribute("name", "divs");

    let newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");
    newDiv2.setAttribute("name", "divs");

    let newDiv3 = document.createElement("div");
    newDiv3.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");
    newDiv3.setAttribute("name", "divs");

    let newDiv4 = document.createElement("div");
    newDiv4.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");
    newDiv4.setAttribute("name", "divs");

    let newRow2 = document.createElement("div");
    newRow2.setAttribute("class", "row");

    let newDiv5 = document.createElement("div");
    newDiv5.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");
    newDiv5.setAttribute("name", "divs");

    let newDiv6 = document.createElement("div");
    newDiv6.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");
    newDiv6.setAttribute("name", "divs");

    let newDiv7 = document.createElement("div");
    newDiv7.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");
    newDiv7.setAttribute("name", "divs");

    let newDiv8 = document.createElement("div");
    newDiv8.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");
    newDiv8.setAttribute("name", "divs");

    document.getElementsByTagName("section")[0].appendChild(newCont);
    newCont.appendChild(newH1);
    newCont.appendChild(newP);
    newCont.appendChild(newRow1);
    newCont.appendChild(newRow2);
    newRow1.appendChild(newDiv1);
    newRow1.appendChild(newDiv2);
    newRow1.appendChild(newDiv3);
    newRow1.appendChild(newDiv4);
    newRow2.appendChild(newDiv5);
    newRow2.appendChild(newDiv6);
    newRow2.appendChild(newDiv7);
    newRow2.appendChild(newDiv8);

    cargar();

}

function login(){
    event.preventDefault();

    let cont1 = document.getElementById("container");
    let cont2 = document.getElementById("container2");
    let cont3 = document.getElementById("container3");

    if(cont1){
        cont1.remove();
    }
    if(cont3){
        cont3.remove();
    }

    if(!cont2){

    let newCont = document.createElement("div");
    newCont.setAttribute("class", "container");
    newCont.setAttribute("id", "container2");

    let newRow = document.createElement("div");
    newRow.setAttribute("class", "row");

    let newDiv1 = document.createElement("div");
    newDiv1.setAttribute("class", "col-sm-6 col-md-6 col-lg-6 col-xl-6");

    let newButton1 = document.createElement("button");
    newButton1.setAttribute("class", "btn btn-outline-light my-2 my-sm-0");

    let newSpan1 = document.createElement("span");
    newSpan1.innerHTML = "Inicia Sesión";

    let newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "col-sm-6 col-md-6 col-lg-6 col-xl-6");

    let newButton2 = document.createElement("button");
    newButton2.setAttribute("class", "btn btn-outline-light my-2 my-sm-0");
    newButton2.setAttribute("id", "bReg2");

    let newSpan2 = document.createElement("span");
    newSpan2.innerHTML = "Registrate";

    let newForm = document.createElement("form");
    newForm.setAttribute("action", "php/login.php");
    newForm.setAttribute("method", "POST");

    let newDiv3 = document.createElement("div");
    newDiv3.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

    let newLabel1 = document.createElement("label");
    newLabel1.innerHTML = "Usuario";
    newLabel1.setAttribute("for", "usuario");
    newLabel1.setAttribute("class", "error");

    let newInput1 = document.createElement("input");
    newInput1.setAttribute("type", "text");
    newInput1.setAttribute("name", "usuario");
    newInput1.setAttribute("id", "usuario");
    newInput1.required = true;

    let newError1 = document.createElement("span");
    newError1.setAttribute("id", "error-nombre");

    let newDiv4 = document.createElement("div");
    newDiv4.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

    let newLabel2 = document.createElement("label");
    newLabel2.innerHTML = "Contraseña";
    newLabel2.setAttribute("for", "passwd");
    newLabel2.setAttribute("class", "error");

    let newInput2 = document.createElement("input");
    newInput2.setAttribute("type", "password");
    newInput2.setAttribute("name", "passwd");
    newInput2.required = true;
    newInput2.setAttribute("id", "passwd");

    let newError2 = document.createElement("span");
    newError2.setAttribute("id", "error-passwd");

    let newDiv7 = document.createElement("div");
    newDiv7.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

    let newButton3 = document.createElement("button");
    newButton3.setAttribute("type", "submit");
    newButton3.setAttribute("id", "submitL");
    newButton3.setAttribute("class", "btn btn-outline-light my-2 my-sm-0");
    newButton3.innerHTML = "Entra";

    document.getElementsByTagName("section")[0].appendChild(newCont);
    newCont.appendChild(newRow);
    newRow.appendChild(newDiv1);
    newDiv1.appendChild(newButton1);
    newButton1.appendChild(newSpan1);
    newRow.appendChild(newDiv2);
    newDiv2.appendChild(newButton2);
    newButton2.appendChild(newSpan2);
    newRow.appendChild(newForm);
    newForm.appendChild(newDiv3);
    newForm.appendChild(newDiv4);
    newForm.appendChild(newDiv7);
    newDiv3.appendChild(newLabel1);
    newDiv3.appendChild(newInput1);
    newDiv3.appendChild(newError1);
    newDiv4.appendChild(newLabel2);
    newDiv4.appendChild(newInput2);
    newDiv4.appendChild(newError2);
    newDiv7.appendChild(newButton3);

    document.getElementById("bReg2").addEventListener("click", registro);

    let nombre = document.getElementById("usuario");
    let passwd = document.getElementById("passwd");

    nombre.addEventListener("focusout", function(){
      validar_nombre(nombre);
    });
    passwd.addEventListener("focusout", function(){
      validar_clave(passwd);
    });
    }
  }


function registro(){

  event.preventDefault();

  let cont1 = document.getElementById("container");
  let cont2 = document.getElementById("container2");
  let cont3 = document.getElementById("container3");

  if(cont1){
    cont1.remove();
  }
  if(cont2){
    cont2.remove();
  }
  if(!cont3){

  let newCont = document.createElement("div");
  newCont.setAttribute("class", "container");
  newCont.setAttribute("id", "container3");

  let newRow = document.createElement("div");
  newRow.setAttribute("class", "row");

  let newDiv1 = document.createElement("div");
  newDiv1.setAttribute("class", "col-sm-6 col-md-6 col-lg-6 col-xl-6");

  let newButton1 = document.createElement("button");
  newButton1.setAttribute("class", "btn btn-outline-light my-2 my-sm-0");
  newButton1.setAttribute("id", "log2");

  let newSpan1 = document.createElement("span");
  newSpan1.innerHTML = "Inicia Sesión";

  let newDiv2 = document.createElement("div");
  newDiv2.setAttribute("class", "col-sm-6 col-md-6 col-lg-6 col-xl-6");


  let newButton2 = document.createElement("button");
  newButton2.setAttribute("class", "btn btn-outline-light my-2 my-sm-0");

  let newSpan2 = document.createElement("span");
  newSpan2.innerHTML = "Registrate";

  let newForm = document.createElement("form");
  newForm.setAttribute("action", "php/reg.php");
  newForm.setAttribute("method", "POST");
  newForm.setAttribute("enctype","multipart/form-data");

  let newDiv3 = document.createElement("div");
  newDiv3.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");
  newRow.setAttribute("id", "row");

  let newLabel1 = document.createElement("label");
  newLabel1.innerHTML = "Nombre de usuario";
  newLabel1.setAttribute("for", "usuario");
  newLabel1.setAttribute("class", "error");

  let newInput1 = document.createElement("input");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("name", "usuario");
  newInput1.required = true;
  newInput1.setAttribute("id", "usuario");

  let newError1 = document.createElement("span");
  newError1.setAttribute("id", "error-nombre");

  let newDiv4 = document.createElement("div");
  newDiv4.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");
  newRow.setAttribute("id", "row");

  let newLabel2 = document.createElement("label");
  newLabel2.innerHTML = "Contraseña";
  newLabel2.setAttribute("for", "passwd");
  newLabel2.setAttribute("class", "error");

  let newBr = document.createElement("br");

  let newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "password");
  newInput2.setAttribute("name", "passwd");
  newInput2.required = true;
  newInput2.setAttribute("id", "passwd");

  let newError2 = document.createElement("span");
  newError2.setAttribute("id", "error-passwd");



  let newDiv5 = document.createElement("div");
  newDiv5.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

  let newLabel3 = document.createElement("label");
  newLabel3.innerHTML = "Confirmación de contraseña";
  newLabel3.setAttribute("for", "passwd2");
  newLabel3.setAttribute("class", "error");

  let newInput3 = document.createElement("input");
  newInput3.setAttribute("type", "password");
  newInput3.setAttribute("name", "passwd2");
  newInput3.required = true;
  newInput3.setAttribute("id", "passwd2");

  let newError3 = document.createElement("span");
  newError3.setAttribute("id", "error-passwd2");

  let newDiv6 = document.createElement("div");
  newDiv6.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

  let newLabel4 = document.createElement("label");
  newLabel4.innerHTML = "Foto de perfil";
  newLabel4.setAttribute("for", "image");
  newLabel4.setAttribute("class", "error");

  let newInput4 = document.createElement("input");
  newInput4.setAttribute("type", "file");
  newInput4.setAttribute("name", "image");
  newInput4.required = true;
  newInput4.setAttribute("id", "image");

  let newError4 = document.createElement("span");
  newError4.setAttribute("id", "error-imagen");

  let newDiv7 = document.createElement("div");
  newDiv7.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

  let newP = document.createElement("p");
  newP.innerHTML = "Género";

  let newSelect = document.createElement("select");
  newSelect.setAttribute("class", "select");
  newSelect.setAttribute("name", "Genero");

  let newOption1 = document.createElement("option");
  newOption1.innerHTML = "Todos";

  let newOption2 = document.createElement("option");
  newOption2.innerHTML = "R&B";

  let newOption3 = document.createElement("option");
  newOption3.innerHTML = "Rap";

  let newOption4 = document.createElement("option");
  newOption4.innerHTML = "Rock";

  let newOption5 = document.createElement("option");
  newOption5.innerHTML = "Indie";

  let newDiv8 = document.createElement("div");
  newDiv8.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

  let newButton3 = document.createElement("button");
  newButton3.setAttribute("type", "submit");
  newButton3.setAttribute("id", "submitR");
  newButton3.setAttribute("class", "btn btn-outline-light my-2 my-sm-0");
  newButton3.innerHTML = "Registrate";


  document.getElementsByTagName("section")[0].appendChild(newCont);
  newCont.appendChild(newRow);
  newRow.appendChild(newDiv1);
  newDiv1.appendChild(newButton1);
  newButton1.appendChild(newSpan1);
  newRow.appendChild(newDiv2);
  newDiv2.appendChild(newButton2);
  newButton2.appendChild(newSpan2);
  newRow.appendChild(newForm);
  newForm.appendChild(newDiv3);
  newForm.appendChild(newDiv4);
  newForm.appendChild(newDiv5);
  newForm.appendChild(newDiv6);
  newForm.appendChild(newDiv7);
  newForm.appendChild(newDiv8);
  newDiv3.appendChild(newLabel1);
  newDiv3.appendChild(newInput1);
  newDiv3.appendChild(newError1);
  newDiv4.appendChild(newLabel2);
  newDiv4.appendChild(newBr);
  newDiv4.appendChild(newInput2);
  newDiv4.appendChild(newError2);
  newDiv5.appendChild(newLabel3);
  newDiv5.appendChild(newInput3);
  newDiv5.appendChild(newError3);
  newDiv6.appendChild(newLabel4);
  newDiv6.appendChild(newInput4);
  newDiv6.appendChild(newError4);
  newDiv7.appendChild(newP);
  newP.appendChild(newSelect);
  newSelect.appendChild(newOption2);
  newSelect.appendChild(newOption3);
  newSelect.appendChild(newOption4);
  newSelect.appendChild(newOption5);
  newDiv8.appendChild(newButton3);

  document.getElementById("log2").addEventListener("click", login);
  let nombre = document.getElementById("usuario");
  let passwd = document.getElementById("passwd");
  let passwd2 = document.getElementById("passwd2");
  let image = document.getElementById("image");

  nombre.addEventListener("focusout", function(){
    validar_nombre(nombre);
  });
  passwd.addEventListener("focusout", function(){
    validar_clave(passwd);
  });
  passwd2.addEventListener("focusout", function(){
    validar_contraseñas(passwd, passwd2);
  });
  image.addEventListener("change", function(){
    validarImagen(image);
  });
  }
}

function subir(){
  event.preventDefault();

  let cont1 = document.getElementById("container");
  let cont4 = document.getElementById("container4");

  if(cont1){
      cont1.remove();
  }

  if(!cont4){

  let newCont = document.createElement("div");
  newCont.setAttribute("class", "container");
  newCont.setAttribute("id", "container4");

  let newForm = document.createElement("form");
  newForm.setAttribute("action", "php/formulario.php");
  newForm.setAttribute("method", "POST");
  newForm.setAttribute("enctype","multipart/form-data");

  let newDiv1 = document.createElement("div");
  newDiv1.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

  let newLabel1 = document.createElement("label");
  newLabel1.innerHTML = "Nombre del tema";
  newLabel1.setAttribute("for", "usuario");
  newLabel1.setAttribute("class", "error");

  let newInput1 = document.createElement("input");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("name", "usuario");
  newInput1.required = true;
  newInput1.setAttribute("id", "usuario");

  let newError1 = document.createElement("span");
  newError1.setAttribute("id", "error-nombre");

  let newDiv2 = document.createElement("div");
  newDiv2.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

  let newLabel2 = document.createElement("label");
  newLabel2.innerHTML = "Tema";
  newLabel2.setAttribute("for", "tema");
  newLabel2.setAttribute("class", "error");

  let newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "file");
  newInput2.setAttribute("name", "tema");
  newInput2.required = true;
  newInput2.setAttribute("id", "tema");

  let newError2 = document.createElement("span");
  newError2.setAttribute("id", "error-audio");

  let newDiv3 = document.createElement("div");
  newDiv3.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

  let newLabel3 = document.createElement("label");
  newLabel3.innerHTML = "Foto";
  newLabel3.setAttribute("for", "image");
  newLabel3.setAttribute("class", "error");

  let newInput3 = document.createElement("input");
  newInput3.setAttribute("type", "file");
  newInput3.setAttribute("name", "image");
  newInput3.required = true;
  newInput3.setAttribute("id", "image");

  let newError3 = document.createElement("span");
  newError3.setAttribute("id", "error-imagen");

  let newDiv4 = document.createElement("div");
  newDiv4.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

  let newButton = document.createElement("button");
  newButton.setAttribute("type", "submit");
  newButton.setAttribute("id", "submitS");
  newButton.setAttribute("class", "btn btn-outline-light my-2 my-sm-0");
  newButton.innerHTML = "Subir";


  document.getElementsByTagName("section")[0].appendChild(newCont);
  newCont.appendChild(newForm);
  newForm.appendChild(newDiv1);
  newForm.appendChild(newDiv2);
  newForm.appendChild(newDiv3);
  newForm.appendChild(newDiv4);
  newDiv1.appendChild(newLabel1);
  newDiv1.appendChild(newInput1);
  newDiv1.appendChild(newError1);
  newDiv2.appendChild(newLabel2);
  newDiv2.appendChild(newInput2);
  newDiv2.appendChild(newError2);
  newDiv3.appendChild(newLabel3);
  newDiv3.appendChild(newInput3);
  newDiv3.appendChild(newError3);
  newDiv4.appendChild(newButton);

  let nombre = document.getElementById("usuario");
  let image = document.getElementById("image");
  let tema = document.getElementById("tema");

  nombre.addEventListener("focusout", function(){
    validar_nombre(nombre);
  });
  image.addEventListener("change", function(){
    validarImagen(image);
  });
  tema.addEventListener("change", function(){
    validarAudio(tema);
  });
  }
}
