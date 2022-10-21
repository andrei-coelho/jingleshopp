<?php 

use libs\app\Request as Request;

function request($elements){
    return new Request($elements);
}

function body($vars = []){
    $raw = Request::raw();
    $res = [];
    foreach ($vars as $key) {
        if(!isset($raw[$key]))
            error(400);
        $res[$key] = $raw[$key];
    }
    return $res;
}

function error($code = 404, $message = ""){
    http_response_code($code);
    if($message == ""){
        switch ($code) {

            case 400:
                $message = "Bad Request";
                break;

            case 404:
                $message = "Not Found";
                break;
            
            case 401:
                $message = "Unauthorized";
                break;

            case 500:
                $message = "Internal Server Error";
                break;

            default:
                $code = 500;
                $message = "Internal Server Error";
                break;
        }
    }
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        "code" => $code,
        "data" => $message
    ]);
    exit;
   
}

function response($response = "", $code = 200){
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        "code" => $code,
        "data" => $response
    ]);
    exit;
}