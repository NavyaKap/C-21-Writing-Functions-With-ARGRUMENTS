var fixedRect, movingRect ;
//Boolean values true or false     

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);

  movingRect = createSprite(400, 200, 50, 50);
movingRect.shapeColor="red"
  fixedRect = createSprite(200,200,80,50);
fixedRect.shapeColor="blue"

gameObject1=createSprite(100,100,50,50);
gameObject1.shapeColor="green";

gameObject2=createSprite(200,100,50,50);
gameObject2.shapeColor="green";

gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor="green";

gameObject4=createSprite(400,100,50,50);
gameObject4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
 

 movingRect.x = World.mouseX;
 movingRect.y= World.mouseY;

 if(isTouching(movingRect,gameObject1)){

  movingRect.shapeColor="yellow";
  gameObject1.shapeColor="yellow";
 }
 else{
  movingRect.shapeColor="red";
  gameObject1.shapeColor="green";
 }

 if(isTouching(movingRect,gameObject2)){

  movingRect.shapeColor="yellow";
  gameObject2.shapeColor="yellow";
 }
 else{
  movingRect.shapeColor="red";
  gameObject2.shapeColor="green";
 }

 if(isTouching(movingRect,gameObject3)){

  movingRect.shapeColor="yellow";
  gameObject3.shapeColor="yellow";
 }
 else{
  movingRect.shapeColor="red";
  gameObject3.shapeColor="green";
 }

 if(isTouching(movingRect,gameObject4)){

  movingRect.shapeColor="yellow";
  gameObject4.shapeColor="yellow";
 }
 else{
  movingRect.shapeColor="red";
  gameObject4.shapeColor="green";
 }

 if(isTouching(movingRect,fixedRect)){
   movingRect.shapeColor = "yellow";
   fixedRect.shapeColor = "yellow";


 }
 else{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "blue";
 }


//calling a  function- using the function
 // isTouching()

  drawSprites();

}

//isTouching function declaration
function isTouching(object1,object2){

  if(object1.x-object2.x  < object1.width/2+object2.width/2

    && object2.x-object1.x  < object1.width/2+object2.width/2
    
    && object1.y-object2.y  < object1.height/2+object2.height/2
    && object2.y-object1.y < object1.height/2+object2.height/2)
    
    {
      return true;
     
    }
    else{

    return false;
    
     }
}
  










