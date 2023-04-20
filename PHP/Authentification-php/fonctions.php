<?php

function register($pseudo, $pass)
{	
	try
    {
    $pdo = new PDO("mysql:host=localhost;dbname=test","root");
    }
    catch(PDOException $e) 
    {
    die("Erreur de connexion : " . $e->getMessage());
    }

	$pdo->exec("INSERT INTO utilisateurs(pseudo, pass) VALUES ('" . $pseudo . "', '" . $pass . "')");

	unset($pdo);
}

function authentifier($pseudo){
	
	try
    {
    $pdo = new PDO("mysql:host=localhost;dbname=test","root");
    }
    catch(PDOException $e) 
    {
    die("Erreur de connexion : " . $e->getMessage());
    }


    $sql = "SELECT pass FROM utilisateurs WHERE pseudo='".$pseudo."'";
	$sth = $pdo->query($sql);
	$resultat = $sth->fetch(PDO::FETCH_ASSOC);
	return $resultat['pass'];

    unset($pdo);
}

function identifier($pseudo){

	try
    {
    $pdo = new PDO("mysql:host=localhost;dbname=test","root");
    }
    catch(PDOException $e) 
    {
    die("Erreur de connexion : " . $e->getMessage());
    }

    $sql = "SELECT id FROM utilisateurs WHERE pseudo='".$pseudo."'";
	$sth = $pdo->query($sql);
	$resultat = $sth->fetch(PDO::FETCH_ASSOC);
    return $resultat['id'];

	unset($pdo);
}

?>