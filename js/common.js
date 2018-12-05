$(document).ready(function() {

	/* Adaptive menu */
   
    $(".menu__icon").click(function() {
		$(this).toggleClass("on");
		$(".menu").slideToggle();
		$('.our-contacts').toggleClass('hidden-div')
		return false;
	});
   	
	/* Smooth scroll navigation*/

	if( window.innerWidth >= 992 ){
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				headerHeight = $('.header').height() + 80;  
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

	
	/* Pop-up forms */

	$("a.fancy").fancybox();

	$(".cond__button, .calc-order").click(function() {
		$("#form_back input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		fixedContentPos: false,
		mainClass: 'mfp-forms'
	});

	
	/* Fixed menu */

	if ($(window).width() > 992)   {
		$(window).scroll(function () {
			var scrolled = $(window).scrollTop();
			if (scrolled >= 5) {
				$('header').addClass('scroll');				
			}
			else {
				if (scrolled < 180) {
					$('header').removeClass('scroll');					
				}
			}
		});
	}

	// Quiz

  $('.price__button').click(function(){
    if ($(this).hasClass('first')){
        $('#progress-bar').val('0');
        $(this).nextAll().removeClass('progress__active');  
       }else if ($(this).hasClass('second')){
        $(this).nextAll().removeClass('progress__active');  
        $('#progress-bar').val('34');
        $(this).prevAll().addClass('progress__active');  
        $(this).addClass('progress__active');
       }else if ($(this).hasClass('third')){
        $(this).nextAll().removeClass('progress__active');  
        $('#progress-bar').val('67');
        $(this).prevAll().addClass('progress__active'); 
        $(this).addClass('progress__active');
       } else{
        $('#progress-bar').val('100');
         $(this).addClass('progress__active');
        $(this).prevAll().addClass('progress__active');
       }
  });

/* Left-scroll */

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
		
 

});	
	
	/* Flexslider */
   	
// $(window).load(function(){

// 	if ($('.whom-op-title').is(':hidden')) {
// 			$('.clients__flexslider').flexslider({
// 		    animation: "slide",
// 		    touch: true,
// 			itemWidth: $('.clients__flexslider').width()/4,
// 			minItems: 1,
// 			maxItems: 1,
// 		});
// 		$('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
// 	        animation: "slide",
// 	        touch: true,
// 			itemWidth: $('.proof__flexslider, .lawyers__flexslider, .stories__flexslider').width()/2,
// 			minItems: 1,
// 			maxItems: 1,
// 	    });		
// 	} else if ($('.menu__icon').is(':visible')) {
// 		$('.clients__flexslider').flexslider({
// 		    animation: "slide",
// 		    touch: true,
// 			itemWidth: $('.clients__flexslider').width()/4,
// 			minItems: 2,
// 			maxItems: 2,	
// 		});
// 		$('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
// 	        animation: "slide",
// 	        touch: true,       
// 			itemWidth: $('.proof__flexslider, .lawyers__flexslider, .stories__flexslider').width()/2,		    
// 			minItems: 2,
// 			maxItems: 2,
// 	        });	
// 		}  else
// 		$('.clients__flexslider').flexslider({
// 		    animation: "slide",
// 		    touch: true,
// 			itemWidth: $('.clients__flexslider').width()/4,
// 			minItems: 4,
// 			maxItems: 4,	
// 		});	
// 		$('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
// 	        animation: "slide",
// 	        touch: true,
// 			itemWidth: $('.proof__flexslider, .lawyers__flexslider, .stories__flexslider').width()/3,
// 			minItems: 3,
// 			maxItems: 3
// 	    });
// });	