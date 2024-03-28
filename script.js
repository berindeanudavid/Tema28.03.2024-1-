function setup() {
    createCanvas(200, 100);
}

function draw() {
    background(240,240,240);
    solarSystem();
}

function solarSystem()
{
    //motion lines
    stroke("black");
    fill(240,240,240);
    ellipse(100,50,180,70);
    ellipse(100,50,150,60);
    ellipse(100,50,120,50);
    ellipse(100,50,90,40);
    ellipse(100,50,65,36);
    //sun
    fill("yellow");
    circle(100,50,10)
    triangle(97, 45, 94, 50, 89, 45);
    triangle(94, 50, 97, 55, 88, 55);
    triangle(97,55,104,55,100,61);
    triangle(103.5,55,105,50,112,54);
    triangle(106,50,103,45,112,45);
    triangle(97,45,103,45,100,39);
    //planets
    fill(176,217,225);
    circle(80,36,5);
    fill(225,176,186);
    circle(60,41,7);
    fill(225,200,220);
    circle(47,38,10);
    fill(176,217,225);
    circle(152,38,13);
    textSize(5);
    text("P4",149,40);
    fill(176,217,176);
    circle(183,62,17);
    textSize(5);
    text("P5",180,64);
}
