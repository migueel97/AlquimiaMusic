/*funcion que comprueba si el arhivo a subir es una imagen*/
function validarImagen(imagen){

  let mensajeError = "El archivo a adjuntar no es una imagen";
  if (!(/\.(jpg|png)$/i).test(imagen.value)) {
        document.getElementById("error-imagen").textContent = mensajeError;
        return false;
    }
    document.getElementById("error-imagen").textContent = "";
    return true;
}
/*funcion que comprueba si el archivo a subir es un audio*/
function validarAudio(audio){

  let mensajeError = "El archivo a adjuntar no es un audio";
  if (!(/\.(mp3|ogg|wav)$/i).test(audio.value)) {
        document.getElementById("error-audio").textContent = "";
        return false;
    }
  document.getElementById("error-audio").textContent = mensajeError;
  return true;
}
/*funcion que comprueba si la contraseña cumple los requisitos*/
function validar_clave(contraseña){
    if(contraseña.value.length >= 8)

    {

      var mayuscula = false;
      var minuscula = false;
      var numero = false;

      for(var i = 0;i<contraseña.value.length;i++){

        if(contraseña.value.charCodeAt(i) >= 65 && contraseña.value.charCodeAt(i) <= 90)

        {
                mayuscula = true;

        }

        else if(contraseña.value.charCodeAt(i) >= 97 && contraseña.value.charCodeAt(i) <= 122)

        {
                minuscula = true;

        }else if(contraseña.value.charCodeAt(i) >= 48 && contraseña.value.charCodeAt(i) <= 57){

                numero = true;
        }

      }

      if(mayuscula == false){
        document.getElementById("error-passwd").textContent = "La contraseña debe contener al menos una mayuscula";
      }

      if (minuscula == false){
        document.getElementById("error-passwd").textContent = "La contraseña debe contener al menos una minuscula";
      }

      if(numero == false){
        document.getElementById("error-passwd").textContent = "La contraseña debe contener al menos un numero";
      }

      if(mayuscula == true && minuscula == true && numero == true)

      {
                  document.getElementById("error-passwd").textContent = "";
                  return true;

      }

    }else{
      document.getElementById("error-passwd").textContent = "La contraseña debe tener al menos 8 caracteres";
    }


			return false;

}


/*funcion que comprueba si las dos contraseñas son iguales*/
function validar_contraseñas(contraseña1, contraseña2){
    if (contraseña1.value == contraseña2.value) {
        document.getElementById("error-passwd2").textContent = "";
        return true;

    } else {
        document.getElementById("error-passwd2").textContent = "Las contraseñas no coinciden";
        return false;

    }


}
/*funcion que comprueba si el nombre es valido*/
function validar_nombre(nombre){
  if(!nombre.checkValidity()){
    if(nombre.validity.valueMissing){
      document.getElementById("error-nombre").textContent = "Debe introducir un nombre";
    }
    if(nombre.validity.patternMismatch){
      document.getElementById("error-nombre").textContent = "Introduce un nombre entre 2 y 15 letras";
    }
    return false;
  }else{
    document.getElementById("error-nombre").textContent = "";
  }
  return true;
}