/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
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

}//FIN DE LA FUNCIÓN

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
