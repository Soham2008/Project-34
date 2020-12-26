
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {

  createCanvas(700, 400);


  engine = Engine.create();

  world = engine.world;

  bob1 = new Pendulum(200, 300, "lime");
  bob2 = new Pendulum(250, 300, "blue");
  bob3 = new Pendulum(300, 300, "brown");
  bob4 = new Pendulum(350, 300, "pink");
  bob5 = new Pendulum(400, 300, "magenta");


  rope1 = new Sling(bob1.body, { x: 200, y: 100 });
  rope2 = new Sling(bob2.body, { x: 250, y: 100 });
  rope3 = new Sling(bob3.body, { x: 300, y: 100 });
  rope4 = new Sling(bob4.body, { x: 350, y: 100 });
  rope5 = new Sling(bob5.body, { x: 400, y: 100 });

  Engine.run(engine);

}


function draw() {

  background("cyan");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}


function mouseDragged() {

  Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });

}
