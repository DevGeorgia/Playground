<?php 
session_start ();

include('fonctions.php');
	
	// Si l'utilisateur est déjà connecté
    if(isset($_SESSION['pseudo']))
        header('Location: home.php');

	// Si l'utilisateur a déjà un cookie et que les identifiants sont bons :
	if (isset($_COOKIE['pseudo']) && isset($_COOKIE['pass']))
	{   
        $login_valide = $_POST['pseudo'];
        $pwd_valide = authentifier($_POST['pseudo']);
        
		if ($_COOKIE['pseudo'] == $login_valide &&	$_COOKIE['pass'] == $pwd_valide)
		{
			$_SESSION['utilisateur'] = $_POST['pseudo'];
			
			header('Location: home.php');
		}
	}


	// Si le formulaire a été envoyé
	if (isset($_POST['connexion']))
	{
        
        $login_valide = $_POST['pseudo'];
        $pwd_valide = authentifier($_POST['pseudo']);

		// On teste si les identifiants sont corrects
		if ($_POST['pseudo'] == $login_valide && $_POST['pass'] == $pwd_valide)
		{
			// Connexion réussie
			if ($_POST['remember'] == "on")
			{
                $time_expire = time() + 30 * 24 * 3600;
                setcookie('pseudo', $pseudo, $time_expire, null, null, false, true);
                setcookie('pass', $pass, $time_expire, null, null, false, true);
			}
			
			$_SESSION['pseudo'] = $_POST['pseudo'];
			
			header('Location: home.php');
			
		} else {
			// Connexion échouée
			$erreur = true;
		}
	}


?>

<!doctype html>

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

    input {
        margin:10px;
    }

    form {
        width:65%;
    }

    .erreur {
        color:red;
    }

    </style>
</head>

<body>


<div class="container">
    <div class="row">
        <div class="col-sm-4"> </div>
        <div class="col-sm-4"></div>
        <div class="col-sm-4"></div>
   </div>



    <div class="row">
  
       
        <div class="col-sm-6">
        
        <form action="" method="POST" >
            <fieldset>
            <legend>Inscription</legend>
            <div class="form-group">
            <label for="pseudo">Pseudo :</label>
            <input type="text" name="pseudo" id="pseudo" class="form-control" required />
            <label for="pass">Mot de passe :</label>
            <input type="password" name="pass" id="pass" class="form-control" required />
            <!-- <label for="email">Email :</label> 
            <input type="email" name="mail" id="mail" class="form-control" required /> -->
             <br/>
            <input type="submit" name="register" class="btn-primary"/>
            </div>
            </fieldset>
            </form>
            <?php 
                if(isset($_POST['register']))
                {
                    if(isset($_POST['pseudo']) AND isset($_POST['pass']))
                    {        
                        if(identifier($_POST['pseudo'])==NULL)
                        {
                            register($_POST['pseudo'], $_POST['pass']);
                            echo "Inscription effectuée, vous pouvez vous connecter.";
                        }
                        else 
                        {
                        echo "Ce pseudo existe déjà.";
                        }
                    }
                    else 
                    {
                    echo "Merci de renseigner tous les champs.";
                    }
               }  
                
            ?>
        </div>
        
        
        <div class="col-sm-6">
        <form action="" method="POST" >
            <fieldset>
            <legend>Déjà inscrit ? Connectez-vous.</legend>
            <div class="form-group">
            <label for="pseudo">Pseudo :</label>
            <input type="text" name="pseudo" id="pseudo" class="form-control" required />
            <label for="pass">Mot de passe :</label>
            <input type="password" name="pass" id="pass" class="form-control" required />
            <input type="checkbox" name="remember" id="remember" />
            <label for="remember">Se souvenir de moi</label><br/>
            <input type="submit" name="connexion" class="btn-primary"/>
                <div class="erreur">
                <?php 
                if (isset($_POST['connexion']))
                {
                    if($erreur=true)
                {
                        echo "Login ou mot de passe incorrect";
                }
                }
                
                ?>
                </div>
            </div>
            </fieldset>
        </form>
        </div>
       
    </div>
            
</div>

</body>

</html>
