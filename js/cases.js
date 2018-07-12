$(document).ready(function(){

	// Lowering the opacity of all slide in divs
	$('.com_banner div').css('opacity',0.4);

	// Using the hover method 
	$('.com_banner').hover(function(){

		// Executed on mouseenter
		
		var el = $(this);
		
		// Find all the divs inside the banner div,
		// and animate them with the new size
		
		el.find('div').stop().animate({width:290,height:290},'fast',function(){
			// Show the "Visit Company" text:
			el.find('p').fadeIn('fast');
		});

	},function(){

		// Executed on moseleave

		var el = $(this);
		
		// Hiding the text
		el.find('p').stop(true,true).hide();
		
		// Animating the divs
		el.find('div').stop().animate({width:60,height:60},'fast');

	}).click(function(){
		
		// When clicked, open a tab with the address of the hyperlink
		
		//window.open($(this).find('a').attr('href'));
		
	});
});