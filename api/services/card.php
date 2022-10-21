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

function getLinkedFiles(){

    $token   = body(['token'])['token'];
    $token   = explode("=", $token);
    
    if(count($token) < 2) error(400);

    $values  = jwt_verify(urldecode($token[1]));
    $id      = (int)$values['id'];
    $version = (int)$values['version'];

    if(!$values) error();

    $query = _query(
        "SELECT 
                card.pessoa,
                card.email,
                file.nome,
                file.slug,
                file.seconds
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

function generateToken(){

    $jwt = jwt_gen(['alg' => 'sha256'], [
        'id' => 1,
        'version' => 1,
        'created' => date('d-m-Y H:i:s')
    ]);

    response('t='.urlencode($jwt));
}

function create(){


}