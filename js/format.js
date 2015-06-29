window.onload = (function(){
	startImagesA();
});

function startImagesA(){
	$('.imageAHolder').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500,
		dots: true,
		arrows: false,
		lazyLoad: "progressive",
		pauseOnHover: true,
	});
}
//gallery triggers
