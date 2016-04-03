

PiedraPapelTijera1.controller('logica',function($scope)
{

	$scope.eleccionMaquina="";
	$scope.resultado="";
	$scope.comenzar;
	$scope.imagenEleccionMaquina="imagenes/interrogacion.jpg";
	//console.log("inicio");

	$scope.comenzar=function()
	{

		//console.log("comenzar");
		$scope.imagenEleccionMaquina="imagenes/interrogacion.jpg";
		$scope.eleccionMaquina=Math.floor(1+Math.random() * 3);

	}

	//$scope.perdidas=20;
	$scope.piedra=function()
	{

		$scope.comenzar();

		if($scope.eleccionMaquina==1)
		{
			$scope.imagenEleccionMaquina="imagenes/piedra.jpg";
			$scope.resultado="Empate";
		}

		if($scope.eleccionMaquina==2)
		{
			$scope.imagenEleccionMaquina="imagenes/papel.jpg";
			$scope.resultado="Ud. Pierde";
		}

		if ($scope.eleccionMaquina==3)
		{
			$scope.imagenEleccionMaquina="imagenes/tijera.jpg";
			$scope.resultado="Ud. Gana";
		}

	};

		$scope.papel=function()
	{

		$scope.comenzar();

		if($scope.eleccionMaquina==1)
		{
			$scope.imagenEleccionMaquina="imagenes/piedra.jpg";
			$scope.resultado="Ud. Gana";
		}

		if($scope.eleccionMaquina==2)
		{
			$scope.imagenEleccionMaquina="imagenes/papel.jpg";
			$scope.resultado="Empate";
		}

		if ($scope.eleccionMaquina==3)
		{
			$scope.imagenEleccionMaquina="imagenes/tijera.jpg";
			$scope.resultado="Ud. Pierde";
		}

	};

		$scope.tijera=function()
	{

		$scope.comenzar();

		if($scope.eleccionMaquina==1)
		{
			$scope.imagenEleccionMaquina="imagenes/piedra.jpg";
			$scope.resultado="Ud. Pierde";
		}

		if($scope.eleccionMaquina==2)
		{
			$scope.imagenEleccionMaquina="imagenes/papel.jpg";
			$scope.resultado="Ud. Gana";
		}

		if ($scope.eleccionMaquina==3)
		{
			$scope.imagenEleccionMaquina="imagenes/tijera.jpg";
			$scope.resultado="Empate";
		}

	};

});
