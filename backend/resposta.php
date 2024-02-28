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
    $v = $data->id;
    
}


for ($i=0; $i <= $id; $i++) {

    $output = array("results" => array());
    
        $array = array(
        'id' => "$v",
        'image' => "https://yrprey.com/img/slide-beige.webp",	
        'username' => "test"	
    );
        
        array_push($output["results"], $array);

        $array = array(
            'id' => "$v",
            'image' => "https://yrprey.com/img/slide-blue.webp",	
            'username' => "test"	
        );
            
            array_push($output["results"], $array);
            
            $array = array(
                'id' => "$v",
                'image' => "https://yrprey.com/img/slide-cian.webp",	
                'username' => "test"	
            );
                
                array_push($output["results"], $array);

                $array = array(
                    'id' => "$v",
                    'image' => "https://yrprey.com/img/slide-red.webp",	
                    'username' => "test"	
                );
                    
                    array_push($output["results"], $array);

                    $array = array(
                        'id' => "$v",
                        'image' => "https://yrprey.com/img/slide-white.webp",	
                        'username' => "test"	
                    );
                        
                        array_push($output["results"], $array);


    }
    
    echo json_encode($output, 128);
    
    ?>