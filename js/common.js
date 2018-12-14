$(document).ready(function() {

	/* Adaptive menu !!!!!!!!!!!!!!!!!*/
   
 //    $(".menu__icon").click(function() {
	// 	$(this).toggleClass("on");
	// 	$(".menu").slideToggle();
	// 	$('.our-contacts').toggleClass('hidden-div')
	// 	return false;
	// });
   	
   	/* Открытие меню */

var main = function() { 

    $('.menu__icon').click(function() {            
        $('.menu').animate({ 
            left: '0px' 
        }, 200);        
        $('body').animate({ 
            left: '285px' 
        }, 200);
    });


    $('.menu__close').click(function() { 
        $('.menu').animate({ 
            left: '-285px' 
        }, 200);        
	    $('body').animate({ 
	            left: '0px' 
	        }, 200); 
	    });
	};
	$(document).ready(main);

	$(".menu__icon").click(function() {
	  	$(this).toggleClass("icon__hidden");	
	});
	$(".menu__close").click(function() {
	  	$(".menu__icon").toggleClass("icon__hidden");	 
	});
	
/*********** Time-section ***********/

	$(".time__wrap .time__item--active200")
		.append('<div class="time__item--inner" style="width: calc(200% - 17px);"></div>');

	$(".time__wrap .time__item--active500")
		.append('<div class="time__item--inner" style="width: calc(500% - 17px);"></div>');	
	
	$(".time__wrap .time__item--active700")
		.append('<div class="time__item--inner" style="width: calc(700% - 17px);"></div>');

/************* Fixed menu *************/

	if ($(window).width() > 768)   {
		$(window).scroll(function () {
			var scrolled = $(window).scrollTop();
			if (scrolled >= 5) {
				$('header').addClass('header__fixed');				
				$('.about').addClass('about__fixed');				
			}
			else {
				if (scrolled < 180) {
					$('header').removeClass('header__fixed');					
					$('.about').removeClass('about__fixed');					
				}
			}
		});
	}

	
/*************** Price-section ***************/

	$('.price__button').click(function() {
	    if ($(this).hasClass('first')){
	        $('#progress-bar').val('0');
	        $(this).nextAll().removeClass('progress__active');  
	    } else if ($(this).hasClass('second')) {
	        $(this).nextAll().removeClass('progress__active');  
	        $('#progress-bar').val('34');
	        $(this).prevAll().addClass('progress__active');  
	        $(this).addClass('progress__active');
	    } else if ($(this).hasClass('third')) {
	        $(this).nextAll().removeClass('progress__active');  
	        $('#progress-bar').val('67');
	        $(this).prevAll().addClass('progress__active'); 
	        $(this).addClass('progress__active');
	    } else {
	        $('#progress-bar').val('100');
	        $(this).addClass('progress__active');
	        $(this).prevAll().addClass('progress__active');
	    }
	});

/**************** Left-scroll ****************/

	$(window).scroll(function(event){
		var body = $('body').scrollTop();
		if (body == 0) {
			var body = $('html').scrollTop();
		}
		var id = 'index';
		$('section').each(function(i,elem) {
		 	var top = $(elem).offset().top;
		 	if (top < body+200)
		 		id = $(elem).attr('id');
		});
		$('.scroll li').removeClass('active');
		$('.scroll li a[href="#' + id + '"]').parent().addClass('active');
	});
	
	$('.scroll a').click(function(e) {
		e.preventDefault();
		var topOffset = $($(this).attr('href')).offset().top-$('header').outerHeight();
		$('html,body').animate({ scrollTop: topOffset }, 600);
	});
		
/************ Smooth scroll navigation ************/

	if( window.innerWidth >= 992 ){
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				headerHeight = $('.header').height() + 40;  
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - headerHeight
				}, 800, function() {
				target.focus();
			});
			return false;
			}
			}
		});
	}

});	
	
/************* Flexslider *************/	

$(window).load(function() {
	if ($('#carousel').width() > 1000) {
		var countItem = 6;
	} else {
		var countItem = 3;
	}
	$('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: $('#carousel').width()/6,
	    itemMargin: 0,
	    minItems: 1,
		maxItems: countItem,
	    asNavFor: '#slider'
	});
 
  	$('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    sync: "#carousel"
  	});
  	
});	
