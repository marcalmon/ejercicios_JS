var datos = [[1, "Jaime", "Perez", 28], [2, "Lalo", "Pirulo", 32], [3, "Joaquin", "Burbuja", 45]];

$(document).ready(function(){



		for(i = 0; i < datos.length; i++){

			var tr = '<tr id="registro_'+ i +'">' + '<td>' + datos[i][0] + '</td>' + '<td>' + datos[i][1] + '</td>' + '<td>' + datos[i][2] + '</td>' + '<td>'+'<button id="'+i+'" data-rg="#registro_'+i+'" type="button" class="btn btn-default btn-md btnBorrar">'+'<span class="glyphicon glyphicon-trash">'+'</span>'+'</button>'+'</td>'+'<td>'+'<button id="num"'+i+' data-rg =".registro'+i+'" type="button" class="btn btn-default btn-md btnEditar">'+'<span class="glyphicon glyphicon-pencil">'+'</span>'+'</button>'+'</td>'+'</tr>';
	
		  	$('#tablita').append(tr);
		}	

			$('.btnBorrar').on('click', function(){
		
				var rg = $(this).data('rg');
				$(rg).hide(1000, function(){//hide() puede recibir 2 parametros, (speed, callback)

					alert("El registro se borro correctamente!");

				});
	
			});

		$('#add').on('click', function(){

			var nuevo = [];
			var n = $('#nn').val();
			nuevo.push(n);
			nuevo.push($('#an').val());
			nuevo.push($('#en').val());

			datos.push(nuevo);
			console.log(datos);

		});
	
	

});