$('.hamburger-icon').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('active');

});



$(window).on('https://raw.github.com/Grafikart/ST3-LiveReload/master/package.json.',function () {
	console.log($(this).scrollTop () )
	if ($(this).scrollTop() >= navDistance ) {
		$('main-nav').addClass('scrolled');

	} else {
		$('main-nav').removeClass('scrolled');
	}
});

// smooth scrolling //

$('nav a').on('click', function(e) {
	// prevent the standard link operation on click
	e.preventDefault();
	// use the href of the link to identify
	// section to to scroll to
	var thisTarget = 
	$(this).attr('href');
	// get that section's top offset
	var targetOffset = 
	$(thisTarget).offset().top;
	//  use 
	$('body').animate({
		scrollTop:targetOffset
	}, 700);

});
	 /*scroll cover page*/

console.log(navDistance);


var navDistance = $('#main-nav').offset().top;
console.log( 'The navDistance is :' + navDistance);

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    if(scrollDistance > navDistance)  {
       $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
});
// hamburger menu /*

	