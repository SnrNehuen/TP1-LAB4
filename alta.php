<?php
include('registrar.php'); // Includes Login Script


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
		<h1>Registrar nuevo usuario </br> Sala de Juegos</h1></br>
			
			<form action="" method="post">
			<h3>Usuario:</h3>
			<input type="text" name="username" placeholder="Usuario">
			<h3>Contraseña:</h3>
			<input type="text" name="password" placeholder="Contraseña">
			<input type="submit" name="submit" value="Registrarme"></input>
			<!--<button  class="MiBotonUTN" type="submit" >Aceptar</button>-->
			</form>
			<br><?php
			if (isset($mensaje))
			{
				if ($mensaje=="1")
				{
					echo "<h3>Usuario registrado correctamente</h3></br><a href=index.php>Ir a Iniciar sesión</a></br></br>";
				}
				else
				{
					echo "$mensaje";
				}
			}
			?>
		</div>
	</body>
</html>