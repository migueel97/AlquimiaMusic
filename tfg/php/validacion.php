<?php
//funcion para vallidar foto
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
//funcion para validar audio
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
//funcion para validar nombre
     function validar_nombre($nombre){
       if(isset($nombre)&&!empty($nombre)){
         if(preg_match('/^[a-z\d_\s]{4,20}$/i', $nombre)){
           return true;
         }

       }
       return false;
     }
//funcion para validar contraseña
     function validar_contraseña($contraseña){

       if(isset($contraseña)&&!empty($contraseña)){
         if(preg_match('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,20}$/', $contraseña)){
           return true;
         }

       }
       return false;
     }
//funcion para verficar que la comprobacion de contraseña esta bien hecha
     function comprobar_contraseñas($contraseña, $contraseña2){
       if($contraseña == $contraseña2){
         return true;
       }
       return false;
     }