//Métodos de arrays - /* push y pop - unshift y shift - forEach*/
// los métodos están ligados a un objeto y las funciones no.

var planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno", "Plutón"];
//forEach - for propio de los arrays - acepta hasta 3 parametros

/*planetas.forEach(function(e, i, array)){ - elemento, indice, array
	console.log("Uso el for Each");
};*/

/*var funcion = function(planeta){
	console.log(planeta);
};

planetas.forEach(function(planeta, indice){

	console.log("El planeta es", planeta, "y esta ubicado en", indice);
});*/

planetas.forEach((e,i,array) => {// EcmaScript

	console.log("El planeta es ", e, "y esta ubicado en", i, " ", array);
});

