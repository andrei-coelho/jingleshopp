<?php 

function generate_admin(){

    $salt = isset(VARS[0]) ? VARS[0] : '';

    if($salt !== config('salt')) error();

    $name = "admin";
    $user = "admin@jingleshopp.com";
    $pass = password_hash(config('admin_pass'), PASSWORD_DEFAULT);
    _exec("INSERT INTO admin (nome, email, senha) VALUES ('$name','$user','$pass')");

    response();

}

function admin_login(){

    $values = body(['email', 'senha']);
    $email = $values['email'];
    $senha = $values['senha'];

    $query = _query("SELECT id, nonce, senha FROM admin WHERE email = '$email'");

    if($query->rowCount() == 0) error();

    $user = $query->fetchAssoc();

    if(!password_verify($senha, $user['senha'])) error();

    response([
        'session' => jwt_gen(['alg' => 'sha256'], [
            'type'  => 'admin',
            'id' => $user['id'],
            'nonce' => $user['nonce']
        ])
    ]);

}
