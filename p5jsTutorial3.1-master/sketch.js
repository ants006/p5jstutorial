var buttonNothing;
var buttonHoverOver;
var buttonClick;
var imgCatInMug;
var button2X;
var button2Y;

function preload()
{
	imgCatInMug = loadImage('https://ants006.github.io/p5jstutorial/p5jsTutorial3.1-master/redpanda.jpg');

	buttonClick = loadImage('https://ants006.github.io/p5jstutorial/p5jsTutorial3.1-master/button_dabuttonfactory-ltd.png');
buttonHoverOver = loadImage('https://ants006.github.io/p5jstutorial/p5jsTutorial3.1-master/button_red-panda-d.png');
  buttonNothing = loadImage('https://ants006.github.io/p5jstutorial/p5jsTutorial3.1-master/button_redpandaboom.png');
}

function setup()
{
	createCanvas(800,600);

	button2X = 1;
	button2Y = 1;
  
}

function draw()
{
	background(245,12,12)


	// Example 1: easy to understand - Start

	image(imgCatInMug,10,150,400,250);

	// Example 1: easy to understand - End




	// Example 2: less code but harder to understand - Start

	strokeWeight(3);



	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y && mouseY < button2Y+50)
	{
		image(buttonHoverOver,button2X,button2Y);
		if (mouseIsPressed)
		{
			image(buttonClick,button2X,button2Y);
		}
	}
	else
	{
		image(buttonNothing,button2X,button2Y);
	}


	// Example 2: less code but harder to understand - End


}