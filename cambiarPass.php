<?php
$user=Verificar();
function Verificar()
{
	include('login.php');
	if(!isset($_SESSION['login_user']))
	{
		header("location: index.php");
	}
	else
	{
		return $_SESSION['login_user'];
	}
}
include('cambiar.php');
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Sala de juegos - Cambiar Contraseña</title>

		<!--Estilos-->
		<link rel="stylesheet" type="text/css" href="estilo.css">
		<link rel="stylesheet" type="text/css" href="animacion.css">
		<!--final de Estilos-->

		<!--Lógica-Programación-->
        <!--Final de Lógica-Programación -->
		

		</head>
	<body>
		
		<div class="CajaUno animated bounceInDown">
		<h1>Cambiar Contraseña </br> Sala de Juegos </br></h1></br>
		
			<form action="cambiar.php" method="post">
			<h2>Usuario: <?php echo $user;?></h2></br>
			<input type="text" name="username" readonly value=<?php echo $user;?>>
			<h3>Nueva Contraseña:</h3>
			<input type="password" name="password" placeholder="Contraseña">
			<input type="submit" name="submit" value="Aceptar"></input>
			<!--<button  class="MiBotonUTN" type="submit" >Aceptar</button>-->
			</form>
			<br><?php
			if (isset($mensajeCambiar))
			{
				
				echo $mensajeCambiar; $mensajeCambiar=''; 
			}
			?>
		</div>
	</body>
</html>