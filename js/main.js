$(function(){

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
	// fullPage-function //
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false	,
		anchors:['header', 'about', 'pita', 'toast', 'drink', 'news', 'where'],
		scrollingSpeed: 1200,
		//events
		onLeave: function(index, nextIndex, direction){
			if(index == 1 && direction =='down'){
			}
			if(index == 2 && direction =='up'){
			}
			if(index == 2 && direction =='down'){
			}
			if(index == 3 && direction =='up'){
			}
			if(index == 3 && direction =='down'){
			}
			if(index == 4 && direction =='up'){
			}
			if(nextIndex == 1){
				// page 1 effect //
				$('.navgation-left-wrap').addClass('navgation-left-add')
				$('.navgation-right-wrap').addClass('navgation-right-add')
				// nav-bottom-white //
				$('.navgation-bottom').removeClass('navgation-bottom-color')
				$('.navgation-bottom-line').removeClass('navgation-bottom-line-add')
				// container-zindex //
				$('.container').addClass('container-add')
			}
			if(nextIndex != 1){
				// page 1 effect //
				$('.navgation-left-wrap').removeClass('navgation-left-add')
				$('.navgation-right-wrap').removeClass('navgation-right-add')
				// nav-bottom-green //
				$('.navgation-bottom').addClass('navgation-bottom-color')
				$('.navgation-bottom-line').addClass('navgation-bottom-line-add')
				// container-zindex //
				$('.container').removeClass('container-add')
			}

			if($(window).width() > 767){
				if(index == 4 && direction =='down'){
					// drink-in //
					TweenMax.staggerTo('.drink .product-name-en span', .5, {'margin-left': 20, opacity: 1, delay: .5}, .1);
					TweenMax.staggerTo('.drink .product-category', .5, {x: 0, opacity: 1, delay: 0}, .1);
				}
				if(index == 5 && direction =='up'){
					// toast-in //
					TweenMax.staggerTo('.toast .product-name-en span', .5, {'margin-left': 20, opacity: 1, delay: .5}, .1);
					TweenMax.staggerTo('.toast .product-category', .5, {x: 0, opacity: 1, delay: 0}, .1);
					// drink-out //
					TweenMax.staggerTo('.drink .product-name-en span', .5, {'margin-left': 0, opacity: 0, delay: 0}, .1);
					TweenMax.staggerTo('.drink .product-category', .5, {x: -400, opacity: 0, delay: 0}, .1);
				}
				if(index == 5 && direction =='down'){
					// drink-out //
					TweenMax.staggerTo('.drink .product-name-en span', .5, {'margin-left': 0, opacity: 0, delay: 0}, .1);
					TweenMax.staggerTo('.drink .product-category', .5, {x: -400, opacity: 0, delay: 0}, .1);
				}			
				if(index == 6 && direction =='up'){
					// drink-in //
					TweenMax.staggerTo('.drink .product-name-en span', .5, {'margin-left': 20, opacity: 1, delay: .5}, .1);
					TweenMax.staggerTo('.drink .product-category', .5, {x: 0, opacity: 1, delay: 0}, .1);
				}
				if(index == 6 && direction =='down'){
				}
				// if yes|not //
				if(nextIndex == 2){
					TweenMax.staggerTo('.about-text', .8, {y: 0, opacity: 1}, .1);
					// pita parallax //
					$('.pita').removeClass('pita-productbg-down')
					$('.pita').addClass('pita-productbg-up')
				}
				if(nextIndex != 2){
					TweenMax.staggerTo('.about-text', .8, {y: -100, opacity: 0}, .1);
					setTimeout(function(){
						TweenMax.staggerTo('.about-text', .8, {y: 0, opacity: 0}, .1);
					}, 300)
				}

				if(nextIndex == 3){
					// pita parallax //
					$('.pita').removeClass('pita-productbg-up')
					$('.pita').removeClass('pita-productbg-down')
					// toast parallax //
					$('.toast').addClass('toast-productbg-up')
					$('.toast').removeClass('toast-productbg-down')
					// pita-in //
					TweenMax.staggerTo('.pita .product-name-en span', .5, {'margin-left': 20, opacity: 1, delay: .5}, .1);
					TweenMax.staggerTo('.pita .product-category', .5, {x: 0, opacity: 1, delay: 0}, .1);
				}
				if(nextIndex != 3){
					// pita-out //
					TweenMax.staggerTo('.pita .product-name-en span', .5, {'margin-left': 0, opacity: 0, delay: 0}, .1);
					TweenMax.staggerTo('.pita .product-category', .5, {x: -400, opacity: 0, delay: 0}, .1);
				}
				if(nextIndex == 4){
					// pita parallax //
					$('.pita').removeClass('pita-productbg-up')
					$('.pita').addClass('pita-productbg-down')
					// toast parallax //
					$('.toast').removeClass('toast-productbg-up')
					$('.toast').removeClass('toast-productbg-down')
					// drink parallax //
					$('.drink').addClass('drink-productbg-up')
					$('.drink').removeClass('drink-productbg-down')
					// toast-in //
					TweenMax.staggerTo('.toast .product-name-en span', .5, {'margin-left': 20, opacity: 1, delay: .5}, .1);
					TweenMax.staggerTo('.toast .product-category', .5, {x: 0, opacity: 1, delay: 0}, .1);
				}
				if(nextIndex != 4){
					// toast-out //
					TweenMax.staggerTo('.toast .product-name-en span', .5, {'margin-left': 0, opacity: 0, delay: 0}, .1);
					TweenMax.staggerTo('.toast .product-category', .5, {x: -400, opacity: 0, delay: 0}, .1);
				}
				if(nextIndex == 5){
					// drink-in //
					TweenMax.staggerTo('.drink .product-name-en span', .5, {'margin-left': 20, opacity: 1, delay: .5}, .1);
					TweenMax.staggerTo('.drink .product-category', .5, {x: 0, opacity: 1, delay: 0}, .1);
					// toast parallax //
					$('.toast').addClass('toast-productbg-down')
					$('.toast').removeClass('toast-productbg-up')
					// drink parallax //
					$('.drink').removeClass('drink-productbg-up')
					$('.drink').removeClass('drink-productbg-down')

				}
				if(nextIndex != 5){
					// drink-out //
					TweenMax.staggerTo('.drink .product-name-en span', .5, {'margin-left': 0, opacity: 0, delay: 0}, .1);
					TweenMax.staggerTo('.drink .product-category', .5, {x: -400, opacity: 0, delay: 0}, .1);

				}
				if(nextIndex == 6){
					// drink parallax //
					$('.drink').removeClass('drink-productbg-up')
					$('.drink').addClass('drink-productbg-down')
					$('.news-box-wrap').removeClass('news-box-wrap-add')
				}
				if(nextIndex != 6){
					$('.news-box-wrap').addClass('news-box-wrap-add')
				}
				if(nextIndex == 7){
					$('.navgation-bottom').fadeOut()
				}
				if(nextIndex != 7){
					$('.navgation-bottom').fadeIn()
				}

				// fullPage onLeave.vivus() //
				$(function(){
						var pitaVivus = new Vivus('pita-circle', {
							type: 'delayed',
							duration: 100,
							start: 'autostart',
							animTimingFunction: Vivus.EASE
						});
						var toastVivus = new Vivus('toast-circle', {
							type: 'delayed',
							duration: 100,
							start: 'autostart',
							animTimingFunction: Vivus.EASE
						});
						var drinkVivus = new Vivus('drink-circle', {
							type: 'delayed',
							duration: 100,
							start: 'autostart',
							animTimingFunction: Vivus.EASE
						});
						$('.product-bg-circle').addClass('product-bg-circle-add')
				})
				$('.product-bg-circle').removeClass('product-bg-circle-add')
				$(function(){
					$('.product-info-line').removeClass('product-info-line-add')
				})
				$('.product-info-line').addClass('product-info-line-add')

				// nav-string UX //
				setTimeout(function(){ 
					if (nextIndex == 1){
						$('.now-index').html('home')
					}
					if (nextIndex == 2){
						$('.now-index').html('about')
					}
					if (nextIndex == 3){
						$('.now-index').html('pita')
					}
					if (nextIndex == 4){
						$('.now-index').html('toast')
					}
					if (nextIndex == 5){
						$('.now-index').html('drink')
					}
					if (nextIndex == 6){
						$('.now-index').html('news')
					}
					if (nextIndex == 7){
						$('.now-index').html('where')
						$('.nav-index-bottom span').fadeOut()
					}
					if (nextIndex != 7){
						$('.nav-index-bottom span').fadeIn()
					}
					$('.nav-index-top').removeClass('nav-index-top-in')
					$('.nav-index-middle').removeClass('nav-index-middle-in')
					$('.nav-index-bottom').removeClass('nav-index-bottom-in')
					$('.nav-index-top span').html(nextIndex - 1)
					$('.nav-index-bottom span').html(nextIndex + 1)
					$('.nav-index-middle span:eq(0)').html(nextIndex)
				}, 300)
				$('.nav-index-top').addClass('nav-index-top-in')
				$('.nav-index-middle').addClass('nav-index-middle-in')
				$('.nav-index-bottom').addClass('nav-index-bottom-in')

				$(function(){
					// nav-bottom-scroll //
					$('.navgation-bottom').addClass('navgation-bottom-scroll')
				})
				$('.navgation-bottom').removeClass('navgation-bottom-scroll')
			}
			document.getElementById("introVideo").play()
		}, //***
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
	

	$('.navgation-gotop').click(function(){
		$.fn.fullpage.moveTo('header', 1);
	})
	$('.navgation-bottom').click(function(){
		$.fn.fullpage.moveSectionDown();
	})
	$('.navgation-bottom').addClass('navgation-bottom-scroll')

	// UX-menu //
	// hover //
	$('.menu-left a').hover(function(){
		$(this).next().addClass('menu-left-add')
		$(this).prev().addClass('menu-left-add')
	}, function(){
		$(this).next().removeClass('menu-left-add')
		$(this).prev().removeClass('menu-left-add')
	})

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
				//btn//
				$('.navgation-right-wrap').addClass('navgation-right-add')
				TweenMax.to('.navgation-open', .5, {y: -80, opacity: 0}, 0.3);
				TweenMax.to('.navgation-close', .5, {y: 160, opacity: 1, delay: 0.2}, 0.3);
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




	// parallax-pita //
	$(function(){
		if($(window).width()> 767){
			// bg //
			var scene = $('#scene_pita').get(0);
				scene2 = $('#scene_toast').get(0);
				scene3 = $('#scene_drink').get(0);
				scene4 = $('#scene_product_P').get(0);
				scene5 = $('#scene_product_T').get(0);
				scene6 = $('#scene_product_D').get(0);
			var parallaxInstance = new Parallax(scene, {
				frictionX: 0.03,
				frictionY: 0.03,
				scalarX: 10,
				scalarY: 20,
				hoverOnly: true
			});
				parallaxInstance = new Parallax(scene2, {
				frictionX: 0.03,
				frictionY: 0.03,
				scalarX: 10,
				scalarY: 10,
				hoverOnly: true
			});
				parallaxInstance = new Parallax(scene3, {
				frictionX: 0.03,
				frictionY: 0.03,
				scalarX: 10,
				scalarY: 10,
				hoverOnly: true
			});
				parallaxInstance = new Parallax(scene4, {
				frictionX: 0.03,
				frictionY: 0.03,
				scalarX: 2,
				scalarY: 2,
				hoverOnly: true
			});
				parallaxInstance = new Parallax(scene5, {
				frictionX: 0.03,
				frictionY: 0.03,
				scalarX: 2,
				scalarY: 2,
				hoverOnly: true
			});
				parallaxInstance = new Parallax(scene6, {
				frictionX: 0.03,
				frictionY: 0.03,
				scalarX: 2,
				scalarY: 2,
				hoverOnly: true
			});
		}
	})


	// TweenMax mouseover_parallax // 

	// $(function(){
	// 	// rotate3d effect //
	// 	$(function(){
	// 		var request = null;
	// 		var mouse = {
	// 		 	x: 0,
	// 			y: 0
	// 			};
	// 		var cx = window.innerWidth / 2;
	// 		var cy = window.innerHeight / 2;

	// 		$('.news').mousemove(function(event) {

	// 			mouse.x = event.pageX;
	// 		 	mouse.y = event.pageY;

	// 			cancelAnimationFrame(request);
	// 			request = requestAnimationFrame(title3d);
	// 		});

	// 		function title3d() {

	// 			dx = mouse.x - cx;
	// 			dy = mouse.y - cy;

	// 			tiltx = (dy / cy);
	// 			tilty = -(dx / cx);
	// 			radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
	// 			degree = (radius * 20);
	// 			TweenLite.to(".news-img-wrap, .news-mask", 2, {
	// 				transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
	// 				ease: Power2.easeOut
	// 			});
	// 		}

	// 		$(window).resize(function() {
	// 			cx = window.innerWidth / 2;
	// 			cy = window.innerHeight / 2;
	// 		});
	// 	})

	// })




	// header-slideshow //
	$('.slick-header').slick({
		dots: false,
		infinite: true,
		speed: 1200,	
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2500
	});
	$('.slide-arrow-left').click(function(){
		$('.slick-header').slick('slickPrev')
	})
	$('.slide-arrow-right').click(function(){
		$('.slick-header').slick('slickNext')
	})




	$('.slick-blog').slick({
		dots: false,
		infinite: true,
		speed: 800,
		arrow: false,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '20px'
	});
	$('#blog-btn-left').click(function(){
		$('.slick-blog').slick('slickPrev')
	})
	$('#blog-btn-right').click(function(){
		$('.slick-blog').slick('slickNext')
	})

	// about-maskHeight //
	if ($(window).width() > 767){
		$(function(){
			var maskHeight = $('.about-bg video').height()
			$('.about-mask').stop(true,false).animate({height: maskHeight})
			$('.about-bg').stop(true,false).animate({height: maskHeight})
		})
		$(window).resize(function(){
			var maskHeight = $('.about-bg video').height()
			$('.about-mask').stop(true,false).animate({height: maskHeight})
			$('.about-bg').stop(true,false).animate({height: maskHeight})
		})
	}
	$(function(){
		$('.fp-tableCell:eq(1)').css({'overflow': 'hidden'})
	})



})





if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
{
	$(function(){
		$('.coming-soon-wrap').css({'display': 'block'})
	})

}
var FF = !(window.mozInnerScreenX == null);
if(FF) {
	$(function(){
		$('.coming-soon-wrap').css({'display': 'block'})
	})
} else { 
    // not firefox 
}