//Create variables here
var dog,happyDog,foodS = 20,foodStock = 20;
var database;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  
  var foodStock = database.ref('food')
  foodStock.on("value",function(data){
    foodS = data.val();
  });

  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.5;

  
}


function draw() {  
  background(46, 139, 87);
  fill("red");
  text("NOTE:PRESS UP ARROW KEY TO FEED DRAGO MILK",120,30);
  text("FOOD REMAINING : " + foodS,220,50);  

  if(foodS !== undefined){
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happydogImg);
    }

    
    drawSprites();
  
  }
  
}


function writeStock(x){

  if(x <= 0){
    x = 0;
  }
  else{
    x--;
  }
  database.ref('/').update({
    food:x
  })
}



