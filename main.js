canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_width = 75;
car_height = 100;
car_X = 5;
car_Y = 225;



background_image = "parkingLot.jpg";
car_image = "car2.png";

function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	car_imageTag = new Image();
	car_imageTag.onload = uploadCar;
	car_imageTag.src = car_image;
}

function uploadBackground() {
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
	ctx.drawImage(car_imageTag, car_X, car_Y, car_width, car_height);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log("X = " + car_X, "Y = " + car_Y);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_Y >= 0){
		car_Y = car_Y - 10;
		uploadBackground();
		uploadCar();
	}
}

function down()
{
	if(car_Y <= 300){
		car_Y = car_Y + 10;
		uploadBackground();
		uploadCar();
	}
}

function left()
{
	if(car_X >= 0){
		car_X = car_X - 10;
		uploadBackground();
		uploadCar();
	}
}

function right()
{
	if(car_X <= 700){
		car_X = car_X + 10;
		uploadBackground();
		uploadCar();
	}
}