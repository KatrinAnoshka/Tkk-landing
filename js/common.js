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

	
	/* Flexslider */
   	
$(window).load(function(){

	if ($('.whom-op-title').is(':hidden')) {
			$('.clients__flexslider').flexslider({
		    animation: "slide",
		    touch: true,
			itemWidth: $('.clients__flexslider').width()/4,
			minItems: 1,
			maxItems: 1,
		});
		$('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
	        animation: "slide",
	        touch: true,
			itemWidth: $('.proof__flexslider, .lawyers__flexslider, .stories__flexslider').width()/2,
			minItems: 1,
			maxItems: 1,
	    });		
	} else if ($('.menu__icon').is(':visible')) {
		$('.clients__flexslider').flexslider({
		    animation: "slide",
		    touch: true,
			itemWidth: $('.clients__flexslider').width()/4,
			minItems: 2,
			maxItems: 2,	
		});
		$('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
	        animation: "slide",
	        touch: true,       
			itemWidth: $('.proof__flexslider, .lawyers__flexslider, .stories__flexslider').width()/2,		    
			minItems: 2,
			maxItems: 2,
	        });	
		}  else
		$('.clients__flexslider').flexslider({
		    animation: "slide",
		    touch: true,
			itemWidth: $('.clients__flexslider').width()/4,
			minItems: 4,
			maxItems: 4,	
		});	
		$('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
	        animation: "slide",
	        touch: true,
			itemWidth: $('.proof__flexslider, .lawyers__flexslider, .stories__flexslider').width()/3,
			minItems: 3,
			maxItems: 3
	    });
});	