<?php
include('login.php');

if(!isset($_SESSION['login_user']))
{
	header("location: index.php");
}
else
{
	$user=$_SESSION['login_user'];
}

?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Perfil de <?php echo "$user";?></title>

		<!--Estilos-->
		<link rel="stylesheet" type="text/css" href="estilo.css">
		<link rel="stylesheet" type="text/css" href="animacion.css">
		<!--final de Estilos-->

		<!--Lógica-Programación-->

        <!--Final de Lógica-Programación -->
		

		</head>
	<body>
		
		<div class="CajaUno animated bounceInDown">
		<h1>Perfil de <?php echo "$user";?></h1></br>
			
			<form action="" method="post">
			<h3>Estadísticas:</h3></br>
			<a  class="MiBotonUTN" title="Cambiar contraseña" onclick="location.href='cambiarPass.php'" >Cambiar contraseña</a>
			<a  class="MiBotonUTN" title="Ver estadísticas" onclick="location.href='estadisticas.php'" >Ver estadísticas</a>
			<a  class="MiBotonUTN" title="Ir a menú principal" onclick="location.href='menu.php'" >Ir a menú principal</a>
			</br>
			<a href=traerEstadisticas.php>stats</a>
			<!--
			<input type="text" name="username" placeholder="Usuario">
			<input type="text" name="password" placeholder="Contraseña">
			<input type="submit" name="submit" value="Aceptar"></input>
			<button  class="MiBotonUTN" type="submit" >Aceptar</button>-->
			</form>
			<br><?php echo $mensajeError; $mensajeError=''; ?>
		</div>
	</body>
</html>