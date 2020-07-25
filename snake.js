class Snake {
    constructor(){
     this.snakeXPosition = [];  
     this.snakeYPosition = [];    
     this.xdir = 0;               
     this.ydir = 0;             
     this.tailCount = 1;          
     this.x =20;               
     this.y = 20;         
    }
  
    update(){    
      if(!this.gameOver()){   
        this.x += this.xdir;  
        this.y += this.ydir;  
        if(this.snakeXPosition.length >= this.tailCount){  
          this.snakeXPosition.shift();    
          this.snakeYPosition.shift();    
        }
        this.snakeXPosition.push(this.x);
        this.snakeYPosition.push(this.y); 
    }
    }

    eatfood(x,y){       
     if(this.x===x && this.y===y){  
    this.tailCount++;
    return true;  
     
    }
  }
    gameOver(){   
      if(this.x > 800 || this.x < 0 || this.y > 400 || this.y < 0){
        background("red");
        fill("black")
        textSize(90);
        text("GAME OVER !!! ",100,220);
        return true;
      }
     
    }

    display(){
     
     
      for(var i= 0;i<this.tailCount;i++){
        var y = this.snakeYPosition[i];
        var x = this.snakeXPosition[i];
        fill("purple");
        rect(x,y,20,20);     
      } 
}
    }