$(document).ready(function(){

	$('.alert').alert();

	$('a.confirm-delete').click(function(){

		var r = confirm('Are you sure you want to delete that?');
		if (r) {
			window.location = $(this).data('href');
		}

	});

});