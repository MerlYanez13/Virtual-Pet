var dog;
var database, food;
var hungry, happy;
function preload(){
hungry=loadImage("Dog.png");
happy=loadImage("happy dog.png")
}
function setup(){
    createCanvas(800,800);
    database=firebase.database();
    dog = createSprite(400,400,10,10);
    dog.addImage (hungry);
    var foodref=database.ref('food');
    foodref.on("value",readfood,showError)
}

function draw(){
    background("white");
    if(food!=undefined){
        if(keyDown(UP_ARROW)){
            changefood(food);
        }
  
    }
    
    drawSprites();
}
function showError(){
    console.log("could not read database");
}

function changefood(food){
    if(food<=0){
        food=0;
    }else{food-=1;
    dog.addImage(happy)}

    
   database.ref('/').set({
      food:food
   })
}
function readfood(data){
    food=data.val();
}