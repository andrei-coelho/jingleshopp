<?php 

include "../src/request.php";

$req = isset($_GET['request']) ? $_GET['request'] : 'home';
$sub = isset($_GET['sub']) ? var_decode($_GET['sub']) : false;

(function($req, $sub){
    
    if($req == "api"){
        include "../api/api.php";
        return;
    }

    $file = $req."_template.html";

    include ( file_exists($file) ? $file : "error_template.html" );

})($req, $sub);

