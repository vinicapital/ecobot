$( function(){

	var delay = 5000;
	var curIndex = 0;
	var ant;

	initSlider();
	autoPlay();


	function initSlider(){
		ant = $('.sobre-author').length;
		var sizeContainer = 100 * ant;
		var sizeBoxSingle = 100 / ant;
		$('.sobre-author').css('width',sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%');

		for(var i = 0; i < ant; i++) {
			if(i == 0)
				$('.slider-bullets').append('<span style="background-color:green;"></span>');
			else
				$('.slider-bullets').append('<span></span>');
		
		}


	}

	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == ant)
				curIndex = 0;
			goToSlider(curIndex);
			},delay);
	}

	/*function goToSlider(curIndex){
		var offSetX = $('.sobre-author').eq(curIndex).offset();
	
		$('.slider-bullets span').css('background-color','rgb(200,200,200)');
		$('.slider-bullets span').eq(curIndex).css('background-color','green');
		$('.scrollEquipe').stop().animate({'scrollLeft':offSetX.left+'px'});
	} */


	function goToSlider(curIndex){
	var offSetX = $('.sobre-author').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;

	$('.slider-bullets span').css('background-color','rgb(200,200,200)');
		$('.slider-bullets span').eq(curIndex).css('background-color','green');
		$('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});
}

	$(window).resize(function(){
		$('.scrollEquipe').stop().animate({'scrollLeft':0});

	})

});