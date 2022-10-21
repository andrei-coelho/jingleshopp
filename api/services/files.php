<?php

function _init($func){

    $privates = ['create', 'update', 'delete'];

    if(count(VARS) == 0) {
       // error(400);
    }

    if(in_array($func, $privates)){
        // verifica se é um administrador
    }

}

function get(){

    $body   = body(['token', 'file']);

    $values = jwt_verify($body['token']);
    $agora  = new DateTime(date("d-m-Y H:i:s"));
    $limit  = new DateTime($values['limit']);
    $file   = "../audiofiles/".$body['file'];

    if($agora > $limit) error(401);

    if(file_exists($file)){
        return response(base64_encode(file_get_contents($file)));
    }
    
    error();

}
