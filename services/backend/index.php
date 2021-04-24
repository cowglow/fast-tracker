<?php
//if (file_exists("vendor/autoload.php")) {
//    require_once "vendor/autoload.php";
//}

//$output = new Cowglow\Backend\Client($_ENV["SECRET_KEY"]);

$HOST = 'db';
$USER = 'user';
$PASSWORD = 'user';
$DATABASE = "fast-tracking-db";
$PORT = 3306;

$connection = new mysqli($HOST, $USER, $PASSWORD, $DATABASE, $PORT);
$message = "Successfully connected to MySQL";
if($connection->connect_error){
    $message = "Connection Failed: " . $connection->connect_error;
}

//header("Content-Type: application/json; charset=UTF-8");
echo json_encode(['foobar' => $message]);
//echo json_encode($output->Render());
