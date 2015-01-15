function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}





$(document).ready(function(){
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	$('.main_slider').height(h-150);



	$('.main_slider').slick({
		dots: true,
		infinite: true,
		arrows: true
	});



	var slide_text = [], dots = $('.main_slider .slick-dots li');

	$('.main_slider .slick-slide:not(.slick-cloned) .l_h1').each(function(){
		slide_text.push($(this).text());

	})
	for(var i = 0; i<slide_text.length; i++){
		dots.eq(i).children('button').text(slide_text[i]);
	}

	console.log(slide_text);


	// initialize();
});





window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if(scrolled>= 100){
		$('.main_menu').css({
			position:'fixed',
			top: 0,
		});
	}
	else{
		$('.main_menu').css({
			position: 'absolute',
			top: '100px'
		});
	}
};
