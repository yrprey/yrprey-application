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
    $nome = $data->name;
    $telefone = $data->phone;
    $email = $data->mail;
    $subject = $data->subject;
    $message = $data->textMessage;
    $dest = $data->dest;
    
}

$output = array("results" => array());

/*

$mail = new PHPMailer(); // create a new object
    $mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = "ssl"; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "smtp.domain.com";
    $mail->Port = 465; 
    $mail->Username = "email@domain.com";
    $mail->Password = "password@123";
    $mail->SetFrom("email@domain.com","name");
    $mail->Subject = utf8_decode("$ubject");
    $mail->Body = "hello";
    $mail->AddAddress($dest);

    $mail->msgHTML('<b>nome: </b> '.$nome.'<br>
    <b>nome: </b> '.$telefone.'<br>
    <b>nome: </b> '.$message.'<br>');

    $mail->IsHTML(true);

    if ($mail->Send()) {
      $mail->ClearAllRecipients();
      $mail->ClearAttachments();
    }
*/

if  (empty($nome) OR
empty($telefone) OR
empty($email) OR
empty($subject) OR
empty($message)) {

$status = 400;
$msg = "error";

}
else {
    $status = 200;
    $msg = "E-mail enviado com sucesso!";
}

            $array = array(
                'status' => $status,
                'msg' => $msg
            );    

array_push($output["results"], $array);

    echo json_encode($output, 128);
    
    ?>