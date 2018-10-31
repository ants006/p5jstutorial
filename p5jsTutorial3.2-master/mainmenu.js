var buttonMainMenuEasy;
var imageMainMenuTitle;
var buttonMainMenuHard;
var imageMainMenuTitle;
var buttonMainMenuMedium;
var imageMainmenuTitle;

var buttonMainMenuEasyX;
var buttonMainMenuEasyY;
var buttonMainMenuHardX;
var buttonMainMenuHardY;
var buttonMainMenuMediumX;
var buttonMainMenuMediumY;


function preloadMainMenu()
{
	buttonMainMenuEasy = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonEasy.png');
	imageMainMenuTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleMainMenu.png');	
	buttonMainMenuHard = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonHard.png');
	imageMainMenuTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleMainMenu.png');	
	buttonMainMenuMedium = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonMedium.png')
	imageMainMenuTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleMainMenu.png')
}

function setupMainMenu()
{
	
	buttonMainMenuEasyX = 200;
	buttonMainMenuEasyY = 110;
	buttonMainMenuHardX = 400;
	buttonMainMenuHardY = 310;
	buttonMainMenuMediumX = 600;
	buttonMainMenuMediumY = 510;
}

function drawMainMenu()
{
	background(255,125,0)

	image(imageMainMenuTitle,400,10);

	image(buttonMainMenuEasy,buttonMainMenuEasyX,buttonMainMenuEasyY);

	if (mouseX > buttonMainMenuEasyX && mouseX < buttonMainMenuEasyX + 200 && mouseY > buttonMainMenuEasyY && mouseY < buttonMainMenuEasyY+50 && mouseIsPressed)
	{
		canvasID = -2;
	}


	image(buttonMainMenuHard,buttonMainMenuHardX,buttonMainMenuHardY);

	if (mouseX > buttonMainMenuHardX && mouseX < buttonMainMenuHardX + 200 && mouseY > buttonMainMenuHardY && mouseY < buttonMainMenuHardY+50 && mouseIsPressed)
	{
		canvasID = -3;
	}

	image(buttonMainMenuMedium,buttonMainMenuMediumX,buttonMainMenuMediumY);

	if (mouseX > buttonMainMenuMediumX && mouseX < buttonMainMenuMediumX + 200 && mouseY > buttonMainMenuMediumY && mouseY < buttonMainMenuMediumY+50 && mouseIsPressed)
	{
		canvasID = -4;
	}

}




 


 

 

 