function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(500,500);
  
}

function draw()
{
  //create a background using RGB values
  background(255,255,255)

  // bottom left cornero square
  fill(255,0,0);
  rect(200,200,100,100);

  // bottom right corner square
  fill(102,0,204);
  rect(400,400,100,100);
  
  // top bottom corner square
  fill(204,0,204);
  rect(400,0,100,100);

  // top left corner square
  fill(247,255,0);
  rect(0,0,100,100);

  fill(68,255,0);
  rect(0,400,100,100);




}


