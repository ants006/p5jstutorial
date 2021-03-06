/*
  canvasID - 0 - intro
  canvasID - 1 - main menu
  canvasID - 2 - easy
  canvasID - 3 - hard
  canvasID - 4 - medium
*/
 

var canvasID;

function preload()
{

	preloadIntro();
	preloadMainMenu();
	preloadEasy();
	preloadHard();
	preloadMedium();

}

function setup()
{
	createCanvas(800,600);

	setupIntro();
	setupMainMenu();
	setupEasy();
	setupHard();
	setupMedium();

	canvasID = 0;
}

function draw()
{
	textSize(32);

	background(125,125,125)

	if (canvasID == 0)
	{
		drawIntro();
	}
	if (canvasID == 1)
	{
		drawMainMenu();
	}
	if (canvasID == 2)
	{
		drawEasy();
	}
	if (canvasID == 3)
	{
		drawHard();
	}
	if (canvasID == 4)
	{
		drawMedium();
	}

	
	}
	
	



function mouseReleased()
{
	if (canvasID == -1)
	{
		canvasID = 1;
	}
	if (canvasID == -2)
	{
		canvasID = 2;
	}
	if (canvasID == -3)
	{
		canvasID = 3;
	}
	if (canvasID == -4)
	{
		canvasID = 4;
	}
}