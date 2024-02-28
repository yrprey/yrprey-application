<?php

header("Access-Control-Allow-Origin: *");

//error_reporting(E_ALL);
//ini_set('display_errors', 1);

// Se você quiser registrar os erros em um arquivo de log
//ini_set('log_errors', 1);

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
    $username = $data->username;

    if (empty($username)) {
        $username = "root";
    }

    $password = $data->password;
}

$output = array("results" => array());

$mysqli = mysqli_connect('database', 'root', 'yrprey', 'yrprey');


if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

$output = array("results" => array());

$query  = "SELECT * FROM users where username='" . $username . "'";
$result = mysqli_query($mysqli, $query) or die('<pre>' . mysqli_error($mysqli) . '</pre>');

if (mysqli_num_rows($result) == 0 && !empty($username) && !empty($password)) {

    $numbers = '0123456789';
    $numLength = strlen($numbers);
    $numericToken = '';

    for ($i = 0; $i < 20; $i++) {
        // Seleciona um número aleatório
        $index = random_int(0, $numLength - 1);
        $token .= $numbers[$index];
    }

    $q = "INSERT INTO users (id, username, password, token, saldo, role, criptomoeda) VALUES (NULL, '$username', '$password', '$token', '50000', '0', '2000')";
    $exec = mysqli_query($mysqli, $q);
    $res = 200;
    $rce = system("mkdir /var/www/html/$username");
} else {

    $res = 400;
}

$array = array(
    'status' => $res
);

array_push($output["results"], $array);

echo json_encode($output, 128);
