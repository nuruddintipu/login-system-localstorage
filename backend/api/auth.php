<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

include 'userService.php';

$response =  ['success' => false, 'message' => 'Invalid request'];

if(isset($data['action'])) {
    if($data['action'] == 'register') {
        $email = isset($data['email']) ? $data['email'] : "";
        $password = isset($data['password']) ? $data['password'] : "";

        if(registerUser($email, $password)) {
            $response = ['success' => true, 'message' => 'User registered successfully'];
        } else {
            $response = ['success' => false, 'message' => 'User registration failed'];
        }
    }
}
echo json_encode($response);