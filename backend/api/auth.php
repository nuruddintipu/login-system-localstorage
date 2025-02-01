<?php
require_once '../utils/headers.php';
require_once '../utils/approveOptionsMethod.php';


$data = json_decode(file_get_contents('php://input'), true);

require_once '../utils/registerUser.php';
require_once '../utils/getUserByEmail.php';
require_once '../utils/getUserByGuid.php';
require_once '../utils/deleteUser.php';
$response =  ['success' => false, 'message' => 'Invalid request'];

if(isset($data['action'])) {

    $email = isset($data['email']) ? $data['email'] : "";
    $password = isset($data['password']) ? $data['password'] : "";

    if($data['action'] == 'register') {
        if(registerUser($email, $password)) {
            $response = ['success' => true, 'message' => 'User registered successfully'];
        } else {
            $response = ['success' => false, 'message' => 'User registration failed'];
        }
    } else if($data['action'] == 'delete') {
        $guid = isset($data['guid']) ? $data['guid'] : "";

        if(deleteUser($guid)) {
            $response = ['success' => true, 'message' => 'User deleted successfully'];
        } else {
            $response = ['success' => false, 'message' => 'User deletion failed'];
        }

    } else if($data['action'] == 'changePassword') {

        $guid = isset($data['guid']) ? $data['guid'] : "";
        $currentPassword = isset($data['currentPassword']) ? $data['currentPassword'] : "";
        $newPassword = isset($data['newPassword']) ? $data['newPassword'] : "";
        $confirmPassword = isset($data['confirmPassword']) ? $data['confirmPassword'] : "";

        $user = getUserByUuid($guid);
        if(!$user){
            $response = ['success' => false, 'message' => 'User not found. Please login again.'];
        }else if(!password_verify($currentPassword, $user['password'])) {
            $response = ['success' => false, 'message' => 'Current password is incorrect'];
        }else if($newPassword != $confirmPassword) {
            $response = ['success' => false, 'message' => 'New password and confirm password do not match'];
        }else if($newPassword == $currentPassword) {
            $response = ['success' => false, 'message' => 'New password cannot be same as current password'];
        }else{
            if(changePassword($guid, $newPassword)) {
                $response = ['success' => true, 'message' => 'Password changed successfully'];
            } else {
                $response = ['success' => false, 'message' => 'Password change failed. Please try again'];
            }
        }
    }
}
echo json_encode($response);