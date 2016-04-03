<?php


	session_start();
	if(session_destroy()) //Eliminando sesión
	{
		header("Location: index.php"); //Redirigiendo a index
	}

?>