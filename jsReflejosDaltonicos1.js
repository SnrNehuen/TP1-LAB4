/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio=0;
var intervalo;

function comenzar()
{

	var numeroColor=Math.floor(1+Math.random() * 6);
	var enviar;

	if (numeroColor==1) 
	{
		enviar="Azul";
		ColorSecreto="azul";
	}

	if (numeroColor==2) 
	{
		enviar="Amarillo";
		ColorSecreto="amarillo";
	}

	if (numeroColor==3) 
	{
		enviar="Marron";
		ColorSecreto="marron";
	}

	if (numeroColor==4) 
	{
		enviar="Verde";
		ColorSecreto="verde";
	}

	if (numeroColor==5) 
	{
		enviar="Celeste";
		ColorSecreto="celeste";
	}

	if (numeroColor==6) 
	{
		enviar="Rojo";
		ColorSecreto="rojo";
	}

	document.getElementById("Color").setAttribute("value", enviar);

	intervalo=setInterval(Temporizar, 1);
	
	
}//FIN DE LA FUNCIÓN

function Temporizar()
{
	tiempoInicio++;	
}

function Responder(colorParametro)
{
	
	if (ColorSecreto==colorParametro)
	{
		alert("Correcto, tardó "+tiempoInicio+"ms.");
		clearTimeout(intervalo);
	}

}//FIN DE LA FUNCIÓN
