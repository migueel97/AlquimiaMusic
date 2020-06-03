<?php
    // Patrón para usar en expresiones regulares (admite letras acentuadas y espacios):
     $patron_texto = "[a-zA-Z]((\.|_|-)?[a-zA-Z0-9]+){3}";
     $regexp_password = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){8,15}/";

     function validar_foto($foto){
       if(isset($foto)&&!empty($foto)){
         $info = new SplFileInfo($foto);
         $extension = $info->getExtension();
         if($extension == "jpg" || $extension == "jpeg" || $extension == "png"){
           return true;
         }
       }
       return false;
     }

     function validar_audio($audio){
       if(isset($audio)&&!empty($audio)){
         $info = new SplFileInfo($foto);
         $extension = $info->getExtension();
         if($extension == "mp3" || $extension == "ogg" || $extension == "wav"){
           return true;
         }
       }
       return false;
     }

     function validar_nombre($nombre){
       if(isset($nombre)&&!empty($nombre)){
         if(!preg_match('/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]{8,20}$/', $nombre)){
           return true;
         }

       }
       return false;
     }

     function validar_contraseña($contraseña){

       if(isset($contraseña)&&!empty($contraseña)){
         if(preg_match('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,20}$/', $contraseña)){
           return true;
         }

       }
       return false;
     }

     function comprobar_contraseñas($contraseña, $contraseña2){
       if($contraseña == $contraseña2){
         return true;
       }
       return false;
     }