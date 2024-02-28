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
    $id = $data->id;
    $role = $data->role;
    $token = $data->token;
}

$output = array("results" => array());

$mysqli = mysqli_connect('database', 'root', 'yrprey', 'yrprey');

/* Check connection before executing the SQL query */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

if ($role == 1) {

    $query  = "DELETE FROM produtos WHERE id = '$id'";
    $remover = mysqli_query($mysqli, $query);

    if (mysqli_affected_rows($mysqli) > 0) {

        $status = 200;
        $msg = "Produto removido com sucesso!";
    } else {
        $status = 400;
        $msg = "Não foi possível remover o produto";
    }
} else {
    $status = 400;
    $msg = "Não foi possível remover o produto";
}
$output = array("results" => array());

$array = array(
    'status' => $status,
    'msg' => $msg
);

array_push($output["results"], $array);

echo json_encode($output, 128);
