$(function(){

	// UX-menu //
	$(function(){
		var windowW = $(window).width()
		if(windowW > 1079){
			// open //
			$('.navgation-open').click(function(){
				//menupage//
				TweenMax.staggerTo('.menu-left li', .2, {x: 200, opacity: 1, delay: 1}, .1);
				TweenMax.staggerTo('.direct-info-box', .2, {x: -200, opacity: 1, delay: 1}, .1);
				TweenMax.to('.menu-wrap', .6, {'left': '0vw', delay: 0}, 1);
				TweenMax.to('.menu-mask', .6, {'left': '0vw', delay: .3}, 1);
				TweenMax.to('.menu-main', .6, {'height': '90vh', delay: .5}, 1);
				TweenMax.to('.menu-bg', .6, {'opacity': '1', delay: .8}, 1);
				//btn//
				$('.navgation-right-wrap').addClass('navgation-right-add')
				TweenMax.to('.navgation-open', .5, {x: -150, opacity: 0}, 0.3);
				TweenMax.to('.navgation-close', .5, {x: 150, opacity: 1, delay: 0.2}, 0.3);
				//nav//
				$('.navgation-logo').removeClass('navgation-logo-add')
				$('.menuAnimate').removeClass('menuAnimate-add')
			})
			// close //
			$('.navgation-close, .menu-left a, .navgation-logo').click(function(){
				//btn//
				$('.navgation-right-wrap').removeClass('navgation-right-add')
				TweenMax.to('.navgation-open', .5, {x: 0, opacity: 1, delay: 0.2}, 0.3);
				TweenMax.to('.navgation-close', .5, {x: -150, opacity: 0}, 0.3);
				//menupage//
				TweenMax.staggerTo('.menu-left li', .2, {x: 0, opacity: 0, delay: 0}, .1);
				TweenMax.staggerTo('.direct-info-box', .2, {x: 0, opacity: 0, delay: 0}, .1);
				TweenMax.to('.menu-main', .6, {'height': '0vh', delay: .2}, 1);
				TweenMax.to('.menu-wrap', .6, {'left': '-100vw', delay: .9}, 1);
				TweenMax.to('.menu-mask', .6, {'left': '-100vw', delay: .9}, 1);
				TweenMax.to('.menu-bg', .4, {'opacity': '0', delay: .4}, 1);
				//nav//
				$('.navgation-logo').addClass('navgation-logo-add')
				$('.menuAnimate').addClass('menuAnimate-add')
			})
		}else if( 767 < windowW < 1079){
			// open //
			$('.navgation-open').click(function(){
				//menupage//
				TweenMax.staggerTo('.menu-left li', .2, {x: 200, opacity: 1, delay: 1}, .1);
				TweenMax.staggerTo('.direct-info-box', .2, {x: -200, opacity: 1, delay: 1}, .1);
				TweenMax.to('.menu-wrap', .6, {'left': '0vw', delay: 0}, 1);
				TweenMax.to('.menu-mask', .6, {'left': '0vw', delay: .3}, 1);
				TweenMax.to('.menu-main', .6, {'height': '90vh', delay: .5}, 1);
				TweenMax.to('.menu-bg', .6, {'opacity': '1', delay: .8}, 1);
				//btn//
				$('.navgation-right-wrap').addClass('navgation-right-add')
				TweenMax.to('.navgation-open', .5, {y: -80, opacity: 0}, 0.3);
				TweenMax.to('.navgation-close', .5, {y: 160, opacity: 1, delay: 0.2}, 0.3);
				//nav//
				$('.navgation-logo').removeClass('navgation-logo-add')
				$('.menuAnimate').removeClass('menuAnimate-add')
			})
			// close //
			$('.navgation-close, .menu-left a, .navgation-logo').click(function(){
				//btn//
				$('.navgation-right-wrap').removeClass('navgation-right-add')
				TweenMax.to('.navgation-open', .5, {y: 0, opacity: 1, delay: 0.2}, 0.3);
				TweenMax.to('.navgation-close', .5, {y: -40, opacity: 0}, 0.3);
				//menupage//
				TweenMax.staggerTo('.menu-left li', .2, {x: 0, opacity: 0, delay: 0}, .1);
				TweenMax.staggerTo('.direct-info-box', .2, {x: 0, opacity: 0, delay: 0}, .1);
				TweenMax.to('.menu-main', .6, {'height': '0vh', delay: .2}, 1);
				TweenMax.to('.menu-wrap', .6, {'left': '-100vw', delay: .9}, 1);
				TweenMax.to('.menu-mask', .6, {'left': '-100vw', delay: .9}, 1);
				TweenMax.to('.menu-bg', .4, {'opacity': '0', delay: .4}, 1);
				//nav//
				$('.navgation-logo').addClass('navgation-logo-add')
				$('.menuAnimate').addClass('menuAnimate-add')
			})
		}if( windowW < 768){
			// open //
			$('.navgation-open').click(function(){
				//btn//
				$('.navgation-right-wrap').addClass('navgation-right-add')
				TweenMax.to('.navgation-open', .5, {y: -80, opacity: 0}, 0.3);
				TweenMax.to('.navgation-close', .5, {y: 80, opacity: 1, delay: 0.2}, 0.3);
				//menupage//
				TweenMax.staggerTo('.menu-left li', .2, {x: 200, opacity: 1, delay: 1}, .1);
				TweenMax.staggerTo('.direct-info-box', .2, {x: -200, opacity: 1, delay: 1}, .1);
				TweenMax.to('.menu-wrap', .6, {'left': '0vw', delay: 0}, 1);
				TweenMax.to('.menu-mask', .6, {'left': '0vw', delay: .3}, 1);
				TweenMax.to('.menu-main', .6, {'height': '90vh', delay: .5}, 1);
				TweenMax.to('.menu-bg', .6, {'opacity': '1', delay: .8}, 1);
				//nav//
				$('.navgation-logo').removeClass('navgation-logo-add')
				$('.menuAnimate').removeClass('menuAnimate-add')
			})
			// close //
			$('.navgation-close, .menu-left a, .navgation-logo').click(function(){
				//btn//
				$('.navgation-right-wrap').removeClass('navgation-right-add')
				TweenMax.to('.navgation-open', .5, {y: 0, opacity: 1, delay: 0.2}, 0.3);
				TweenMax.to('.navgation-close', .5, {y: -40, opacity: 0}, 0.3);
				//menupage//
				TweenMax.staggerTo('.menu-left li', .2, {x: 0, opacity: 0, delay: 0}, .1);
				TweenMax.staggerTo('.direct-info-box', .2, {x: 0, opacity: 0, delay: 0}, .1);
				TweenMax.to('.menu-main', .6, {'height': '0vh', delay: .2}, 1);
				TweenMax.to('.menu-wrap', .6, {'left': '-100vw', delay: .9}, 1);
				TweenMax.to('.menu-mask', .6, {'left': '-100vw', delay: .9}, 1);
				TweenMax.to('.menu-bg', .4, {'opacity': '0', delay: .4}, 1);
				//nav//
				$('.navgation-logo').addClass('navgation-logo-add')
				$('.menuAnimate').addClass('menuAnimate-add')
			})
		}
	})



	// hover //
	$('.menu-left a').hover(function(){
		$(this).next().addClass('menu-left-add')
		$(this).prev().addClass('menu-left-add')
	}, function(){
		$(this).next().removeClass('menu-left-add')
		$(this).prev().removeClass('menu-left-add')
	})

	// nav-bottom-UX //
	$('.navgation-bottom-wrap').mouseenter(function(){
		$(function(){
			// nav-bottom-scroll //
			$('.navgation-bottom').addClass('navgation-bottom-scroll')
		})
		$('.navgation-bottom').removeClass('navgation-bottom-scroll')
	})
	$('.navgation-bottom-wrap').click(function(){
		$('.navgation-bottom-wrap').fadeOut(100)
		var window_height = $(window).height()
		$('html, body').stop(true, false).animate({scrollTop: window_height}, 800)
	})
	$('.navgation-gotop').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 0}, 800)
	})
	
	// UX-product //
	$(function(){
		 $(window).scroll(function () {
			var scrollVal = $(this).scrollTop();
			var windowH = $(window).height();
			var footerVal = $('.footer').offset()
			if(scrollVal >= windowH -200){
				$('.category-control-wrap').addClass('category-control-wrap-add')
				$('.navgation-left-wrap').removeClass('navgation-left-add')
				$('.navgation-right-wrap').removeClass('navgation-right-add')
				// nav-svg-green //
				$('.facebook_icon').addClass('facebook_icon-add')
				$('.navgation-logo').addClass('navgation-logo-add')
				$('.menuAnimate').addClass('menuAnimate-add')
				$('.goto-top').addClass('goto-top-add')
				$('.navgation-gotop').addClass('navgation-gotop-add')
				$('.nav-index-top').addClass('nav-index-top-add')
				$('.nav-index-circle').addClass('nav-index-circle-add')
				$('.nav-index-bottom').addClass('nav-index-bottom-add')
				$('.navgation-now-index').addClass('navgation-now-index-add')
			}if(scrollVal <= windowH -200){
				$('.navgation-left-wrap').addClass('navgation-left-add')
				$('.navgation-right-wrap').addClass('navgation-right-add')
				$('.category-control-wrap').removeClass('category-control-wrap-add')
			}if(scrollVal + windowH > footerVal.top){
				$('.category-control-wrap').removeClass('category-control-wrap-add')
			}if( scrollVal > 1){
				// container-zindex //
				$('.navgation-bottom-wrap').addClass('navgation-bottom-wrap-add')
			}if( scrollVal < 200){
				// container-zindex //
				$('.navgation-bottom-wrap').removeClass('navgation-bottom-wrap-add')
			}

		})
	})

	// slick-product-header //
	$('.slick-header-page').slick({
		dots: false,
		infinite: true,
		speed: 1400,	
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

	$('.header-page-wrap .slide-arrow-left').click(function(){
		$('.slick-header-page').slick('slickPrev')
	})
	$('.header-page-wrap .slide-arrow-right').click(function(){
		$('.slick-header-page').slick('slickNext')
	})



	// slick full-photo //
	$('.slick-full-photo').slick({
		dots: false,
		infinite: true,
		speed: 600,	
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true
	});
	$('.full-left-wrap').click(function(){
		$('.slick-full-photo').slick('slickPrev')
	})
	$('.full-right-wrap').click(function(){
		$('.slick-full-photo').slick('slickNext')
	})
	$('.category-popoup-btn').click(function(){
		$('.full-photo-wrap').removeClass('full-photo-wrap-add')
	})
	$('.full-close, .full-photo-animate').click(function(){
		$('.full-photo-wrap').addClass('full-photo-wrap-add')
	})

	$('.slick-header-page').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		// add/removeclass //

	})


	// pageName //
	var pageText = $('.page-title-en h2').html(),
		pageName = pageText.substring(1 , pageText.length).toLowerCase()

	// product header //
	var headerImg = $('.header-pageImg');
	$('.header-pageImg').css({'background-image': 'url("images/popup/'+ pageName +'/' + 1 + '.jpg")'})
	for(p = 0; p < headerImg.length - 2; p++){
		$('.header-pageImg').eq(p).css({'background-image': 'url("images/popup/'+ pageName +'/' + p + '.jpg")'})
	}
	$('.header-pageImg').eq(headerImg.length - 1).css({'background-image': 'url("images/popup/'+ pageName +'/' + headerImg.length - 3 + '.jpg")'})
	$('.header-pageImg').eq(headerImg.length - 2).css({'background-image': 'url("images/popup/'+ pageName +'/' + 0 + '.jpg")'})
	
	// full-photo-popupImg //
	$('.page-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		// add/removeclass //
		// right //
		TweenMax.staggerTo('.category-info-box', .2, {x: 300, opacity: 0}, .01);
		setTimeout(function(){
			TweenMax.staggerTo('.category-info-box', .4, {x: 0, opacity: 1}, .02);
		}, 300)

		$('.category-circle').addClass('category-circle-add')
		setTimeout(function(){
			$('.category-circle').removeClass('category-circle-add')
		}, 700)
		$.ajax({
			url: "images/popup/pdata.json",
			type: "GET",
			dataType: "json",
			success: function(data) {
				var pitaGet = data.data[0].pita,
					toastGet = data.data[0].toast,
					drinkGet = data.data[0].drink;
				if(pageName == 'pita'){
					var eatTeste = Object.keys(pitaGet)[nextSlide]
				}else if(pageName == 'toast'){
					var eatTeste = Object.keys(toastGet)[nextSlide]
				}else if(pageName == 'drink'){
					var eatTeste = Object.keys(drinkGet)[nextSlide]
				}
				var	eatImg = eatTeste.substring(eatTeste.length - 1, eatTeste.length),
					eatImgString = parseFloat(eatImg)
				$('.slick-full-photo img').remove()
				for(i = 0; i < eatImgString; i++ ){
					var productEat = pageName + '/',
						productTaste = eatTeste.substring(0, eatTeste.length - 1) + '/',
						num = i,
						innerImg = productEat + productTaste + num
					$('.slick-full-photo').slick('slickAdd', '<img src="images/popup/' + innerImg + '.jpg"/>')
				}
				setTimeout(function(){
					$('.full-photo-box .slick-list, .draggable').css({'height': '100%'})
				}, 600)

				
			}
		});
		// fullPage onLeave.vivus() //
		// setTimeout(function(){
		// 	var pitaVivus = new Vivus('pageCircle', {
		// 		type: 'delayed',
		// 		duration: 100,
		// 		start: 'autostart',
		// 		animTimingFunction: Vivus.EASE
		// 	});
		// }, 300)
	})




	// slick product //
	$('.page-slick').slick({
		dots: false,
		infinite: true,
		speed: 1400,	
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true,
		swipe: false,
		asNavFor: '.control-slick'
	});
	$('.control-slick').slick({
		dots: false,
		infinite: true,
		speed: 1200,	
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true,
		asNavFor: '.page-slick'
	});
	// not sure //
	// $('.control-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	// 	var pageSlideshow = $('.page-slideshow').offset()
	// 	$('html, body').stop(true, false).animate({scrollTop: pageSlideshow.top}, 600)
	// })
	// windowonload //
	$('.page-slick').slick('slickPrev')
	// control-btn-click //
	$('.control-left-wrap').click(function(){
		$('.control-slick').slick('slickPrev')
		// add/removeclass //
	})
	$('.control-right-wrap').click(function(){
		$('.control-slick').slick('slickNext')
		// add/removeclass //
	})



	// parallax //
	$(function(){
		// bg //
		var scene = $('#parallax_Page').get(0);
		var parallaxInstance = new Parallax(scene, {
			frictionX: 0.03,
			frictionY: 0.03,
			scalarX: 10,
			scalarY: 10
		});

	})




})


