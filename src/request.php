<?php 

function var_encode($str){
    return str_replace('%', '_', urlencode($str));
}

function var_decode($str){
    return urldecode(str_replace('_', '%', $str));
}