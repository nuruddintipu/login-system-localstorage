<?php
require_once '../vendor/autoload.php';

use Ramsey\Uuid\Uuid;
function generateGUID() {
    $uuid = Uuid::uuid4();
    return $uuid->toString();
}


function getUserByUuid($uuid) {
    $users = include 'userData.php';
    $users = $users['users'];
    foreach ($users as $user) {
        if ($user['uuid'] == $uuid) {
            return $user;
        }
    }
    return null;
}

function getUserByEmail($email) {
    $userData = include 'userData.php';
    $users = $userData['users'];
    foreach ($users as $user) {
        if ($user['email'] == $email) {
            return $user;
        }
    }
    return null;
}

function registerUser($email, $password) {
    $usersData = include 'userData.php';

    if (!isset($usersData['users']) || !is_array($usersData['users'])) {
        $usersData['users'] = [];
    }

    if (getUserByEmail($email)) {
        return false;
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $guid = generateGUID();

    $newUser = [
        'guid' => $guid,
        'email' => $email,
        'password' => $hashedPassword
    ];

    $usersData['users'][] = $newUser;

    $newContent = '<?php return ' . var_export($usersData, true) . ';';
    file_put_contents('userData.php', $newContent);

    return true;
}