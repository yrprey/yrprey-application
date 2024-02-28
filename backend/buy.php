<?php

header("Access-Control-Allow-Origin: *");

// Permitir métodos de solicitação específicos
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Headers: Content-Type");

// Definir o tempo de vida do cabeçalho CORS em cache (em segundos)
header("Access-Control-Max-Age: 86400");

header('Content-Type: application/json; charset=utf-8');

//$username = $_GET["nome"];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtém o JSON enviado pelo cliente e converte em um objeto PHP
    $jsonPayload = file_get_contents('php://input');
    $data = json_decode($jsonPayload);

    // Verifica se o JSON foi decodificado corretamente
    if ($data === null) {
        // Se houve um erro ao decodificar o JSON, envie uma resposta de erro
        http_response_code(400); // Requisição inválida
        echo json_encode(array('error' => 'JSON inválido'));
        exit;
    }

    // Agora você pode acessar as propriedades do objeto como desejar
    $token = $data->token;
    $saldo = $data->saldo;
    $price = $data->price;
    $qtde = $data->qtde;
}

$output = array("results" => array());

$mysqli = mysqli_connect('database', 'root', 'yrprey', 'yrprey');

/* Check connection before executing the SQL query */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

if ($saldo >= $price) {

    $query  = "UPDATE users SET saldo=saldo-$price WHERE token = '$token' AND saldo > 0";
    $debitado = mysqli_query($mysqli, $query);

    if ($debitado === TRUE) {

        $status = 200;
        $msg = "Compra realizada com sucesso!";

        $q  = "INSERT INTO historico (`id`, `token`, `valor`) VALUES (NULL, '$token', '$price')";

        $exec = mysqli_query($mysqli, $q);
    } else {

        $status = 400;
        $msg = "Você não possui saldo!";
    }

    $output = array("results" => array());
}

$array = array(
    'status' => $status,
    'msg' => $msg
);

array_push($output["results"], $array);

echo json_encode($output, 128);
