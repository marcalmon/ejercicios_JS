var random = Math.floor(Math.random()*10);
console.log(random);

function randomHalloween(){
	var posicion = Math.floor((Math.random() * (disfraces.length-1)));

	return disfraces[posicion];
};
