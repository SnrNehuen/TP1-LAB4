/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var resultado="Empate";

function comenzar()
{
	eleccionMaquina=Math.floor(1+Math.random() * 3);
	//alert("comenzar ejecutado, eleccion maquina: "+eleccionMaquina);

}//FIN DE LA FUNCIÓN

/*
function piedra()
{
		if(eleccionMaquina==2)
		{
			resultado="Pierde";
		}

		if (eleccionMaquina==3)
		{
			resultado="Gana";
		}
	alert(resultado);
		
}//FIN DE LA FUNCIÓN
function papel()
{
		if(eleccionMaquina==3)
		{
			resultado="Pierde";
		}

		if (eleccionMaquina==1)
		{
			resultado="Gana";
		}

}//FIN DE LA FUNCIÓN
function tijera()
{
		if(eleccionMaquina==1)
		{
			resultado="Pierde";
		}

		if (eleccionMaquina==2)
		{
			resultado="Gana";
		}

}//FIN DE LA FUNCIÓN
*/

function Jugar(eleccionUsuario)
{

	var mostrarEleccionMaquina;

	if (eleccionMaquina==1) 
	{
		mostrarEleccionMaquina="Maquina: Piedra!";
	}

	if (eleccionMaquina==2) 
	{
		mostrarEleccionMaquina="Maquina: Papel!";
	}

	if (eleccionMaquina==3) 
	{
		mostrarEleccionMaquina="Maquina: Tijera!";
	}

	if(eleccionUsuario==1)
	{
		if(eleccionMaquina==2)
		{
			resultado="Ud. Pierde";
		}

		if (eleccionMaquina==3)
		{
			resultado="Ud. Gana";
		}
	}

	if(eleccionUsuario==2)
	{
		if(eleccionMaquina==3)
		{
			resultado="Ud. Pierde";
		}

		if (eleccionMaquina==1)
		{
			resultado="Ud. Gana";
		}
	}

	if(eleccionUsuario==3)
	{
		if(eleccionMaquina==1)
		{
			resultado="Ud. Pierde";
		}

		if (eleccionMaquina==2)
		{
			resultado="Ud. Gana";
		}
	}

	alert(mostrarEleccionMaquina+" "+resultado);
}