/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador=6;
var intervalo;
function comenzar()
{
	var uno=Math.floor(1+Math.random() * 10);
	var dos=Math.floor(1+Math.random() * 10);
	var operador = Math.floor(1+Math.random() * 4);
	var enviar;

	if (operador==1) 
	{
		enviar="Suma +";
		respuesta=uno+dos;
	}

	if (operador==2) 
	{
		enviar="Resta -";
		respuesta=uno-dos;
	}

	if (operador==3) 
	{
		enviar="División /";
		respuesta=uno/dos;
	}

	if (operador==4) 
	{
		enviar="Multiplicación *";
		respuesta=uno*dos;
	}

	document.getElementById("Operador").setAttribute("value", enviar);
	document.getElementById("PrimerNumero").setAttribute("value", uno);
	document.getElementById("SegundoNumero").setAttribute("value", dos);



	intervalo=setInterval(Temporizar, 1000);
	
	
}//FIN DE LA FUNCIÓN

function Temporizar()
{
	temporizador--;

		if (temporizador>=0)
		{
			document.getElementById("Temporizador").setAttribute("value", temporizador);

			if (temporizador==0)
			{
				clearTimeout(intervalo);
				Responder();
			}
		}	

	//clearInterval(intervalo);
}

function Responder()
{
	if (respuesta==document.getElementById("Respuesta").value)
	{
		alert("Correcto");
	}
	else
	{
		alert("Incorrecto");
	}

}//FIN DE LA FUNCIÓN
