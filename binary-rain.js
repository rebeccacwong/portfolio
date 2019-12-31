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