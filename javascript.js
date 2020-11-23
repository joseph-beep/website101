var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var i = 0;

window.setInterval(() => {
    ctx.clearRect(0,0,canvas.width,canvas.height);

	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0 + i, 0, 150, 75);

	ctx.fill

	i++;
}, 60); 