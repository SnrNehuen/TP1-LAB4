/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(1+Math.random() * 100); 
	alert(numeroSecreto);
	

}

function verificar()
{
	//document.getElementsByTagName("INPUT")[0].setAttribute("type", "button");
	var numero;
	numero=document.getElementById("numero").value;
	contadorIntentos++;
	//alert(numero);

	if (numero > numeroSecreto)
	{
		alert("Se pasó...");
	}

	if (numero < numeroSecreto)
	{
		alert("Falta...");
	}

	if (numero == numeroSecreto)
	{
		alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
	}

	//alert(contadorIntentos);
	//document.getElementById("intentos")[0].setAttribute("readonly", "");
	//alert("read only borrado?");
	//var textnode = document.createTextNode(contadorIntentos);
	//alert("mostrando text node: "+textnode);
	document.getElementById("intentos").setAttribute("value", contadorIntentos);
	//alert("contador cambiado?");
	//alert(document.getElementById("intentos").value);
	//document.getElementsByTagName("INPUT")[1].setAttribute("value", contadorIntentos);
}

