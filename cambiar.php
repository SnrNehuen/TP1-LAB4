<?php
$mensajeCambiar='';
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
		$mensajeCambiar="Debe ingresar una nueva contraseña.";
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
		if ($rows==1)
		{
			//Usuario ya registrado, procedo a cambiar la contraseña
			$query = mysqli_query($connection, "UPDATE `login` SET `password`='$password' WHERE `username`='$username'");
			//Pruebo la insersión
			$query = mysqli_query($connection, "select * from login where password='$password' AND username='$username'");
			$rows = mysqli_num_rows($query);
			if ($rows==1)
			{
				//Correcto
				$mensajeCambiar="1";
			}
			else
			{
				//Error
				$mensajeCambiar="Error al registrar en la BD.";
			}

		}
		else
		{

			//Error
			$mensajeCambiar="Error el usuario no esta en la BD.";
		}

	}

	//Cierro la conexión
	mysqli_close($connection);
	
	//sleep(5);
	if ($mensajeCambiar=="1")
	{
		echo "Contraseña cambiada correctamente, para continuar hay que loguearse de nuevo, redirigiendo en 5 segundos...";
		header("location: logout.php");
	}
	else
	{
		echo "$mensajeCambiar volviendo atras en 5 segundos...";
		header("location: cambiarPass.php");
	}
	
	
}

 ?>