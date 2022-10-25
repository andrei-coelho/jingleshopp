<?php 

function _init($func){

    $privates = ['send'];

    if(in_array($func, $privates)){
        is_admin();
    }

}

function send(){

    $card_id = isset(VARS[0]) ? (int)VARS[0] : 0;

    $query = _query("SELECT id, version, pessoa, email, email_enviado FROM card WHERE id = $card_id");
    if($query->rowCount() == 0) error();
    
    $values = $query->fetchAssoc();

    $jwt = jwt_gen(['alg' => 'sha256'], [
        'id'      => $values['id'],
        'version' => $values['version'],
        'created' => date('d-m-Y H:i:s')
    ]);

    $url    = url();
    $link   = $url.'/audiocard/card/t='.str_replace('%', '_', urlencode($jwt));
    $pessoa = $values['pessoa'];
    $email  = $values['email'];

    $html   = file_get_contents('../src/email_html_template.html');
    $html   = str_replace('{{pessoa}}', $pessoa, $html);
    $html   = str_replace('{{url}}', $url, $html);
    $html   = str_replace('{{link}}', $link, $html);
    $html   = str_replace('{{email}}', $email, $html);

    $remetent = 'vendas@jingleshopp.com';
    $to       = $email;
    $subject  = $pessoa.', criamos os jingles que você solicitou';
    
    $header   = "MIME-Version: 1.1\n";
    $header  .= "Content-type: text/html;charset=UTF-8\n";
    $header  .= "From: $remetent\n";
    $header  .= "Return-Path: $remetent\n";

    $enviado  = mail($to, $subject, $html, $header, "-f$remetent");
    //$enviado = true;

    if(!$enviado)
        error(500);

    if($values['email_enviado'] == 0)
        _exec("UPDATE card SET email_enviado = 1 WHERE id = $card_id");

    response();
    
   
}