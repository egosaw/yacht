$(document).ready(function(){
	$('.small_slider').slick({
		dots: true,
		infinite: true,
		arrows: true,
	    asNavFor: '.slider-for'
	});
	// initialize();

	$('.slider-for').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    fade: true,
	    asNavFor: '.small_slider'
	});
});