var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000,400);

  milk = new Food ()
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods)

}

function draw() {
  background(46,139,87);
  drawSprites();

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+lastFed%12 + "PM", 350,30);
  }else if(lasFed==0){
     text("Last Feed Time : 12 AM",350,30);
  }else{
     text("Last Fed : "+lastFed + "AM", 350,30);
  }

  milk.display();
  }
  

//function to read food Stock



//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodDtock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}


//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}