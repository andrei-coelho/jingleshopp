<?php 



include "autoload.php";
include "../api/helpers/request.php";
include "../api/helpers/app.php";
include "../api/helpers/sqli.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$vars = explode('/', $sub);

if(count($vars) < 2 || trim($vars[1]) == "" ){
    error(400);
}

$service = array_shift($vars);
$func    = array_shift($vars);

$file = "../api/services/$service.php";

if(!file_exists($file)) error();

include $file;

(function($func, $vars){
    
    if($func[0] == '_') error();
    
    if(!function_exists($func)){
        error();
    }

    $raw = json_decode(file_get_contents('php://input'), true);
    define('VARS', $vars);
    define('BODY', ($raw ? $raw : []));
    
    if(function_exists('_init')){
        _init($func);
    }

    $func();
    exit;

})($func, $vars);




