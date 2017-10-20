//Ejercicios 1
/*var array=[];
var n=10;

for(var i=0; i<n; i++){
	array[i]= i;
	console.log(array[i]);

}*/

//Ejercicios 3

/*var x=[10, 24, 36, 7, 98, 11, 14, 20];
var mayor=0;

for(var i=0; i < x.length-1; i++){

	if(x[i]>x[i+1]){
		mayor=x[i];
	}else{
		mayor=x[i+1];
	}
}
console.log(mayor);*/

/*var pos=0;
for(var i=0; i<x.length; i++){

	if(x[i]>mayor){
		mayor=x[i];
		pos=i;
	}
}

console.log("El mayor es: " + mayor + " y esta en la posición: " + pos);*/

/*var x=[10, 24, 36, 7, 98, 11, 14, 20, 98, 30, 98];
var mayor=0;
var pos=0;
var cant=0;

for(var i=0; i<x.length; i++){

	if(x[i]>=mayor){
		
		if(x[i]==mayor){
			cant++;
		}else{
			cant=1;
		}
		mayor=x[i];
	}
}

//console.log("El mayor es: " + mayor + " y esta en la posición: " + pos);
console.log("El mayor es: " + mayor);
console.log("cantidad: "+ cant)*/

//Ejercicio 6
var x=["a","l","f","a"];
var y=["p","l","f","i","j","o","r"];
var distinto=false;
var xL=x.length;
var yL=y.length;
var N;//array corto
var M;//array largo

if(xL==yL){

	for(var i=0; i<x.length; i++){

		if(x[i] != y[i]){
			distinto=true;
		}
	}

}else{

	if(xL > yL){
		console.log("X es mas largo");
		N=yL;
		M=xL;
	}else{
		N=xL;
		M=yL;
		console.log("Y es el mas largo");
	}
}

var cont=0;
var comun=[];

for(var i=0; i<N; i++){

	for(var j=0; j<M; j++){

		if(y[j]!=comun[i]){

			if(x[i]==y[j]){
			cont++;
			comun[i]=y[j];
			}			

		}	
	}
	console.log(comun[i]);
}
console.log(cont);

//Ejercicio 7

/*var datos1=["Fido", "Gomez", 26, 15000.78, true];
var datos2=["Gervasio", "Fernandez", 32, 28.550,false];
var n=datos1.length;*/

//console.log(datos1.toString()); este método me muestra todo el vector como una
//cadena de caracteres separado por comas

/*var i;

for(i=0; i<datos1.length; i++){

	if(Number.isInteger(datos1[i]) && Number.isInteger(datos2[i])){

		if(datos1[i]>datos2[i]){
			console.log("Fido es mayor");
		}else{
			console.log("Fido es menor");
		}
	}

	if(typeof(datos1[i]) == "boolean" && typeof(datos2[i])){

		if(datos1[i]){ 
			console.log("Casado");
		}else{
			console.log("Soltero");
		}

		if(datos2[i]===true){
			console.log("Casado");
		}else{
			console.log("Soltero");
		}
	}

	if(typeof(datos1[i]))
}*/


