/** PORTFOLIO CAROUSEL **/
var front = 0;	// front frame, index in const frames array
var curr = 0;	// front frame, index in dynamic frames in html
const frames = $(".frame td").toArray();
console.log(frames);
console.log(frames[0].innerHTML);


function slide() {
	var html = "<td>" + frames[front].innerHTML + "</td>";
	var html2 = "<td></td>";
	var pos = $(".portfolio-slideshow").scrollLeft();
	console.log(pos);
	$(".portfolio-slideshow").animate({ scrollLeft: '+=150' }, 1000);
	// $('.frame tr').find('td:eq(' + curr + '),th:eq(' + curr + ')').remove();
	// $('.frame tr').find('td:eq(' + curr + '),th:eq(' + curr + ')').innerHTML = "";
	console.log($(".frame tr"));
	$('.frame tr')[0].innerHTML += html;
	$('.frame tr')[1].innerHTML += html2;
	front = (front + 1) % Math.round(frames.length / 2);
	console.log(front);
	console.log($(".frame td"));
	// $(".portfolio-slideshow").scrollLeft(pos + 150);
}


// $(".portfolio-slideshow").scroll(function() {console.log("scrolled")})

// setInterval(slide, 4000)

/** NAVIGATION ANIMATION **/
const navButton = document.querySelector('#navbar-button');
navButton.addEventListener('click', openNav)

function openNav() {
	$('.navbar').slideToggle();
}