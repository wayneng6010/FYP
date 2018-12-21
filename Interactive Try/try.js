$(function(){
	$(window).scroll( function(){
		var additionHeight = 0;
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		//fade-in

		$('.fade-topLeftLine').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + 100 + additionHeight;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-01').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() - 90 + additionHeight;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-easyOrder').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + 10 + additionHeight;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-centerLine').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() - 150 + additionHeight;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-rightImg').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2 + additionHeight - 40;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-centerBottomImg').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() - 300 + additionHeight;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-paragraphContent').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + 30 + additionHeight;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-getQuoteBtn').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + 10 + additionHeight;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});
	});
});

