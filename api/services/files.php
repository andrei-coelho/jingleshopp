<?php

function _init($func){

    $privates = ['create', 'delete', 'append', 'commit', 'list_files_card'];

    if(in_array($func, $privates)){
        is_admin();
    }

}

function create(){
    
    $fileInfo = body(['name', 'mime']);
    $fileSlug = generate_slug($fileInfo['name'].$fileInfo['mime']);
    
    file_put_contents('../audiofiles/'.$fileSlug.".".$fileInfo['mime'].".g", "");

    return response([
        'slug' => $fileSlug
    ]);

}

function append(){
    
    $fileInfo = body(['slug', 'mime', 'file']);
    $file = $fileInfo['slug'].".".$fileInfo['mime'].".g";
    $file = '../audiofiles/'.$file;
    
    $data = base64_decode($fileInfo['file']);
    
    return file_exists($file) && file_put_contents($file, $data, FILE_APPEND) ? 
           response() : 
           error(500) ;
           
}

function commit(){
    
    $fileInfo = body(['card_id', 'name', 'slug', 'mime']);
    $cardid   = (int)$fileInfo['card_id'];
    $fileslug = $fileInfo['slug'].".".$fileInfo['mime'];
    $filepath = "../audiofiles/".$fileslug;
    $nome     = $fileInfo['name'];

    rename("$filepath.g", $filepath);
    
    if(!_exec("INSERT INTO file (nome, slug, card_id) VALUES ('$nome', '$fileslug', $cardid)")){
        error(500);
    }

    return response();

}

function delete(){
    
    $id    = (int)body(['file_id'])['file_id'];
    $fileq = _query("SELECT slug FROM file WHERE id = $id");
    
    if($fileq->rowCount() == 0) error();
    $slug = $fileq->fetchAssoc()['slug'];

    if( !_query("DELETE FROM file WHERE id = $id") || !unlink("../audiofiles/$slug")) 
        error(500); 

    response();

}

function list_files_card(){

    $cardId = body(['card_id'])['card_id'];
    response(_query(
        "SELECT 
            id,
            nome
        FROM file WHERE card_id = $cardId
        ORDER BY id ASC
    ")->fetchAllAssoc());

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
