jQuery(document).ready(function($) {
	console.log($);

	$.fn.isInViewport = function () {
		let altura = $(this).height();
		let elementTop = $(this).offset().top;
		let elementBottom = elementTop + $(this).outerHeight();

		let viewportTop = $(window).scrollTop() + 50;

		console.log(elementBottom);

		return elementBottom > viewportTop && elementTop < viewportTop;
	};

	$(window).on('resize scroll', function() {
		if ($('#propia').isInViewport()) {
			$('#propia').addClass('inviewport');
		} else {
			$('#propia').removeClass('inviewport');
		}
	});
	$(window).on('resize scroll', function() {
		if ($('#formulario').isInViewport()) {
			$('#formulario').addClass('inviewport');
		} else {
			$('#formulario').removeClass('inviewport');
		}
	});
	$(window).on('resize scroll', function() {
		if ($('#premio').isInViewport()) {
			$('#premio').addClass('inviewport');
		} else {
			$('#premio').removeClass('inviewport');
		}
	});
	$(window).on('resize scroll', function() {
		if ($('#genera').isInViewport()) {
			$('#genera').addClass('inviewport');
		} else {
			$('#genera').removeClass('inviewport');
		}
	});
	$(window).on('resize scroll', function() {
		if ($('#accion').isInViewport()) {
			$('#accion').addClass('inviewport');
		} else {
			$('#accion').removeClass('inviewport');
		}
	});
});