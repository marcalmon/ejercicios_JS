/*- preguntoPosicion(x,y)
- busco el valor de la posicion 
- determino tipo de barco (1,2,3,4)
- determino hundido o tocado
- contador de hundidos
- contador de tocados

x e y*/

var barcos = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  			  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
			  [0, 2, 2, 0, 0, 0, 0, 0, 0, 0], 
			  [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 3, 0], 
              [0, 0, 0, 0, 0, 0, 0, 0, 3, 0], 
              [0, 0, 4, 4, 4, 4, 0, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

var contHundidos = 0;

function jugarBN(x,y){

	var x = prompt("Ingrese una fila de 0 a 9");
    var y = prompt("Ingrese una columna de 0 a 9");

    var contT2 = 0;
	var contT3 = 0;
	var contT4 = 0;

	if(barcos[x][y] == 0 || barcos[x][y] == "x"){

		if(barcos[x][y] == 0){
			barcos[x][y] = "x";
			console.log("Agua");
		}else if(barcos[x][y] == "x"){
			console.log("Ya me lo dijiste");	
		}
			

    }else{ // hay un barco

	switch(barcos[x][y]){

		case 1: contHundidos++; 
				barcos[x][y] = -1;
				console.log("Hundiste submarino"); 
		break;

		case 2: contT2++;
				barcos[x][y] = -2;
				if(contT2 == 2){
					contHundidos++;
					console.log("hundiste destructor");
				}else if(barcos[x][y] == -2){
					console.log("Ya me lo dijiste");
				}
				break;
	
		case 3: contT3++;
				barcos[x][y] = -3;
				if(contT3 == 3){
					contHundidos++;
					console.log("hundiste crucero");
				}else if(barcos[x][y] == -3){
					console.log("Ya me lo dijiste");
				}					
				break;
		
		case 4: contT4++; 
				barcos[x][y] = -4;
				if(contT4 == 4){
					contHundidos++;
					console.log("Hundiste Acorazado");
				}else if(barcos[x][y] == -4){
					console.log("Ya me lo dijiste");
				}
				break;
			
	}


	}

}

	
 
