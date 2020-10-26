class Food{
    constructor(){
      this.lastFed;  
      this.foodStock;
      this.image=loadImage("images/Milk.png");
    }

    getFoodStock(){
      var foodStockref = database.ref('foodS');
      foodStockref.on("value",function(data){
      foodS = data.val();
      })
    }
    
    updateFoodStock(){
      database.ref("/").update(foodS);       
    }
    
    deductFood(){
    
    }
    bedroom(){
      background(bedroomIMG, 550,500);
    }
    
    garden(){
      background(gardenIMG,550,500);
  
    }
  
    washroom(){
      background(washroomIMG,550,500);

    }

    display(){

      var x=80,y=100;

      imageMode(CENTER);

       if(this.foodStock!=0){
       for(var i=0; i<foodS;i++){
       if(i%10==0){
            x=10;
            y=y+60;
        }

        image(this.image,x,y,70,70);
        x=x+30;
    }
  } 
  }
      getFoodStock(){
        var foodStockref = database.ref('foodS');
        foodStockref.on("value",function(data){
          foodS=data.val();
        })
      }
      updateFoodStock(){
        database.ref("/").update(foodS);
      }

  }
