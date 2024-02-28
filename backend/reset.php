<?php

header("Access-Control-Allow-Origin: *");

// Permitir métodos de solicitação específicos
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Headers: Content-Type");

// Definir o tempo de vida do cabeçalho CORS em cache (em segundos)
header("Access-Control-Max-Age: 86400");

header('Content-Type: application/json; charset=utf-8');

$token = $_GET["token"];

if (isset($_GET["password"])) {

    $password = $_GET["password"];
}

if (isset($_GET["username"])) {

    $username = $_GET["username"];
}

$output = array("results" => array());

$mysqli = mysqli_connect('database', 'root', 'yrprey', 'yrprey');

/* Check connection before executing the SQL query */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

$query  = "SELECT id FROM users WHERE token='$token'";
$con = mysqli_query($mysqli, $query);


if (mysqli_num_rows($con) > 0) {

    $output = array("results" => array());

    if (!empty($username)) {
        $query  = "UPDATE users SET username = '$username' where token='$token'";
        $res = mysqli_query($mysqli, $query);
    }

    if (!empty($password)) {
        $query  = "UPDATE users SET password = '$password' where token='$token'";
        $res = mysqli_query($mysqli, $query);
    }

    $output = array("results" => array());

    $array = array(
        'status' => 200
    );
} else {


    $array = array(
        'status' => 400
    );
}

array_push($output["results"], $array);

echo json_encode($output, 128);
