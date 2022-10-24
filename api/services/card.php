<?php 

function _init($func){

    $privates = [
        'create', 
        'update', 
        'delete', 
        'gerarLink',
        'list'
    ];

    if(in_array($func, $privates)) is_admin() ;

}

function create(){

    $values = body(['titulo', 'pessoa', 'email']);
    
    $titulo = $values['titulo'];
    $pessoa = $values['pessoa'];
    $email  = $values['email'];

    if(!_exec("INSERT INTO card (titulo, pessoa, email, createdAt) 
    VALUES ('$titulo', '$pessoa', '$email', now())"))
        error(500);

    response();

}

function update(){

    $card_id = isset(VARS[0]) ? (int)VARS[0] : 0;
    $values  = body(['pessoa', 'email']);
    
    $pessoa  = $values['pessoa'];
    $email   = $values['email'];
    
    if(!_exec(
        "UPDATE card SET pessoa = '$pessoa', email = '$email'
            WHERE id = $card_id")) error(500);
    
    response();

}

function delete(){

    $card_id = isset(VARS[0]) ? (int)VARS[0] : 0;

    $filesq = _query("SELECT slug FROM file WHERE card_id = $card_id");
    if($filesq ->rowCount() > 0){
        $files = $filesq->fetchAllAssoc();
        foreach ($files as $file) {
            $slug = $file['slug'];
            unlink("../audiofiles/$slug");
        }
    }
    
    _exec("DELETE FROM card WHERE id = $card_id");
    
    resonse();

}


function list_cards(){

    $query = _query(
        "SELECT 
            card.id, 
            card.titulo, 
            card.pessoa, 
            card.email,
            card.version,
            ( SELECT 
                count(file.id) 
              FROM  file 
              WHERE file.card_id = card.id
            ) as total_files
        FROM card; 
    ");

    response($query->fetchAllAssoc());

}

function changeVersion(){

    $card_id = isset(VARS[0]) ? (int)VARS[0] : 0;

    if(!_exec("UPDATE card SET version = version + 1 WHERE id = $card_id"))
        error(500);

    response();

} 

function getLinkedFiles(){

    $token   = body(['token'])['token'];
    $token   = explode("=", $token);
    
    if(count($token) < 2) error(400);

    $values  = jwt_verify(urldecode(str_replace('_', '%', $token[1])));
    $id      = (int)$values['id'];
    $version = (int)$values['version'];

    if(!$values) error();

    $query = _query(
        "SELECT 
                card.pessoa,
                card.email,
                file.nome,
                file.slug
           FROM file
           JOIN card ON card.id = file.card_id 
          WHERE card.id = $id AND card.version = $version
       ORDER BY file.id ASC
    ");

    if($query -> rowCount() == 0){
        error(404);
    }

    $res   = $query->fetchAllAssoc();
    $dats  = true;
    $user  = [];
    $files = [];

    $tokf  = jwt_gen(['alg' => 'sha256'], [
        'token' => $token,
        'limit' => date('d-m-Y H:i:s', strtotime('+10 minutes'))
    ]);

    foreach ($res as $row) {
        
        if($dats){
            $user['nome']  = $row['pessoa'];
            $user['email'] = $row['email'];
            $dats = false;
        }

        $files[] = [
            'nome'    => $row['nome'],
            'slug'    => $row['slug'],
            'seconds' => $row['seconds']
        ];

    }

    response([
        'token_files' => $tokf,
        'pessoa'      => $user,
        'files'       => $files
    ]);

}


function gerarLink(){

    $card_id = isset(VARS[0]) ? (int)VARS[0] : 0;
    
    $query = _query(
        "SELECT 
            card.id, card.version 
        FROM card WHERE card.id = $card_id
    ");

    if($query->rowCount() == 0) error();

    $card = $query->fetchAssoc();

    $jwt = jwt_gen(['alg' => 'sha256'], [
        'id'      => $card['id'],
        'version' => $card['version'],
        'created' => date('d-m-Y H:i:s')
    ]);

    response(url().'/audiocard/card/t='.str_replace('%', '_', urlencode($jwt)));

}
