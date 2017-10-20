var numeros = [6, 5, 3, 1, 8, 7, 2, 4];

var varTemp=0;
var swap=true;

for(var j=0; j<numeros.length && swap; j++){

	swap=false;

	for(var i=0; i<numeros.length-j; i++){
		if(numeros[i]>numeros[i+1]){
			varTemp=numeros[i+1];
			numeros[i+1]=numeros[i];
			numeros[i]=varTemp;

			swap=true;
		}
	}	
}

console.log(numeros);

/*console.log(numeros.sort());//el sort me sirve para ordenar de menor a mayor

var num=[4,2];
//1. guardo en un temporal el numero a pisar
var numTemp=num[0];
//2. piso el 1er numero
num[0]=num[1];
//3. piso el 2do numero la var temp
num[1]=numTemp;
console.log(num);*/