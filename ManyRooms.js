//ManyRooms interactive 2D space generation project by Amanda Leiserowitz

function setup() {
	createCanvas(640, 640);
	//load all assets
	
	//reset functionality
	resetSketch();
	var button = createButton("reset");
	button.mousePressed(resetSketch);
	
}

function resetSketch() {
	//resetSketch and button code from The Coding Train
	//https://www.youtube.com/watch?v=lm8Y8TD4CTM
	
	//create backrgound/wall color
	background(100,100,100);
	//add floor
	noStroke();
	fill(255,255,114);
	rect(0, 440, width, 200);
}

function draw() {
	//display instructions?
}

function wallDraw(){
	//choose a random wall asset and draw it at mouseX, mouseY or mouseX, 70 depending on the type of object
	fill(100, 150, 240);
	rect(mouseX, 70, 200, 370)
}

function floorDraw() {
	//choose a random floor asset and draw it at mouseX,
	fill(255,0,0);
	rect(mouseX, mouseY, 50,50);
}

function mouseClicked(){
	//place an item on the wall if wall is clicked
	if (mouseY < 440 && mouseX <= width)  {
		wallDraw();
	}
	else if (mouseY > 440 && mouseX <= width) {
		//if floor is clicked place item on floor
		floorDraw();
	}
}