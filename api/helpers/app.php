<?php 

use libs\app\Config as Config;
use libs\app\Request as Request;

function _error(){
    include "../pages/error.php";
    exit;
}

function url(string $uri = "", bool $prod = false){
    return !$prod ? Config::url($uri) : Config::get("url_prod").$uri;
}

function _url(string $uri = "", bool $prod = false){
    echo !$prod ? Config::url($uri) : Config::get("url_prod").$uri;
}

function config(string $key = ""){
    return Config::get($key);
}

function database(){
    return Config::database();
}

function _is_in_production(){
    return Config::get("production");
}

function jwt_base64encode($value){
    
    return base64_encode(
        is_array($value) ? json_encode($value) : $value
    );

}


function jwt_gen(array $header, array $body){

    $salt   = config('salt');
    $alg    = isset($header['alg']) && in_array($header['alg'], hash_hmac_algos()) ? $header['alg'] : 'sha256';
    $header = jwt_base64encode($header);
    $body   = jwt_base64encode($body);

    return $header.".".$body.".".jwt_base64encode(hash_hmac($alg, $header.".".$body, $salt, true));

}

function jwt_verify($hash){

    $salt   = config('salt');
    $parts  = explode(".", $hash);
    $header = json_decode(base64_decode($parts[0]), true);
    $alg    = isset($header['alg']) && in_array($header['alg'], hash_hmac_algos()) ? $header['alg'] : 'sha256';

    return 
        base64_decode($parts[2]) == hash_hmac($alg, $parts[0].".".$parts[1], $salt, true) 
        ? json_decode(base64_decode($parts[1]), true) 
        : false;

}