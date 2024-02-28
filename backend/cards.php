<?php

header("Access-Control-Allow-Origin: *");

// Permitir métodos de solicitação específicos
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Headers: Content-Type");

// Definir o tempo de vida do cabeçalho CORS em cache (em segundos)
header("Access-Control-Max-Age: 86400");

header('Content-Type: application/json; charset=utf-8');

// Configuração de conexão com o banco de dados
$servername = "localhost";
$username = "root"; 
$password = "senhasenha";
$dbname = "yrprey";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Consulta SQL para buscar os dados do banco de dados
$sql = "SELECT * FROM produtos";
$result = $conn->query($sql);

// Array para armazenar os dados
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    // Loop através dos resultados do banco de dados
    while ($row = $result->fetch_assoc()) {
      $color = $row['color'];
      unset($row['title']);
      $data[$color][] = $row;
  }
}
// Converte os dados em JSON
$json_data = json_encode($data, JSON_PRETTY_PRINT);

// Fecha a conexão com o banco de dados
$conn->close();

// Retorna o JSON
echo $json_data;