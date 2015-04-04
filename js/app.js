$(function(){
	$('#ERModal .slick').slick({
	// mobileFirst: true,
		adaptiveHeight: true,
		respondTo: 'window',
		variableWidth: false,
		responsive: [{
			breakpoint: 600,
			settings: {
				arrows: true
			}
		},
		{
			breakpoint: 500,
			settings: {
				arrows: false
			}
		}]
	});

	$('#ERModal video').css({width: '98%', border: '1px solid #ccc'});
	$('#ERModal .slick div.slide').removeClass("hide");

	$(document).foundation();


	$(document).on('open.fndtn.reveal', '[data-reveal]', function () {
		var modal = $(this);
		switch($(modal.context).prop('id')){
			case 'ERModal':
				$('#ERModal .slick div.slide').addClass('hide');
			break;
		}
	});

	var slicked = false;
	$(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
		var modal = $(this);
		console.log($(modal.context).prop('id'));
		switch($(modal.context).prop('id')){
			case 'ERModal':
				$('#ERModal .slick').slick("setPosition", 0);
				$('#ERModal .slick div.slide').removeClass("hide");
				// $(window).trigger('resize');
			break;
		}
	});


	$('.nextSlide').on('click', function(){
		$('#ERModal .slick').slick('slickNext');
	});

	$(document.body).on('fonts:allLoaded', function(e){
		console.log('fonts');
		$('.main').addClass('uncover');
		$('.loading').addClass('fadeOut');
	});

	WebFont.load({});

	var images = [
	'images/banners/cpg.png',
	'images/banners/game.png',
	'images/banners/er.png'
];

var current;
var total = images.length + 1;
var img;
for (var i = 0; i < images.length; i++) {
	img = $("<img />").attr("src", images[i]);
	img.on('load', function(){
		console.log('loaded', img);
		current++;
	});
}

var timeoutFunction = function(id){
	console.log(window.timeoutID);
	if (window.fontsLoaded === true){
		$(document.body).trigger('fonts:allLoaded');
		clearInterval(window.timeoutID);
	}
};
window.timeoutID = window.setInterval(timeoutFunction, 1000, this);
});
