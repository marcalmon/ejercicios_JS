function changeColor(nuevocolor){
			var e = document.getElementById('test');
			e.style.color = nuevocolor;
}

function validar(){
	var usuario = document.getElementById('usuario');
	var password = document.getElementById('password');

	if(usuario.value == "" || password.value.length == 0){

		alert("Ambos campos son obligatorios");
	}else{

	}
}

/*Métodos de obtención de datos

document.getElementById(nombre del id)
document.getElementsByClassNyne(nombre de las clases)
document.getElementsByTagName(div)*/