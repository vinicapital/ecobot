$(function(){


	$('nav > a').click(function(){

		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;


		$('html,body').animate({'scrolltop':offSetTop});

		return false;

	});
});