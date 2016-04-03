<?php

if (isset($_POST['submit']))
{
	//echo "<br>is set ejecutado";
	//echo "<br>";
	$username=$_POST['username'];
	$password=$_POST['password'];
	//echo "<br>Usuario: $username  - Contraseña: $password<br>";
	//echo "<br>en isest - Usuario: "+$_POST['username']+". Contraseña: "+$_POST['password'];

	if (empty($_POST['username']) || empty($_POST['password']))
	{
		$mensaje="Debe ingresar nombre de usuario y contraseña.";
	}
	else
	{
		//Defino y descargo variables user y password - stripsplashes elimina los \ por seguridad
		$username=stripslashes($_POST['username']);
		$password=stripslashes($_POST['password']);

		//echo "<br>Usuario: $username  - Contraseña: $password<br>";

		//Creo objeto de conexión a MYSQL
		$connection = mysqli_connect("localhost", "root", "");

		//Elimino caracteres prohibidos
		$username = mysqli_real_escape_string($connection, $username);
		$password = mysqli_real_escape_string($connection, $password);

		//Selecciono BD
		mysqli_select_db($connection, "company");

		//Busco si el usuario está registrado en la BD
		$query = mysqli_query($connection, "select * from login where username='$username'");

		//Guardo el número de filas encontradas
		$rows = mysqli_num_rows($query);

		//Cuento las filas encontradas, si encuentra algo significa que el usuario ya esta registrado
		if (!$rows==0)
		{
			//Usuario ya registrado, envío mensaje de error
			$mensaje="El usuario ingresado ya existe.";

		}
		else
		{
			//Encontró un número de filas distinto de cero, por lo que el usuario no existe, procedo a registrarlo
			$query = mysqli_query($connection, "INSERT INTO `login`(`username`, `password`) VALUES ('$username','$password')");
			
			//Pruebo la insersión
			$query = mysqli_query($connection, "select * from login where password='$password' AND username='$username'");
			$rows = mysqli_num_rows($query);
			if ($rows==1)
			{
				//Correcto
				$mensaje="1";
			}
			else
			{
				//Error
				$mensaje="Error al registrar en la BD.";
			}

		}

		//Cierro la conexión
		mysqli_close($connection);
	}
}

 ?>