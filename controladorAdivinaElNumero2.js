AdivinaElNumero2.controller('logica',function($scope)
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
			
			if ($scope.contadorIntentos==1)
			{
				$scope.mensaje="usted es un Psíquico";
			}

			if ($scope.contadorIntentos==2)
			{
				$scope.mensaje="excelente percepción";
			}

			if ($scope.contadorIntentos==3)
			{
				$scope.mensaje="Esto es suerte";
			}

			if ($scope.contadorIntentos==4)
			{
				$scope.mensaje="Excelente técnica";
			}

			if ($scope.contadorIntentos==5)
			{
				$scope.mensaje="usted está en la media";
			}		

			if ($scope.contadorIntentos>5 && $scope.contadorIntentos<11)
			{
				$scope.mensaje="falta técnica";
			}

			if ($scope.contadorIntentos>10)
			{
				$scope.mensaje="afortunado en el amor!!";
			}

		}

		$scope.contador=$scope.contadorIntentos;

	};
});