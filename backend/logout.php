<?php

header("Access-Control-Allow-Origin: *");

// Permitir métodos de solicitação específicos
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Headers: Content-Type");

// Definir o tempo de vida do cabeçalho CORS em cache (em segundos)
header("Access-Control-Max-Age: 86400");

header('Content-Type: application/json; charset=utf-8');

//require_once "../PHPMailer/class.phpmailer.php";
//require_once "../PHPMailer/class.smtp.php";

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
    $url = $data->url;
    $token = $data->token;
    
}

$output = array("results" => array());

if  (empty($url) OR
empty($token)) {

$status = 400;
$msg = "error";

}
else {
    $status = 200;
    $msg = $url;
}

            $array = array(
                'status' => $status,
                'msg' => $msg
            );    

array_push($output["results"], $array);

    echo json_encode($output, 128);
    
    ?>