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

		//Creo objeto de conexión a MYSQL
		$connection = mysqli_connect("localhost", "root", "");

		//Selecciono BD
		mysqli_select_db($connection, "company");

		//Busco si el usuario está registrado en la BD
		$query = mysqli_query($connection, "select * from login where username='$user'");

		//Cierro la conexión
		mysqli_close($connection);

		//Guardo el número de filas encontradas
		$rows = mysqli_num_rows($query);

		//Cuento las filas encontradas, si encuentra solo una significa que los datos coinciden
		if ($rows==1)
		{
			//Los datos coinciden, inicio sesión
			echo "$query";

			//Redirecciono a la página principal
			
		}
		else
		{
			//Encontró un número de filas distinto de uno, por lo que los datos no coinciden, envío mensaje de error
			$mensajeError="Usuario o contraseña incorrectos";
			//header("location: index.php");
		}



 ?>