function setElementPosition(el, x, y) {
	el.style.position = 'absolute';
	el.style.left = x + 'px';
	el.style.top = y + 'px';
}

function randomColor() {
	var colors = ['aqua','blue','fuchsia','gray','green','lime','maroon','navy','olive','purple','red','silver','teal','yellow']
	return colors[Math.floor(Math.random()*colors.length)]
}

var logo = document.getElementById('DVD_logo');
var svg = document.getElementById('DVD_svg');
var t0 = 0;
var x = 0;
var y = 0;
var vx = 0.1;
var vy = 0.1;
var color = randomColor();
window.requestAnimationFrame(loop);
function loop(t) {
	var dt = t - t0;
	t0 = t;
	
	var w = window.innerWidth;
	var h = window.innerHeight;
	
	x += vx * dt;
	y += vy * dt; 
	if (x < 0 || w-svg.width <= x) {
		vx *= -1;
		x += vx * dt;
		var new_color = randomColor();
		while (new_color == color) {
			new_color = randomColor();
		}
		color = new_color;
		svg.style = `filter: drop-shadow(-100px 0px 0px ${color});`;
	}
	if (y < 0 || h-svg.height <= y) {
		vy *= -1;
		y += vy * dt;
		var new_color = randomColor();
		while (new_color == color) {
			new_color = randomColor();
		}
		color = new_color;
		svg.style = `filter: drop-shadow(-100px 0px 0px ${color});`;
	}
	
	setElementPosition(logo, x, y);
	window.requestAnimationFrame(loop);
}
