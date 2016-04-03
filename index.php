<?php
include('login.php'); // Includes Login Script

if(isset($_SESSION['login_user'])){
header("location: menu.php");
}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Sala de juegos - Login</title>

		<!--Estilos-->
		<link rel="stylesheet" type="text/css" href="estilo.css">
		<link rel="stylesheet" type="text/css" href="animacion.css">
		<!--final de Estilos-->

		<!--Lógica-Programación-->
		<script type="text/javascript" src="jsAgilidadAritmetica2.js"></script>
        <!--Final de Lógica-Programación -->
		

		</head>
	<body>
		
		<div class="CajaUno animated bounceInDown">
		<h1>Iniciar sesión </br> Sala de Juegos</h1></br>
			
			<form action="" method="post">
			<h3>Usuario:</h3>
			<input type="text" name="username" placeholder="Usuario">
			<h3>Contraseña:</h3>
			<input type="password" name="password" placeholder="Contraseña">
			<input type="submit" name="submit" value="Aceptar"></input>
			<!--<button  class="MiBotonUTN" type="submit" >Aceptar</button>-->
			</form>
			<br><?php echo $mensajeError; $mensajeError=''; ?></br></br>
			<a  class="MiBotonUTN" title="Registrarme" onclick="location.href='alta.php'" >Registrarme</a>
		</div>
		</br></br>
	</body>
</html>