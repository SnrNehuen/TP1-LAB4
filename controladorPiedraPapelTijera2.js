

miAplicacion.controller('control',function($scope){

	$scope.eleccionMaquina="";
	$scope.comenzar;
	$scope.resultado="";
	$scope.mostrarEleccionMaquina="";
	$scope.ganadas=0;
	$scope.perdidas=0;
	$scope.empatadas=0;
	$scope.imagenEleccionMaquina="imagenes/interrogacion.jpg";
	console.log("hola");

	//$scope.perdidas=20;
	$scope.Jugar=function(eleccionUsuario){

		//console.log("Jugar(2)");
		$scope.comenzar();
	if ($scope.eleccionMaquina==1) 
	{
		$scope.imagenEleccionMaquina="imagenes/piedra.jpg";
		$scope.mostrarEleccionMaquina="Maquina: Piedra!";
		//document.getElementById("imagenEleccion").setAttribute("src", "imagenes/piedra.jpg");
	}

	if ($scope.eleccionMaquina==2) 
	{
		$scope.imagenEleccionMaquina="imagenes/papel.jpg";
		$scope.mostrarEleccionMaquina="Maquina: Papel!";
		//document.getElementById("imagenEleccion").setAttribute("src", "imagenes/papel.jpg");
	}

	if ($scope.eleccionMaquina==3) 
	{
		$scope.imagenEleccionMaquina="imagenes/tijera.jpg";
		$scope.mostrarEleccionMaquina="Maquina: Tijera!";
		//document.getElementById("imagenEleccion").setAttribute("src", "imagenes/tijera.jpg");
	}

	if (eleccionUsuario==$scope.eleccionMaquina)
	{
		$scope.resultado="Empate"
	}

	if(eleccionUsuario==1)
	{
		if($scope.eleccionMaquina==2)
		{
			$scope.resultado="Ud. Pierde";
		}

		if ($scope.eleccionMaquina==3)
		{
			$scope.resultado="Ud. Gana";
		}
	}

	if(eleccionUsuario==2)
	{
		if($scope.eleccionMaquina==3)
		{
			$scope.resultado="Ud. Pierde";
		}

		if ($scope.eleccionMaquina==1)
		{
			$scope.resultado="Ud. Gana";
		}
	}

	if(eleccionUsuario==3)
	{
		if($scope.eleccionMaquina==1)
		{
			$scope.resultado="Ud. Pierde";
		}

		if ($scope.eleccionMaquina==2)
		{
			$scope.resultado="Ud. Gana";
		}
	}

	$scope.mostarResultado();

	};

	$scope.comenzar=function(){

		$scope.eleccionMaquina=Math.floor(1+Math.random() * 3);

	}

	$scope.mostarResultado=function(){

	//console.log($scope.resultado);
	if ($scope.resultado=="Ud. Gana") 
	{
		
		//console.log($scope.resultado);
		//console.log($scope.ganadas);
		$scope.ganadas++;
		//console.log($scope.ganadas);
		//$scope.ganadas="HOLA";
		//document.getElementById("ganadas").setAttribute("value", "Ganadas: "+ContadorDeGanadas);
	}

	if ($scope.resultado=="Ud. Pierde") 
	{
		//console.log($scope.resultado);
		$scope.perdidas++;
		//document.getElementById("perdidas").setAttribute("value", "Perdidas: "+ContadorDePerdidas);
	}

	if ($scope.resultado=="Empate") 
	{
		//console.log($scope.resultado);
		$scope.empatadas++;
		//document.getElementById("empatadas").setAttribute("value", "Empatadas: "+ContadorDeEmpates);
	}

	alert($scope.mostrarEleccionMaquina+" "+$scope.resultado);
	$scope.comenzar();
	};

});
