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

planetas.forEach((e, i, array) => {

	console.log("El planeta es ", e, "y esta ubicado en", i, " ", array);
});
