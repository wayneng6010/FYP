$(function(){
	$(window).load(function() {
		$('.fade-First').addClass('showing');
	});

});

$(function(){
	$(window).scroll(function(){
		var additionHeight = 600;
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		//fade-in
		$('.fade-All1').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 2450;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All2').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 150;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All3').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 50;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All4').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 275;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All5').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 930;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All6').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 1130;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
			// function show(){
			// 	$('#circle1').css("fill","url(#grad1)");
			// 	$('#circle1').css("stroke","white");
			// 	$('#circle1').css("stroke-width","5");
			// 	$('#circle1').css("r","13");
			// 	$('#circle1').css("transition","r .2s ease-in-out");

			// 	$('#timeline1').css("transition","opacity .5s ease-in-out");
			// 	$('#timeline1').css("visibility","visible");
			// 	$('#timeline1').css("opacity","1");

			// 	$('#line1').css("transition","opacity .5s ease-in-out");
			// 	$('#line1').css("opacity","1");
			// }
			// setInterval(show,1500);

		});

		$('.fade-All7').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 1430;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All8').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 2000;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All9').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 2750;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All10').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight - 705;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All11').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 3550;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All12').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 3670;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All13').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 4070;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All14').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 4180;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

	});
});