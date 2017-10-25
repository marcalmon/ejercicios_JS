var nombres = "Nemo";
var nombres=["Lala", "Po", "Dipsy", "Fido"];

function buscandoANemo(nombre, nombres){


	for (var i=0; i<nombres.length; i++){

		if(nombre==nombres[i]){

			return true;

		}
	}

	return false;
}

if (buscandoANemo(nombre, nombres)==true){

	console.log("Encontré a Nemo");
}