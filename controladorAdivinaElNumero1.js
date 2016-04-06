AdivinaElNumero1.controller('logica',function($scope)
{
	$scope.numeroSecreto=0; 
	$scope.contadorIntentos=0;
	$scope.numeroIngresado=0;
	$scope.mensaje="";
	$scope.comenzar;

	$scope.comenzar=function()
	{

		//console.log("comenzar");
		$scope.numeroSecreto=Math.floor(1+Math.random() * 100);
		$scope.contador=0;
		$scope.contadorIntentos=0;
		$scope.numero="";
		$scope.mensaje="";
		alert("El numero secreto es: "+$scope.numeroSecreto);
		//alert("hola");

	};

	$scope.verificar=function()
	{

		//document.getElementsByTagName("INPUT")[0].setAttribute("type", "button");
		//$scope.comenzar();
		$scope.numeroIngresado=$scope.numero;
		$scope.contadorIntentos=$scope.contador;
		$scope.contadorIntentos++;
		//alert(numero);

		if ($scope.numeroIngresado > $scope.numeroSecreto)
		{
			$scope.mensaje="Se pasó...";
		}

		if ($scope.numeroIngresado < $scope.numeroSecreto)
		{
			$scope.mensaje="Falta...";
		}

		if ($scope.numeroIngresado == $scope.numeroSecreto)
		{
			$scope.mensaje="Usted es un ganador!!! y en solo "+$scope.contadorIntentos+" intentos";
		}

		$scope.contador=$scope.contadorIntentos;

	};
});