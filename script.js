$(document).ready( function() {
	$("#stickynav").hide();
	$("#stickynav").fadeIn(1000);
	$(".head").hide();
	$(".head").fadeIn(1000);
	bounce();
	if ($(window).height() > 900) {
		$("#welcome").css("height", $(window).height()*1.1+"px");
		$("#bioDescr").css("height", $(window).height()*1.1+"px");
		$("#projDescr").css("height", $(window).height()*1.1+"px");
		$("#pictureSec").css("height", $(window).height()*1.1+"px");
		$("#contactSection").css("height", $(window).height()*1.1+"px");
	}

	function bounce() {
		window.setInterval(function() {
			$("#chevron").effect( "bounce", { times: 1 }, "slow" );
		}, 600);
	}	

	sectionColor();

	function sectionColor() {
		var welcomeSelection = ($("#welcome").offset().top + $(window).height())*0.9;
		var aboutSelection = ($("#bioDescr").offset().top + $(window).height());
		var projSelection = ($("#projDescr").offset().top + $(window).height());
		var photoSelection = ($("#pictureSec").offset().top + $(window).height());
		var contactSelection = ($("#contactSection").offset().top + $(window).height());
 		var windowTop = $(window).scrollTop();
 		var windowMid = windowTop + ($(window).height())/2;
 		if (windowMid < welcomeSelection && windowTop < aboutSelection) {
 			$("#welcomeButton").addClass('active');
 		} else if (windowMid >=  welcomeSelection) {
 			$("#welcomeButton").removeClass('active');
 		}
 		if (windowMid < aboutSelection && windowMid > welcomeSelection) {
 			$("#aboutButton").addClass('active');
 		} else if (windowMid >= aboutSelection || windowMid < welcomeSelection) {
 			$("#aboutButton").removeClass('active');
 		} 
 		if (windowMid < projSelection && windowMid > aboutSelection) {
 			$("#projButton").addClass('active');
 		} else if (windowMid >= projSelection || windowMid < aboutSelection) {
 			$('#projButton').removeClass('active');
 		}
 		if (windowMid < photoSelection && windowMid > projSelection) {
 			$('#photoButton').addClass('active');
 		} else if (windowMid >= photoSelection || windowMid < projSelection) {
 			$('#photoButton').removeClass('active');
 		}
 		if (windowMid > photoSelection) {
 			$('#contactButton').addClass('active');
 		} else {
 			$('#contactButton').removeClass('active');
 		}
	}

 	$(window).scroll( function(){

 		sectionColor();
    	$('.down').each( function() {
    		var windowTop = $(window).scrollTop();
    		var bottomOfButton = $(this).offset().top + $(this).outerHeight();
    		if (bottomOfButton < windowTop) {
    			$(this).remove();
    		}
    	});
    	$('.hideme').each( function(){

        	var three4thsOfObject = $(this).offset().top + ($(this).outerHeight())*(3/4);
        	var top_of_window = $(window).scrollTop();
        	var bottom_of_window = top_of_window + $(window).height();

        	if( bottom_of_window > three4thsOfObject ){

            	$(this).animate({'opacity':'1'},700);

        	}

    	}); 

	});


	var $chevron = $("#chevronBtn");
	$chevron.click( function(event) {
		event.preventDefault();
		var screenWidth = $(document).height()/5-0.01*$(document).height();
		$('html, body').animate({scrollTop:screenWidth}, 300);
		$chevron.fadeOut(1000);
		return false;
	});
	
	// WELCOME SCROLL HANDLER
	var $proj = $("#welcomeID");
	$proj.click( function(event) {
		event.preventDefault();
		var screenWidth = 0.01*$(document).height();
    	$('html, body').animate({ scrollTop: screenWidth }, 300);
    	return false;
	});

	// PROJECT SCROLL HANDLER
	var $proj = $("#projButtonID");
	$proj.click( function(event) {
		event.preventDefault();
		var screenWidth = 2*$(document).height()/5-0.01*$(document).height();
    	$('html, body').animate({ scrollTop: screenWidth }, 300);
    	return false;
	});

	// ABOUT SCROLL HANDLER
	var $proj = $("#aboutButtonID");
	$proj.click( function(event) {
		event.preventDefault();
		var screenWidth =  $(document).height()/5-0.01*$(document).height();
    	$('html, body').animate({ scrollTop: screenWidth }, 300);
    	return false;
	});

	// SKILLS SCROLL HANDLER
	var $proj = $("#skillsButtonID");
	$proj.click( function(event) {
		event.preventDefault();
		var screenWidth = 3*$(document).height()/5-0.01*$(document).height();
    	$('html, body').animate({ scrollTop: screenWidth }, 300);
    	return false;
	});

	// CONTACT SCROLL HANDLER
	var $proj = $("#contactButtonID");
	$proj.click( function(event) {
		event.preventDefault();
		var screenWidth = 4*$(document).height()/5-0.01*$(document).height();
    	$('html, body').animate({ scrollTop: screenWidth }, 300);
    	return false;
	});


	$("#buttons").mouseenter(function() {
		$('#buttons').fadeTo('fast', 1);
	});
	$("#buttons").mouseleave(function() {
		$('#buttons').fadeTo('fast', 0.75);
	});

});