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
window.history.pushState({}, "", '/')
window.addEventListener("hashchange", () => window.history.pushState({}, "", '/'), {});

$("#con_form").submit(function (event) {
	event.preventDefault();

	event = event.currentTarget

	const body = {
		"name": event[0].value,
		"age": parseInt(event[1].value),
		"cellphone": event[2].value,
		"email": event[3].value,
		"associate": event[4].value,
		"smartphone": event[5].value === "1",
		"os": event[6].value,
		"commentary": event[7].value
	}

	$.post("https://pftfkfuts5.execute-api.us-east-1.amazonaws.com/prod/beta-registration", JSON.stringify(body),
		(data, status) => {
			if (status == "success") {
				$("#success-modal").modal()
				setTimeout(() => {
					$("#success-modal").modal("toggle")
				}, 1000)
			} else {
				$("#error-modal").modal()
				setTimeout(() => {
					$("#error-modal").modal("toggle")
				}, 1000)
			}
		})

});



function textCounter(field, countfield, maxlimit) {

	if (field.value.length > maxlimit) {
		field.value = field.value.substring(0, maxlimit);
		field.blur();
		field.focus();
	} else {
		$("#remaining").html(maxlimit - field.value.length)
	}
}

(function ($) {
	// Call all functions
	loader();
	responsive();
	heroSection();
	videoPopup();
	accordions();
	progressCircle();



})(jQuery);