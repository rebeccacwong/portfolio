/** SITE INITIALIZATION **/
$('html').css('display', 'none');
$(document).ready(main);
function main() {
	$('html:not(.overlay-text)').fadeIn(800);
	$('.overlay-text').css('display', 'none');
	checkAnimation();
}

/** FADE SCREENS **/
function fade() {
	if (this.href === "mailto:rebeccacwong25@gmail.com" || this.target === "_blank") {
		return;
	}
	event.preventDefault();
	newLocation = this.href;
	$('body').fadeOut(800, function() {
		window.location = newLocation;
		this.addClass('active')
	});
}


/** BOUNCE ARROW ANIMATION **/
$(".down-arrow-bounce").hover(
  function () {
    $(this).removeClass('bounce');
  }, 
  function () {
    $(this).addClass('bounce');
  }
);


/** NAVIGATION ANIMATION **/
const navButton = document.querySelector('#navbar-button');
navButton.addEventListener('click', function() {
	toggleNav()
})

function toggleNav() {
	$('.navbar').slideToggle();
}

/** CALL TO ACTION ANIMATION **/
var computed = 0;
var callStarted = false;
$('.call-to-action').hover(function() {
	if (!callStarted) {
		callStarted = true;
		var arrowSlide = this.children[0];
		var rect = arrowSlide.getClientRects()[0];
		var compStyles = window.getComputedStyle(arrowSlide);
		var curr = compStyles.getPropertyValue('left').substring(0, compStyles.getPropertyValue('left').length - 2);
		computed = (100 / document.documentElement.clientWidth) * parseInt(curr);
		($(this).children()).animate({left: computed + 3 + "vw", opacity: 1}, 100);
	}
}, function() {
	($(this).children()).animate({left: computed + 'vw', opacity: 0}, 100);
	callStarted = false;
})


/** BINARY RAIN **/
var c = document.getElementById("binary-rain");
var scale = 2.5;
c.width = c.width * scale;
c.height = c.height * scale;
var ctx = c.getContext("2d");
ctx.scale(scale, scale);

const font_size = 7;
const columns = c.width/(font_size);
const drops = [];
for(var x = 0; x < columns; x++) {
	drops[x] = 1; 
}

/** Returns a random integer between 0 and max, non-inclusive. */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/** Draws binary rain in the #binary-rain canvas. */
function draw()
{
	ctx.fillStyle = "rgba(59, 76, 102, 0.08)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#f4d6cb"; 	// text color
	ctx.font = font_size + "px Monaco";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		var text = getRandomInt(2).toString();
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		if(drops[i]*font_size > c.height && Math.random() > 0.975) {
			drops[i] = 0;
		}
		
		drops[i]++;
	}
}

setInterval(draw, 100);

/** VIEWPORT ANIMATION **/
function isElementInViewport(elem) {
	console.log(elem)
    var top_of_element = $(elem).offset().top - $(window).scrollTop();
    var bottom_of_element = top_of_element + $(elem).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top_of_screen = $(window).scrollTop();
    console.log(top_of_element, bottom_of_element, bottom_of_screen, top_of_screen)
    return (bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element);
}


const overlays = $('.overlay-text').toArray();
function checkAnimation() {
	var showed = [];
	for (i = 0; i < overlays.length; i++) {
		var elem = overlays[i]
		console.log(isElementInViewport(elem), elem)
		if (isElementInViewport(elem)) {
        // Start the animation
        	console.log('showed', elem.innerHTML)
        	showed.push(i);
        	elem.style.display = 'initial';
    	}
	}
	for (i = 0; i < showed; i++) {
		overlays.pop(i)
	}
}

$(window).scroll(function(){
    checkAnimation();
});
