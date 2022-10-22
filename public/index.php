<?php 

include "../src/request.php";

$request = isset($_GET['request']) ? explode('/', $_GET['request']) : 'home';

$req  = array_shift($request);
$sub = join('/', $request);

(function($req, $sub){

    if($req == "api"){
        include "../api/api.php";
        return;
    }

    $file = $req."_template.html";

    include ( file_exists($file) ? $file : "error_template.html" );

})($req, $sub);

