<?php
include 'index.phtml';
$error = false;
$message = '';

    if (!empty($_POST)) {

      $pdo = new PDO('mysql:host=localhost;dbname=test', 'root', '');
      $pdo->exec('SET NAMES UTF8');

  var_dump($_POST);

      $query = $pdo->prepare
      	(
      	   'SELECT *
            FROM users
            WHERE login = ?'
      	);

      	$query->execute( [ $_POST['login']] );
        $user = $query->fetch(PDO::FETCH_ASSOC);

        var_dump($user);

        if ($user == false) {

          $error = true;
  		    $message = "your login or password is incorrect";

        } else if (password_verify($_POST['password'], $user['password']) == true ) {

          $_POST['login'] = $user['login'];
          $_POST['password'] = $user['password'];          

      }

?>
