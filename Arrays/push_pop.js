//Métodos de arrays

//var disfraces = new Array();//creo un nuevo objeto de clase Array

//disfraces.push("Unicornio");

var notas = ["do","re", "mi", "fa","sol"];

//Métodos push  y pop
var notasPush = notas.push("la", "si");//retorna la longitud del array

console.log(notasPush);//6
console.log("¿El valor que retorna push es igual al length del array?: ", notasPush == notas.length);//true

console.log("Array con push: " + notas);

/*notas.pop();
console.log(notas);

var notaEliminada = notas.pop();
console.log(notaEliminada);*/

var notaSi = notas.pop();
var notaLa = notas.pop();
console.log(notas);
console.log(notaSi, notaLa);

console.log(notas.indexOf("fa"));



