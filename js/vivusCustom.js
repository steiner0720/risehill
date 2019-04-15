
// vivus js //
$(function(){
	if($(window).width() > 767){
		$('.navgation-left').hover(function(){
			new Vivus('menuAnimate', {
				type: 'delayed',
				duration: 40,
				start: 'autostart',
				animTimingFunction: Vivus.EASE
			});
		}, function(){
			new Vivus.stop()
		})
	}

})

