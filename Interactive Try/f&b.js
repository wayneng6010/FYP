$(function(){
	$(window).load(function() {
		$('.fade-First').addClass('showing');
	});

});

$(function(){
	$(window).scroll(function(){
		var additionHeight = 100;
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		//fade-in
		$('.fade-All1').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 2530;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All2').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight + 3160;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-All3').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + additionHeight - 100;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});



	});
});