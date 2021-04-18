const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

const fonimg = new Image();
fonimg.src = "img/kombat.jpg";

const fitimg = new Image();
fitimg.src = "img/kan.png";

const fatimg = new Image();
fatimg.src = "img/ken.png";

var muw1={x:0, y:150, dx:1, dy:2};
var muw2={x:295, y:150, dx:1, dy:2};

var score = 0;

fonimg.onload = function () {
	game()
}

function game(){

	drawScore();

	update();
	render();
	requestAnimFrame(game);
}

function update(){

	muw1.x=muw1.x+2;

	if (muw1.x>=150) { 
		muw1.x=150;
		if (muw1.x==150) {muw1.x=130}	}

	muw2.x=muw2.x-2;

	if (muw2.x<=150) { 
		muw2.x=150;
		if (muw2.x==150) {muw2.x=170}
	}
}

function render(){
	context.drawImage(fonimg, 0, 0);
	context.drawImage(fitimg, muw1.x, muw1.y, 100, 90);
	context.drawImage(fatimg, muw2.x, muw2.y, 100, 90);
}

var requestAnimFrame = (function(){
	return window.requestAnimationFrame    ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame      ||
		window.msRequestAnimationFrame     ||
		function(callback){
			window.setTimeout(callback, 1000 / 20);
		};
}

	)();
function drawScore() {
    context.font = "16px Arial";
    context.fillStyle = "#0095DD";
    context.fillText("Score: "+score, 8, 20);
}	