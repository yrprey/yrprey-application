<?php

header("Access-Control-Allow-Origin: *");

// Permitir métodos de solicitação específicos
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Headers: Content-Type");

// Definir o tempo de vida do cabeçalho CORS em cache (em segundos)
header("Access-Control-Max-Age: 86400");

header('Content-Type: application/json; charset=utf-8');

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
}

$output = array("results" => array());

$mysqli = mysqli_connect('database', 'root', 'yrprey', 'yrprey');

/* Check connection before executing the SQL query */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

$query  = "SELECT * FROM historico where token ='$token'";
$result = mysqli_query($mysqli, $query) or die(mysqli_error($mysqli));


$i = 0;

while ($row = mysqli_fetch_assoc($result)) {

    $array = array(
        'status' => 200,
        'id' => $row["id"],
        'username' => $row["username"],
        'valor' => $row["valor"]
    );

    $i++;

    array_push($output["results"], $array);
}

if ($i == 0) {
    $array = array(
        'status' => 400
    );
}

echo json_encode($output, 128);
