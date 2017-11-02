//abc original
// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
//abc desplazado
// W X Y Z A B C D E F G H I J K L M N O P Q R S T U V  

var abc=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var tuv=["T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S"];
var palabra=["H", "O", "L", "A"];
var pal_cifrada=[];

/*for (var i=0; i<palabra.lenght; i++){

	console.log(palabra[i]);

	for(var j=0; j<abc.lenght; j++){

		if (palabra[i]==abc[j]){

			pal_cifrada[i]=tuv[j];

		}	
	}

	console.log("La palabra cifrada es: " + pal_cifrada[i]);
}

/*for(var i=0; i<50; i++){

	 console.log(i + " : " + abc[i%abc.length]);
}*/

var abcDesplazado=[];

var n = 6;

for (var i=0; i<abc.length; i++){
	abcDesplazado[(i+n) % abc.length] = abc[i];

}

console.log(abcDesplazado);

var mensaje = "MENSAJITO";
var mens_encrip = "";

for (var i=0; i<mensaje.length; i++){
	var idxCaracter =  abc.indexOf(mensaje[i]);
	mens_encrip += abcDesplazado[idxCaracter];
	console.log(mensaje);

	/*for(var j=0; j< abc.length; j++){

		if(mensaje[i]===abc[j]){

			mens_encrip += abcDesplazado[j];
		}
	}*/
}

console.log(mens_encrip);

var mens_desencrip= "";

for (var i=0; i<mens_encrip.length; i++){

	var idxCaracter =  abcDesplazado.indexOf(mens_encrip[i]);

	mens_desencrip += abc[idxCaracter];

}

console.log(mens_desencrip);