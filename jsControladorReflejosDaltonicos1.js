ReflejosDaltonicos1.controller('logica',function($scope)
{
	$scope.numeroColor=0; 
	$scope.mensaje="";
	$scope.enviar="";
	$scope.comenzar;
	$scope.resultado=0;
	$scope.respuesta="";
	$scope.tiempoInicio=0;
	$scope.intervalo=0;
	$scope.temporizar;
	$scope.ColorSecreto="";
	$scope.colorParametro="";
	$scope.color="";

	$scope.comenzar=function()
	{

		console.log("comenzar");
		$scope.numeroColor=0; 
		$scope.mensaje="";
		$scope.enviar="";
		$scope.comenzar;
		$scope.resultado=0;
		$scope.respuesta="";
		$scope.tiempoInicio=0;
		$scope.intervalo=0;
		$scope.temporizar;
		$scope.ColorSecreto="";
		$scope.colorParametro="";
		$scope.numeroColor=Math.floor(1+Math.random() * 6);

		if ($scope.numeroColor==1) 
		{
			$scope.enviar="Azul";
			$scope.ColorSecreto="azul";
		}

		if ($scope.numeroColor==2) 
		{
			$scope.enviar="Amarillo";
			$scope.ColorSecreto="amarillo";
		}

		if ($scope.numeroColor==3) 
		{
			$scope.enviar="Marron";
			$scope.ColorSecreto="marron";
		}

		if ($scope.numeroColor==4) 
		{
			$scope.enviar="Verde";
			$scope.ColorSecreto="verde";
		}

		if ($scope.numeroColor==5) 
		{
			$scope.enviar="Celeste";
			$scope.ColorSecreto="celeste";
		}

		if ($scope.numeroColor==6) 
		{
			$scope.enviar="Rojo";
			$scope.ColorSecreto="rojo";
		}

		$scope.color=$scope.enviar;

		$scope.operador=$scope.enviar;
		$scope.intervalo=setInterval($scope.temporizar, 1);

	};

	$scope.temporizar=function()
	{

		//console.log("temporizando");
		$scope.tiempoInicio++;

	};

	$scope.responder=function(colorParametro)
	{

		//console.log("respondiendo");
		if ($scope.ColorSecreto==colorParametro)
		{
			$scope.mensaje="Correcto, tardó "+$scope.tiempoInicio+"ms.";
			clearTimeout($scope.intervalo);
		}


	};
});