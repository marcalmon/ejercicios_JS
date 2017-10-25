/*var base;
var potencia;

function potencia(base, exponente){

	var resultado = 1;

	//para el valor de exponente = 0 
	for(var i=0; i<exponente; i++){

		resultado = resultado * base;
	}

	return resultado;
}

console.log(potencia(2, 0));*/

/*var numero;

function primos(numero){

	var primo;
	var cont=0;

	for(var i=1; i<=numero; i++){

		if(numero%i==numero || numero%i==0){

			cont=cont + 1;

			console.log(cont);

			if(cont>2){

				return primo = false;

			}
		}
		
	}

	return primo=true;
}

console.log(primos(97));*/


/*var random = Math.floor(Math.random()*10);
console.log(random);*/

/*function randomHalloween(){
	var posicion = Math.floor((Math.random() * (disfraces.length-1)));

	return disfraces[posicion];
};*/

function primos(N){

	/*for(var i=N-1; i>1; i--){
		var x = N % i;

		if(x == 0){
			return false;
		}
	}*/

	var i=2;

	do{

		var x = N % i;

		if(x == 0){
			return false;
		}

		i++;

	}while((i>1) && (i<N))

	return true;
}

console.log(primos(8));

