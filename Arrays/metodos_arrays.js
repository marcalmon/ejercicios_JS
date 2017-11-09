/* push y pop - unshift y shift - forEach - Metodo Map*/

/*var planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno", "Plutón"];
//Formas de usar el forEach
//callback
planetas.forEach(function(){ //con su sintaxis correspondiente
	console.log("Esto es un for Each");
});

/*var metodo = planetas.forEach(function(){ //guardando el resultado en una variable

});

var myFuncion = function(){ // o declarando una funcion y llamandola dentro del forEach
	console.log("Esto es un for Each");
};

planetas.forEach(myFuncion);*/

//Metodo map - me crea un nuevo array sin tocar el original - su sintaxis es igual al forEach 
// recibe como parametro una funcion o (e,i,array).

/*var numeros = [1, 2,3,4,5,6,7];

var numerosMultiplicados = numeros.map(function(numero){
	return numero * 2;
});

console.log("array original:", numeros);
console.log("array x 2:", numerosMultiplicados);*/

/*var numeros = [];

for(var i=1; i<=500; i++){

	numeros[i]=i;
	//console.log(numeros[i]);
}

console.log(numeros);

var numerosMasDiez = numeros.map(function(numero){
	return numero + 10;
});

console.log("Array original " + numeros);
console.log("Array + 10 " + numerosMasDiez);*/

var semaforo = ["rojo", "amarillo", "verde"];

var mayusculas = semaforo.map(function(color){
	return color.toUpperCase();
});

console.log("Array original: " + semaforo);
console.log("Array en mayusculas: " + mayusculas);


