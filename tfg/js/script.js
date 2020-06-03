document.getElementById("logo").addEventListener("click", inicio);
document.getElementById("bInicio").addEventListener("click", inicio);
document.getElementById("log1").addEventListener("click", login);
document.getElementById("bReg").addEventListener("click", registro);

function inicio(){
  event.preventDefault();

  cont1 = document.getElementById("container");
  cont2 = document.getElementById("container2");
  cont3 = document.getElementById("container3");

  if(cont3){
      cont3.remove();
  }
  if(cont2){
      cont2.remove();
  }

  if(!cont1){

    event.preventDefault();

    let newCont = document.createElement("div");
    newCont.setAttribute("class", "container");
    newCont.setAttribute("id", "container");

    let newH1 = document.createElement("h1");
    newH1.innerHTML = "Estos son nuestro artistas:";

    let newRow1 = document.createElement("div");
    newRow1.setAttribute("class", "row");

    let newDiv1 = document.createElement("div");
    newDiv1.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");

    let newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");

    let newDiv3 = document.createElement("div");
    newDiv3.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");

    let newDiv4 = document.createElement("div");
    newDiv4.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");

    let newRow2 = document.createElement("div");
    newRow2.setAttribute("class", "row");

    let newDiv5 = document.createElement("div");
    newDiv5.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");

    let newDiv6 = document.createElement("div");
    newDiv6.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");

    let newDiv7 = document.createElement("div");
    newDiv7.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");

    let newDiv8 = document.createElement("div");
    newDiv8.setAttribute("class", "col-sm-12 col-md-6 col-lg-3 col-xl-3");

    document.body.appendChild(newCont);
    newCont.appendChild(newH1);
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
  }
}

function login(){
    event.preventDefault();

    cont1 = document.getElementById("container");
    cont2 = document.getElementById("container2");
    cont3 = document.getElementById("container3");

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
    newButton1.setAttribute("id", "bReg2");

    let newSpan1 = document.createElement("span");
    newSpan1.innerHTML = "Inicia Sesión";

    let newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "col-sm-6 col-md-6 col-lg-6 col-xl-6");

    let newButton2 = document.createElement("button");
    newButton2.setAttribute("class", "btn btn-outline-light my-2 my-sm-0");

    let newSpan2 = document.createElement("span");
    newSpan2.innerHTML = "Registrate";

    let newForm = document.createElement("form");
    newForm.setAttribute("action", "php/login.php");
    newForm.setAttribute("method", "POST");

    let newDiv3 = document.createElement("div");
    newDiv3.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

    let newLabel1 = document.createElement("label");
    newLabel1.innerHTML = "Usuario";

    let newInput1 = document.createElement("input");
    newInput1.setAttribute("type", "text");
    newInput1.setAttribute("name", "usuario");

    let newDiv4 = document.createElement("div");
    newDiv4.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

    let newLabel2 = document.createElement("label");
    newLabel2.innerHTML = "Contraseña";

    let newInput2 = document.createElement("input");
    newInput2.setAttribute("type", "password");
    newInput2.setAttribute("name", "passwd");

    let newDiv7 = document.createElement("div");
    newDiv7.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

    let newButton3 = document.createElement("button");
    newButton3.setAttribute("type", "submit");
    newButton3.setAttribute("class", "btn btn-outline-light my-2 my-sm-0");
    newButton3.innerHTML = "Entra";


    document.body.appendChild(newCont);
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
    newDiv4.appendChild(newLabel2);
    newDiv4.appendChild(newInput2);
    newDiv7.appendChild(newButton3);

    document.getElementById("bReg2").addEventListener("click", registro);
    }
  }


function registro(){

  event.preventDefault();

  cont1 = document.getElementById("container");
  cont2 = document.getElementById("container2");
  cont3 = document.getElementById("container3");

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

  let newDiv3 = document.createElement("div");
  newDiv3.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");
  newRow.setAttribute("id", "row");

  let newLabel1 = document.createElement("label");
  newLabel1.innerHTML = "Nombre de usuario";

  let newInput1 = document.createElement("input");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("name", "usuario");

  let newDiv4 = document.createElement("div");
  newDiv4.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");
  newRow.setAttribute("id", "row");

  let newLabel2 = document.createElement("label");
  newLabel2.innerHTML = "Contraseña";

  let newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "password");
  newInput2.setAttribute("name", "passwd");

  let newDiv5 = document.createElement("div");
  newDiv5.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

  let newLabel3 = document.createElement("label");
  newLabel3.innerHTML = "Confirmación de contraseña";

  let newInput3 = document.createElement("input");
  newInput3.setAttribute("type", "password");
  newInput3.setAttribute("name", "passwd2");

  let newDiv6 = document.createElement("div");
  newDiv6.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

  let newLabel4 = document.createElement("label");
  newLabel4.innerHTML = "Foto de perfil";

  let newInput4 = document.createElement("input");
  newInput4.setAttribute("type", "file");
  newInput4.setAttribute("name", "image");

  let newDiv7 = document.createElement("div");
  newDiv7.setAttribute("class", "col-sm-12 col-md-12 col-lg-12 col-xl-12");

  let newButton3 = document.createElement("button");
  newButton3.setAttribute("type", "submit");
  newButton3.setAttribute("class", "btn btn-outline-light my-2 my-sm-0");
  newButton3.innerHTML = "Registrate";


  document.body.appendChild(newCont);
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
  newDiv3.appendChild(newLabel1);
  newDiv3.appendChild(newInput1);
  newDiv4.appendChild(newLabel2);
  newDiv4.appendChild(newInput2);
  newDiv5.appendChild(newLabel3);
  newDiv5.appendChild(newInput3);
  newDiv6.appendChild(newLabel4);
  newDiv6.appendChild(newInput4);
  newDiv7.appendChild(newButton3);

  document.getElementById("log2").addEventListener("click", login);
  }
}