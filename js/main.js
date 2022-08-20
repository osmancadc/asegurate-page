/* =================================
------------------------------------
	Labs - Design Studio
	Version: 1.0
 ------------------------------------ 
 ====================================*/

'use strict';

/*------------------
	Preloder
--------------------*/
function loader() {
	$(window).on('load', function () {
		$(".loader").fadeOut();
		$("#preloder").delay(1000).fadeOut("slow");
	});
}

/*------------------
	Navigation
--------------------*/
function responsive() {
	// Responsive 
	$('.responsive').on('click', function (event) {
		$('.menu-list').slideToggle(400);
		event.preventDefault();
	});
}

/*------------------
	Hero Section
--------------------*/
function heroSection() {
	//Slide item bg image.
	$('.hero-item').each(function () {
		var image = $(this).data('bg');
		$(this).css({
			'background-image': 'url(' + image + ')',
			'background-size': 'cover',
			'background-repeat': 'no-repeat',
			'background-position': 'center bottom'
		});
	});
	//slider auto height 
	var iit = setInterval(slide_item, 1);

	function slide_item() {
		var bh = $('body').height();
		$('.hero-item').height(bh);
	}
	slide_item();

	// Init the carousel
	$('#hero-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayTimeout: 7000,
		autoplayHoverPause: false,
		onInitialized: start,
	});

	function start() {
		$('#hero-slider').trigger('play.owl.autoplay', [500])
	};

}

/*------------------
	Video Popup
--------------------*/
function videoPopup() {
	$('.video-popup').magnificPopup({
		type: 'iframe',
		autoplay: true
	});
}

/*------------------
	Accordions
--------------------*/
function accordions() {
	$('.panel').on('click', function (e) {
		$('.panel').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});
}



/*------------------
	Progress Circle
--------------------*/
function progressCircle() {
	//Set progress circle 1
	$("#progress1").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 5,
		fill: "#2be6ab",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 2
	$("#progress2").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 5,
		fill: "#2be6ab",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 3
	$("#progress3").circleProgress({
		value: 0.25,
		size: 175,
		thickness: 5,
		fill: "#2be6ab",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 4
	$("#progress4").circleProgress({
		value: 0.95,
		size: 175,
		thickness: 5,
		fill: "#2be6ab",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

}

(function ($) {
	// Call all functions
	loader();
	responsive();
	heroSection();
	testimonial();
	progressbar();
	videoPopup();
	accordions();
	progressCircle();

})(jQuery);