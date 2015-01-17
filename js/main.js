function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}




var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

$(document).ready(function(){
	
	if(h<768){
		$('.main_slider').height(h-50);
		$('html, body').animate({
	        scrollTop: 100
	    }, 100);
	}
	else{
		$('html, body').animate({
	        scrollTop: 0
	    }, 100);
		$('.main_slider').height(h-150);
	}

	$('.main_slider').slick({
		dots: true,
		infinite: true,
		arrows: true,
		initialSlide: 0,
		prevArrow: '<button type = "button" class = "slick-prev"><span>Клуб</span></button>',
		nextArrow: '<button type = "button" class = "slick-next"><span>Аренда яхт</span></button>',
		onAfterChange: function(slider, index){
							var lButs = $('.main_slider .slick-prev span'),
								rButs = $('.main_slider .slick-next span'),
								count = slider.slideCount -1;
							if(index == 0){
								lButs.text(slide_text[count])
								rButs.text(slide_text[index+1])
							}
							else if(index == count){
								lButs.text(slide_text[index -1])
								rButs.text(slide_text[0])
							}
							else{
								lButs.text(slide_text[index-1]);
								rButs.text(slide_text[index+1])
							}
						}
	});




	var slide_text = [],
		lgth = slide_text.length,
		dots = $('.main_slider .slick-dots li'),
		lBut = $('.main_slider .slick-prev'),
		rBut = $('.main_slider .slick-next');
		

	$('.main_slider .slick-slide:not(.slick-cloned) .l_h1').each(function(){
		slide_text.push($(this).text());

	})
	for(var i = 0; i<slide_text.length; i++){
		dots.eq(i).children('button').text(slide_text[i]);
	}


	(function() {
		[].slice.call( document.querySelectorAll( '.f_line select' ) ).forEach( function(el) {	
			new SelectFx(el);
		} );
	})();
	initialize();



});








window.my_last_y = 0;

window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	// console.log(scrolled);

	if(scrolled>= h-50){
		$('.scroll').css({
			position:'fixed',
			top: '-100px',
		});



		if(scrolled > window.my_last_y){
			$('.scroll').css({
				position:'fixed',
				top: '-100px',
			});
		}
		else{
			$('.scroll').css({
				position:'fixed',
				top: '0px',
			});
		}
		window.my_last_y = scrolled;
	}
	else{
		$('.scroll').css({
			position: 'absolute',
			top: '0',
		});
	}
};
