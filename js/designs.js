// const nav = $(".navigation");

const carouselSlide = $("#slide");
const carouselImages = $("#slide").children();
const carouselContainer = $(".carousel-container");

const nextBtn = document.querySelector('.down-arrow-bounce')

var counter = 1;
console.log(carouselImages[0])
var size = carouselImages[0].clientHeight;

var docWidth = document.documentElement.clientWidth;

nextBtn.addEventListener('click', changeSlide);

/** HELPER FUNCTION **/
function vhTOpx(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var result = (y*value)/100;
  return result;
}


function changeSlide() {
	var margin = carouselImages[0].style.marginTop.toString();
	margin = margin.substring(0, margin.length - 2);
	margin = vhTOpx(margin);
	console.log('margin', margin, vhTOpx(margin));
	var size = carouselImages[0].clientHeight + margin * 2;
	// carouselContainer.css('height', (size * 100 / docWidth) + "vw");
	console.log(size);
	// console.log(carouselImages)
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

