//ManyRooms interactive 2D space generation project by Amanda Leiserowitz

var numObjs = 10;

function setup() {
	createCanvas(640, 640);
	//load all assets
	
	
	//put all assets in appropriate array

	var floorArray = [];
	var wallArray = [];
	
	//draw BG
	resetSketch();
	
	//reset functionality
	var button = createButton("reset");
	button.mousePressed(resetSketch);
	
}

function draw() {
	//display instructions?
	textSize(16);
	text('Click Anywhere!', 50, 20);
	fill(0,0,0);
}

function resetSketch() {
	//resetSketch and button code from The Coding Train
	//https://www.youtube.com/watch?v=lm8Y8TD4CTM
	
	var fColorArray = ['#f7b47d', '#f5f77e', '#8dc9ab', '#649cba', '#7b7bb2', '#b44cff', '#845772', '#c41936'];
	var wColorArray = ['#87a8dd', '#ed7c5a', '#c6c27f', '#3b5b32', '#555b77', '#d0add8', '#c16892', '#7c1d2d'];
	
	//create backrgound/wall color
	background(random(wColorArray));
	//add floor
	noStroke();
	fill(random(fColorArray));
	rect(0, 440, width, 200);
}

function searchArray(Array) {
	//chooses a random object from the array given
	var target = random(0, numObjs);
	
	let i = 0;
	while (i <= target){
		if (i == target) {
			return i;
		}
		else {
			i++;
		}
	}	
}

function wallDraw(){
	//choose a random wall asset and draw it at mouseX, mouseY or mouseX, 70 depending on the type of object
	//var temp = random(wallArray);
	//image(temp, mouseX, mouseY);
	fill(100, 150, 240);
	rect(mouseX, 70, 200, 370)
}

function floorDraw() {
	//choose a random floor asset and draw it at mouseX,
	//var temp = random(floorArray);
	//image(random(floorArray), mouseX, mouseY);
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