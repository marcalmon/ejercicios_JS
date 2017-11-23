//Selectores
//$('#id') para id
//$('.class') para clases

$(document).ready(function(){

	$('#texto').hide();//esconde el div

	/*$('.imagen').click(function(){

		$(this).hide();
	});*/

	$('.caption').click(function(){

		$(this).toggleClass('negrita');
		//-----.addClass('');
		//-----.removeClass(''); clase asociado al css
		//hide() - show(speed o funcion de callback);<--display o .addClass('ocultar') o con prop('display', 'none');

	})
});