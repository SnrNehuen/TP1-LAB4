AgilidadAritmetica2.controller('logica',function($scope)
{
	$scope.uno=0; 
	$scope.dos=0;
	$scope.operador=0;
	$scope.mensaje="";
	$scope.enviar="";
	$scope.comenzar;
	$scope.resultado=0;
	$scope.respuesta="";
	$scope.mensaje="";
	$scope.temporizador=6;
	$scope.intervalo=0;
	$scope.temporizadorUsuario="";
	$scope.temporizar;

	$scope.comenzar=function()
	{

		//console.log("comenzar");
		$scope.uno=0; 
		$scope.dos=0;
		$scope.operador=0;
		$scope.mensaje="";
		$scope.enviar="";
		$scope.comenzar;
		$scope.resultado=0;
		$scope.respuesta="";
		$scope.mensaje="";
		$scope.temporizador=6;
		$scope.intervalo=0;
		$scope.temporizadorUsuario="";
		$scope.temporizar;
		//alert("hola");

		$scope.uno=Math.floor(1+Math.random() * 10);
		$scope.dos=Math.floor(1+Math.random() * 10);
		$scope.operador = Math.floor(1+Math.random() * 4);

		if ($scope.operador==1) 
		{
			$scope.enviar="Suma +";
			$scope.resultado=$scope.uno+$scope.dos;
		}

		if ($scope.operador==2) 
		{
			$scope.enviar="Resta -";
			$scope.resultado=$scope.uno-$scope.dos;
		}

		if ($scope.operador==3) 
		{
			$scope.enviar="División /";
			$scope.resultado=$scope.uno/$scope.dos;
		}

		if ($scope.operador==4) 
		{
			$scope.enviar="Multiplicación *";
			$scope.resultado=$scope.uno*$scope.dos;
		}

		$scope.operador=$scope.enviar;
		$scope.intervalo=setInterval($scope.temporizar, 1000);

	};

	$scope.temporizar=function()
	{

		//console.log("temporizando");
		$scope.temporizador--;

		if ($scope.temporizador>=0)
		{
			$scope.temporizadorUsuario=$scope.temporizador;

			if ($scope.temporizador==0)
			{
				clearTimeout($scope.intervalo);
				$scope.$apply();
				$scope.responder();
			}
		}	

		$scope.$apply();

	};

	$scope.responder=function()
	{

		//console.log("respondiendo");
		if ($scope.resultado==$scope.respuesta)
		{
			$scope.mensaje="Correcto";
		}
		else
		{
			$scope.mensaje="Incorrecto";
		}

	};
});