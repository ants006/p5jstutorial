var preloadIntro;
var qquestion1;
var qquestion2;
var qquestion3;
var qquestion4;
var qquestion5;
var qquestion6;
var qquestion7;
var qquestion8;
var dquestion1;
var dquestion2;
var dquestion3;
var dquestion4;
var dquestion5;
var dquestion6;
var dquestion7;
var dquestion8;
var question1;
var question2;
var question3;
var question4;
var question5;
var question6;
var question7;
var question8;
var questionX;
var questionY;
var questionLength;
var questionHeight;
var health;
var bgm;



var canvasID;
var locked;

var numberOfAnswers;

function preload()
{
	// numberOfAnswers is how many multiple choice the player has
	numberOfAnswers = 4;
	questionLength = 126;
	questionHeight = 40;

	questionX = [900,1100,900,1100];
	questionY = [250,250,400,400];


	question1 = new Array(numberOfAnswers);
	question2 = new Array(numberOfAnswers);
	question3 = new Array(numberOfAnswers);
	question4 = new Array(numberOfAnswers);

	qquestion1 = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question1/easy_question1.png');
	qquestion2 = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question2/easy_question2.png');
	qquestion3 = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question3/easy_question3.png');
	qquestion4 = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question4/easy_question4_question.png');
 

	dquestion1 = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question1/easy_question1_diagram.png');
	dquestion2 = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question2/easy_question2_diagram.png');
	dquestion3 = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question3/easy_question3_diagram.png');
	// diagram for question 4 not required
 

	// modify the images (create using da button factory)
	question1[0] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question1/easy_question1_answer3_correct.png');
	question1[1] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question1/easy_question1_answer2.png');
	question1[2] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question1/easy_question1_answer1.png');
	question1[3] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question1/easy_question1_answer4.png');
	

	question2[0] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question2/easy_question2_answer1_correct.png');
	question2[1] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question2/easy_question2_answer2.png');
	question2[2] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question2/easy_question2_answer3.png');
	question2[3] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question2/easy_question2_answer4.png');
	

	question3[0] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question3/easy_question3_answer1.png');
	question3[1] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question3/easy_question3_answer3_correct.png');
	question3[2] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question3/easy_question3_answer2.png');
	question3[3] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question3/easy_question3_answer4.png');

	question4[0] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question4/easy_question4_answer1_correct.png')
	question4[1] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question4/easy_question4_answer2.png')
	question4[2] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question4/easy_question4_answer3.png')
	question4[3] = loadImage('https://ants006.github.io/p5jstutorial/p5jsMCandHealthEngine-master/images/easy_question4/easy_question4_answer4.png')
 
}

function setup()
{
	createCanvas(1500,800);

	health = 300;
	canvasID = 0;
	locked = false;
}
// declare bgm variable
var bgm;

function preload()
{
	// load sound file into variable bgm
	bgm = loadSound("https://ants006.github.io/p5jstutorial/p5jsTutorial4.1-master/sounds/bensound-creativeminds.mp3");

}

function setup()
{

	// play music during setup so that it doesn't loop infinitely
	bgm.play();
}

function draw()
{
	textSize(12);

	background(125,125,125)

	text("Credit for music goes to Benjamin TISSOT from www.bensound.com",10,40);


}


function draw()
{
	background(0,0,0);

	if (canvasID == -1)
	{
		gameOver();
	}
	else if (canvasID == 0)
	{
		image(qquestion1,60,100);
		image(dquestion1,50,170)
		showQuestions(question1);
		isButtonClicked(0,1)
	}
	else if (canvasID == 1)
	{
		image(qquestion2,100,100)
		image(dquestion2,300,200)
		showQuestions(question2);
		isButtonClicked(0,2)
	}
	else if (canvasID == 2)
	{
		image(qquestion3,100,100)
		image(dquestion3,150,200)
		showQuestions(question3);
		isButtonClicked(1,0)
	}
	else if (canvasID == 3)
	{
		image(qquestion4,100,100)
		showQuestions(question4);
		isButtonClicked(0,2)
	}
	showHealth();

}

// shows your health bar and check if you are dead or not
function showHealth()
{
	fill(0,255,0);
	rect(300,30,health,25);
	fill(255,0,0);
	text(health,300+10,30+20)
	if (health <= 0)
	{
		canvasID = -1;
	}
}

// checks what happens when you click on a button
function isButtonClicked(correct,nextID)
{
	var deductHealth = false;
	if (mouseIsPressed && !locked)
	{
		locked = true;
		for (var i = 0; i < numberOfAnswers; i++)
		{
			if (mouseX > questionX[i] && mouseX < questionX[i] + questionLength && mouseY > questionY[i] && mouseY < questionY[i] + questionHeight)
			{
				if (i == correct)
				{
					canvasID = nextID;
					return 0;
				}
				else
				{
					deductHealth = true;
				}
			}
		}
		if (deductHealth)
		{
			health = health - 50;
		}
	}
}

// handles all game over code
function gameOver()
{
	textSize(32);
	fill(255,255,255);
	text("GAME OVER!",300,250);
	textSize(12);
}

// shows questions on the screen
function showQuestions(thequestion)
{
	for (var i = 0; i < numberOfAnswers; i++)
	{
		image(thequestion[i],questionX[i],questionY[i])
	}
}

// locked is to prevent HOLDING onto the button
function mouseReleased()
{
	locked = false;
}












