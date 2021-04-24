<?php
//if (file_exists("vendor/autoload.php")) {
//    require_once "vendor/autoload.php";
//}

//$output = new Cowglow\Backend\Client($_ENV["SECRET_KEY"]);

header("Content-Type: application/json; charset=UTF-8");

echo json_encode(['foo'=>'bar']);
//echo json_encode($output->Render());
