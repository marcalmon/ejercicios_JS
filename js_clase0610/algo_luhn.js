/*Así funciona el algoritmo de Luhn
Explicare el algoritmo de validación con un ejemplo.

Tenemos el número 49927398716.

Multiplicamos por 2 los dígitos que ocupan las posiciones pares empezando por el final:
(1×2) = 2, (8×2) = 16, (3×2) = 6, (2×2) = 4, (9×2) = 18
Sumamos los dígitos que ocupaban las posiciones impares con los dígitos de los productos obtenidos:
6 + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 4 = 70
Si el resto de dividir el total entre 10 es igual a cero, el número es correcto:
70 mod 10 = 0
Algoritmo de Luhn
 */

var num_tarjeta="36093580156761";
var is_seg_dig=false;
var total=0;

for(var i = num_tarjeta.length-1; i>=0; i--){
	var x=parseInt(num_tarjeta.charAt(i));

	if(is_seg_dig){
		
		x=x*2;

		//if(x>=10)
		if(x>9){
			x-=9;
		}
	}

	total+=x;

		//seg_dig=false;

	is_seg_dig= !is_seg_dig;
	
	/*if(total % 10===0){
		alert("bien ahi");
	}else{
		alert("mala")
	}*/	
}
//operador TERNARIO
alert(total % 10 === 0 ? "bien ahi" : "mala");