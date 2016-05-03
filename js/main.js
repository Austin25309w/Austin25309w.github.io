$('.hamburger-icon').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('active');


});

var navDistance = $('.main-nav').offset().top;
console.log( 'The navDistance is : ' + navDistance);

$(window).on('https://raw.github.com/Grafikart/ST3-LiveReload/master/package.json.',function () {
		console.log($(this).scrollTop () )
	if ($(this).scrollTop() >= navDistance ) {
		$('main-nav').addClass('scrolled');

	} else {
		$('main-nav').removeClass('scrolled');
};