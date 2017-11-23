$(document).ready(function(){

	$('#add').on('click', function(){

		var tr = '<tr id="registro_x"><td><input type="text" class="registrox" disabled></td><td><input disabled id="namex" type="text" value="" class="registrox"></td><td><input disabled id="apex" type="text" value="" class="registrox"></td><td><input disabled id="edadx" type="text" value="" class="registrox"></td><td><button id="x" data-rg="#registro_x" type="button" class="btn btn-default btn-md btnBorrar"><span class="glyphicon glyphicon-trash"></span></button></td><td><button id="numx" data-rg =".registrox" type="button" class="btn btn-default btn-md btnEditar"><span class="glyphicon glyphicon-pencil"></span></button></td>';
		$('#tablita').append(tr);
	});

	$('.btnEditar').on('click', function(){
		//$(this).addClass('clicked');
		$('input').prop('disabled', true);
		var fila = $(this).data('rg');
		$(fila).prop('disabled', false);
		//var btnId = $(this).attr('id');//.attr: atributo, .prop('id') 
		//alert("Boton: " + btnId);
	});

	$('.btnBorrar').on('click', function(){
		/*var btnId = $(this).prop('id');//.attr: atributo, .prop('id') 
		var trId = "#registro_" + btnId;
		$(trId).hide(1000, function(){//hide() puede recibir 2 parametros, (speed, callback)

			alert("El registro se borro correctamente!")
		});*/
		var rg = $(this).data('rg');
		$(rg).hide(1000, function(){//hide() puede recibir 2 parametros, (speed, callback)

			alert("El registro se borro correctamente!")
		});
;	});	

	/* <buttton id="b1" class="btn" name="boton">
	.prop('id')
	.prop('class', btn2)  -- puede cambiar el valor de una clase
	.addClass('btn2')  --  agrega una clase -- no es igual al prop

	data -- atributo
	*/


});