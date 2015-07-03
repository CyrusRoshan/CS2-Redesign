window.onload = (function(){
	formatSection1();
	//startImagesA();
});

function formatSection1(){
	$(".section1 .center .right").css("height", $(".section .center .left").outerHeight() + "px");
}

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
