<?php 
session_start ();

include('fonctions.php');

if(!isset($_SESSION['pseudo']))
{
    header('Location: connexion.php');
}

?>


<!DOCTYPE HTML>

<html>

<head>
    <title>Accueil</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <style>
        
    .row {
        margin-top:30px;
    }

    .bienvenue {
    padding:12px;
    height:50px;
    font-weight:bold;
    }
    
    h2{
        text-align:center;
    }    
    
    .log {
    padding-top:15px;
    height:50px;
    text-align:right;
    }

    </style>
</head>

<body>


<div class="container">

  <div class="row">

  <div class="col-sm-4 bienvenue">
  <?php echo "Bienvenue " .$_SESSION['pseudo'];  ?>
  </div>

  <div class="col-sm-4">
  </div>

  <div class="col-sm-4 log">
<a href="deconnexion.php">Se déconnecter</a>
  </div>

  
</div>
</div>



<div class="container">
  <div class="row">
    <div class="col-sm-12">
    <h2>Nous sommes heureux de vous revoir.</h2>
</div>
</div>
</div>


</body>

</html>
