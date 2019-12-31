const nav = $(".navigation");

const carouselSlide = $("#slide");
const carouselImages = $("#slide").children();
const carouselContainer = $(".carousel-container");

const nextBtn = document.querySelector('.down-arrow-bounce')

var counter = 1;
console.log(carouselImages[0])
var size = carouselImages[0].clientHeight;

const docWidth = document.documentElement.clientWidth;


nextBtn.addEventListener('click', changeSlide);

function changeSlide() {
	size = carouselImages[0].clientHeight;
	// carouselContainer.css('height', (size * 100 / docWidth) + "vw");
	console.log(carouselImages)
	if (counter % carouselImages.length == 0) {
		counter = 1;
		carouselSlide.css('transform', "none");
	} else {
		carouselSlide.css('transform', "translateY(" + (-(size * 100 / docWidth) * counter) + "vw)");
		counter++;
	}	
}

$(".down-arrow-bounce").hover(
  function () {
    $(this).removeClass('bounce');
  }, 
  function () {
    $(this).addClass('bounce');
  }
  );

// $('#navbar-icon').addEventListener('click', function() {
// 	//.slideToggle()
// 	$('.navbar').next().animate({width: 'toggle'});
// })