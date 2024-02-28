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
    $qtde = $data->id;
}

$mysqli = mysqli_connect('database', 'root', 'yrprey', 'yrprey');

/* Check connection before executing the SQL query */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}


for ($i = 0; $i <= $qtde; $i++) {

    $output = array("results" => array());

    $query  = "SELECT * FROM shop";
    $result = mysqli_query($mysqli, $query) or die('<pre>' . mysqli_error($mysqli) . '</pre>');

    while ($row = mysqli_fetch_assoc($result)) {

        $array = array(
            'status' => "OK",
            'id' => $row["id"],
            'titulo' => $row["titulo"],
            'price' => $row["price"],
        );
    }

    array_push($output["results"], $array);
}

echo json_encode($output, 128);
