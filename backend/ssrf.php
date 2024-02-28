<?php

header("Access-Control-Allow-Origin: *");

// Permitir métodos de solicitação específicos
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Headers: Content-Type");

// Definir o tempo de vida do cabeçalho CORS em cache (em segundos)
header("Access-Control-Max-Age: 86400");

header('Content-Type: application/json; charset=utf-8');

$host = $_GET["endereco"];
$port = $_GET["port"];

$output = array("results" => array());

$mysqli = mysqli_connect('database', 'root', 'yrprey', 'yrprey');

/* Check connection before executing the SQL query */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

$socket = fsockopen($host, $port, $errno, $errstr, 30);

$output = array("results" => array());

if (!$socket) {
    $status = 400;
    $response = "Connection error\n";
} else {

    $packet = "\x0A\x00\x00\x00\x0A\x35\x2E\x36\x2E\x33\x38\x2D\x6C\x6F\x67\x00\x2F\x00\x00\x00\x3F\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00";

    fwrite($socket, $packet);

    $response = fread($socket, 4096);
    $response = bin2hex($response);
    $status = 200;

    fclose($socket);
}

$array = array(
    "status" => $status,
    "res" => $response
);

array_push($output["results"], $array);

echo json_encode($output, 128);
