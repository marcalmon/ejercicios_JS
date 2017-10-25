/*function nombreFuncion(x, y){
	//sentencias
}*/

/*function mostrar(nombre, apellido){

	console.log(nombre + apellido);
}

mostrar("Mariana", "Calmon");*/

/*function fibonacci(mes){

	var n1 = 0;
	var n2 = 1;
	var n3;

	for(var i = 0; i <= mes; i++){

		n3 = n1 + n2;
		n1=n2;
		n2=n3

		console.log(n3);
	}

	return n3;	
}

console.log(fibonacci(8));*/

/*function fibonacci(n){

	var x = 1;

	for (var i = 0; i < n; i++){

		x=fibonacci(i-1) + fibonacci(i-2);
	}

	console.log(x);

	return x;
}

console.log(fibonacci(7));*/

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(7))