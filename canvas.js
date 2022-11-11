function setElementPosition(el, x, y) {
	el.style.position = 'absolute';
	el.style.left = x + 'px';
	el.style.top = y + 'px';
}

var logo = document.getElementById('DVD_logo');
var t0 = 0;
var x = 0;
var y = 0;
var vx = 0.1;
var vy = 0.1;
window.requestAnimationFrame(loop);
function loop(t) {
	var dt = t - t0;
	t0 = t;
	
	var w = window.innerWidth;
	var h = window.innerHeight;
	
	x += vx * dt;
	y += vy * dt; 
	if (x < 0 || w-logo.width <= x) {
		vx *= -1;
		x += vx * dt;
	}
	if (y < 0 || h-logo.height <= y) {
		vy *= -1;
		y += vy * dt;
	}
	
	setElementPosition(logo, x, y);
	window.requestAnimationFrame(loop);
}
