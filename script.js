$(document).ready(function (){
	$(document).on('click','.block__title', function(event){
		if($('.block').hasClass('one')){

			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}

		$(this).toggleClass('active').next().slideToggle(300);

	});
});