var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
var t0 = 0;
var x = 0;
var y = 0;
var vx = 0.1;
var vy = 0.1;
window.requestAnimationFrame(loop);
function loop(t) {
	var dt = t - t0;
	t0 = t;
	
	x += vx * dt;
	y += vy * dt; 
	if (x < 0 || 480-30 <= x) {
		vx *= -1;
		x += vx * dt;
	}
	if (y < 0 || 360-30 <= y) {
		vy *= -1;
		y += vy * dt;
	}
	ctx.fillStyle = "red";
	ctx.fillRect(0, 0, 480, 360);
	ctx.fillStyle = "blue";
	ctx.fillRect(x, y, 30, 30);
	window.requestAnimationFrame(loop);
}
