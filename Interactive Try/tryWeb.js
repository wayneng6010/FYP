$(function(){
	$(window).scroll( function(){
		var additionHeight = 110;
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
			var bottom_of_object = $(this).position().top + $(this).outerHeight() - 110 + additionHeight;
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
			var bottom_of_object = $(this).position().top + $(this).outerHeight() - 130 + additionHeight;
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
			var bottom_of_object = $(this).position().top + $(this).outerHeight() - 330 + additionHeight;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

		$('.fade-paragraphContent').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() - 50 + additionHeight;
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

		$('.fade-getQuoteForm').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight() + 50 + additionHeight;
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

	});
});