//ManyRooms interactive 2D space generation project by Amanda Leiserowitz

//declare global variables

var wallArray;
var floorArray;

var door1, door2, door3;
var plant1, plant2, plant3;
var paint1, paint2, paint3;
var mat, spider, shoe;
var puddle1, puddle2, puddle3;

function setup() {
	createCanvas(640, 640);
	//load all assets
	door1 = loadImage("assets/door1.jpg");
	door2 = loadImage("assets/door2.jpg");
	door3 = loadImage("assets/door3.jpg");
	plant1 = loadImage("assets/plant1.png");
	plant2 = loadImage("assets/plant2.png");
	plant3 = loadImage("assets/plant3.png");
	paint1 = loadImage("assets/paint1.jpg");
	paint2 = loadImage("assets/paint2.jpg");
	paint3 = loadImage("assets/paint3.jpg");
	mat = loadImage("assets/mat.png");
	spider = loadImage("assets/spider.png");
	shoe = loadImage("assets/shoe.png");
	puddle1 = loadImage("assets/puddle1.png");
	puddle2= loadImage("assets/puddle2.png");
	puddle3 = loadImage("assets/puddle3.png");
	rug1 = loadImage("assets/rug1.png");
	rug2 = loadImage("assets/rug2.png");
	
	//draw BG and set up asset arrays
	resetSketch();
	
	//reset functionality
	var button = createButton("reset");
	button.mousePressed(resetSketch);
	
}

function draw() {
	//display instructions
	fill(0,0,0);
	textSize(16);
	text('Click Anywhere!', 50, 20);
}

function resetSketch() {
	//resetSketch and button code from The Coding Train
	//https://www.youtube.com/watch?v=lm8Y8TD4CTM
	
	//color arrays to randomize the wall and floor colors
	var fColorArray = ['#f7b47d', '#f5f77e', '#8dc9ab', '#649cba', '#7b7bb2', '#b44cff', '#845772', '#c41936'];
	var wColorArray = ['#87a8dd', '#ed7c5a', '#c6c27f', '#3b5b32', '#555b77', '#d0add8', '#c16892', '#7c1d2d'];
	
	//create backrgound/wall color
	background(random(wColorArray));
	
	//add floor
	noStroke();
	fill(random(fColorArray));
	rect(0, 440, width, 200);
	
	//fill asset arrays with ALL assets
	//put all assets in appropriate array
	floorArray = [mat, spider, shoe, puddle1, puddle2, puddle3, rug1, rug2];
	wallArray = [door1, door2, door3, plant1, plant2, plant3, paint1, paint2, paint3];
}

function wallDraw(){
	//choose a random wall asset IF there are still assets in the array
	//https://stackoverflow.com/questions/24403732/
	var temp = random(wallArray);
		
	//check if it is a door
	//if so, place it touching floor
	if (temp == door1 || temp == door2 || temp == door3) {
		imageMode(CORNER);
		image(temp, mouseX, 70);
	}
	//check if it's a potted plant
	//if so, place it touching floor
	else if (temp == plant1 || temp == plant2 || temp == plant3) {
		imageMode(CORNER);
		image(temp, mouseX, 245);
	}
	//if it's a painting place it at mouseX, mouseY
	else {
		imageMode(CENTER);
		image(temp, mouseX, mouseY);
	}

}

function floorDraw() {
	//choose a random floor asset and draw it at mouseX, mouseY
	imageMode(CENTER);
	var temp = random(floorArray);
	image(temp, mouseX, mouseY);
}

function mouseClicked(){
	//call wallDraw if wall is clicked
	if (mouseY < 440 && mouseX <= width)  {
		wallDraw();
	}
	else if (mouseY > 440 && mouseX <= width) {
		//call floorDraw if floor is clicked
		floorDraw();
	}
}