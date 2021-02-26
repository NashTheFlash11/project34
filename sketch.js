const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImage
var hero;
var rope;
var bottom;

var block1, block2, block3, block4, block5, block6, block7, block8;
var block9, block10, block11, block12, block13, block14, block15, block16;
var block17, block18, block19, block20, block21, block22, block23, block24;

function preload() {
//preload the images here
  backgroundImage = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1800, 800);

  engine = Engine.create();
  world = engine.world;
  
  bottom = new Ground(900, 775, 1800, 20);
  hero = new Hero(500, 200, 106);
  rope = new Rope(hero.body, {x: 210, y: 50})
  monster = new Monster(1500, 500, 20);

  block1 = new Block(800, 600, 75, 75);
	block2 = new Block(800, 520, 75, 75);
	block3 = new Block(800, 440, 75, 75);
	block4 = new Block(800, 365, 75, 75);
	block5 = new Block(800, 290, 75, 75);
	block6 = new Block(800, 215, 75, 75);
	block7 = new Block(800, 140, 75, 75);
	block8 = new Block(800, 65, 75, 75);
	
	block9  = new Block(880, 600, 75, 75);
	block10 = new Block(880, 520, 75, 75);
	block11 = new Block(880, 440, 75, 75);
	block12 = new Block(880, 365, 75, 75);
	block13 = new Block(880, 290, 75, 75);
	block14 = new Block(880, 215, 75, 75);
	block15 = new Block(880, 140, 75, 75);
	block16 = new Block(880, 65, 75, 75);

	block17 = new Block(960, 600, 75, 75);
	block18 = new Block(960, 520, 75, 75);
	block19 = new Block(960, 440, 75, 75);
	block20 = new Block(960, 365, 75, 75);
	block21 = new Block(960,290, 75, 75);
	block22 = new Block(960,215,75,75);
	block23 = new Block(960,140,75,75);
	block24 = new Block(960,65,75,75);

  Engine.run(engine);
}

function draw() {
  background(backgroundImage);

  bottom.display();
  hero.display();
  rope.display();
  monster.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY});
}

