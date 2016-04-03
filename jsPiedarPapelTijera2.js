/*Ahora debemos informar cuantas veces se ganó,
 perdió o empató desde la última recarga de página.*/

var eleccionMaquina;
var resultado;
var mostrarEleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 
	eleccionMaquina=Math.floor(1+Math.random() * 3);

}//FIN DE LA FUNCIÓN
function piedra()
{
	


}//FIN DE LA FUNCIÓN
function papel()
{
	

}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN

function Jugar(eleccionUsuario)
{

	if (eleccionMaquina==1) 
	{
		mostrarEleccionMaquina="Maquina: Piedra!";
		document.getElementById("imagenEleccion").setAttribute("src", "imagenes/piedra.jpg");
	}

	if (eleccionMaquina==2) 
	{
		mostrarEleccionMaquina="Maquina: Papel!";
		document.getElementById("imagenEleccion").setAttribute("src", "imagenes/papel.jpg");
	}

	if (eleccionMaquina==3) 
	{
		mostrarEleccionMaquina="Maquina: Tijera!";
		document.getElementById("imagenEleccion").setAttribute("src", "imagenes/tijera.jpg");
	}

	if (eleccionUsuario==eleccionMaquina)
	{
		resultado="Empate"
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

	mostarResultado();
}

function mostarResultado()
{

	if (resultado=="Ud. Gana") 
	{
		ContadorDeGanadas++;
		document.getElementById("ganadas").setAttribute("value", "Ganadas: "+ContadorDeGanadas);
	}

	if (resultado=="Ud. Pierde") 
	{
		ContadorDePerdidas++;
		document.getElementById("perdidas").setAttribute("value", "Perdidas: "+ContadorDePerdidas);
	}

	if (resultado=="Empate") 
	{
		ContadorDeEmpates++;
		document.getElementById("empatadas").setAttribute("value", "Empatadas: "+ContadorDeEmpates);
	}

	alert(mostrarEleccionMaquina+" "+resultado);
	comenzar();

}