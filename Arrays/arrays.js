var semana=[50, 35, 105, 40, 25];

for (var i=0; i<=semana.length-1; i++){
	console.log(semana[i]);
}

var total=0;
for (var i=0; i<=semana.length-1; i++){
	total=total+semana[i];
}
console.log(total);
total=total/semana.length;
console.log(total);

for(var i=0; i<=semana.length-1; i++){
	if(semana[i]>50){
		console.log(semana[i]);
	}
}



