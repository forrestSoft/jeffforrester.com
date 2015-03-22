$(function(){
	$(document).foundation();
	// App.start();
	console.log(11);
	// $('#ERModal .slick').slick();


	$(document).on('open.fndtn.reveal', '[data-reveal]', function () {
		var modal = $(this);
		// console.log(modal);
		switch($(modal.context).prop('id')){
			case 'ERModal':
				$('#ERModal .slick div.slide').addClass('hide');
			break;
		}
	});

	var slicked = false;
	$(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
		var modal = $(this);
		// console.log(modal, modal.context);
		console.log($(modal.context).prop('id'));
		switch($(modal.context).prop('id')){
			case 'ERModal':
				console.log(2);
				if(slicked){
					$('#ERModal .slick div.slide').addClass('hide');
					$('#ERModal .slick').slick('unslick');
				}
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
				      breakpoint: 600,
				      settings: {
				        arrows: false
				      }
				    }]
				});
				$('#ERModal .slick div.slide').removeClass("hide");
				$('#ERModal video').css({width: '100%', border: '1px solid #ccc');
				$('#ERModal .slick').slick("setPosition", 0);
				slicked = true;
				
			break;
		}
	});
});
