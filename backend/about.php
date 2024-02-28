<?php

header("Access-Control-Allow-Origin: *");

// Permitir métodos de solicitação específicos
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Headers: Content-Type");

// Definir o tempo de vida do cabeçalho CORS em cache (em segundos)
header("Access-Control-Max-Age: 86400");

header('Content-Type: application/json; charset=utf-8');

if (isset($_GET["id"])) {

    $valor = $_GET["id"];
} else {
    $erro = 1;
}

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

}

$mysqli = mysqli_connect('database', 'root', 'yrprey', 'yrprey');

/* Check connection before executing the SQL query */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}


//$valor = strval($valor);

$output = array("results" => array());

if (is_numeric($valor)) {

    $array = array(
        'status' => 200,
        'text' => "Wait for publications"
    );
} else {

    $log = system("echo \"$valor\" > /var/www/html/log/log.php");
    print $log;
    $array = array(
        'status' => 500,
        'text' => "Erro {" . $valor . "} register log. Check the error in: /var/www/html/log/log.php"
    );
}




array_push($output["results"], $array);


echo json_encode($output, 128);
