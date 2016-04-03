<?php 
//echo "hola login";

//echo $_POST['submit'];
//echo "<br>en isest - Usuario: "+$_POST['username']+". Contraseña: "+$_POST['password'];

//Inicio session
session_start();

//Inicio mensaje error
$mensajeError='';
//echo "$mensajeError<br>";

//Valido que se hayan ingresado los dos datos
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
		$mensajeError="Debe ingresar nombre de usuario y contraseña.";
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
		$query = mysqli_query($connection, "select * from login where password='$password' AND username='$username'");

		//Cierro la conexión
		mysqli_close($connection);

		//Guardo el número de filas encontradas
		$rows = mysqli_num_rows($query);

		//Cuento las filas encontradas, si encuentra solo una significa que los datos coinciden
		if ($rows==1)
		{
			//Los datos coinciden, inicio sesión
			$_SESSION['login_user']=$username;

			//Redirecciono a la página principal
			header("location: menu.php");
		}
		else
		{
			//Encontró un número de filas distinto de uno, por lo que los datos no coinciden, envío mensaje de error
			$mensajeError="Usuario o contraseña incorrectos";
			//header("location: index.php");
		}
	}
}

 ?>