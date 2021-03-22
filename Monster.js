class Monster{
    constructor(x, y,width,height) {
        var options = {
           
            frictionAir:0.005,
            density: 1
        }
       
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height
        this.image=loadImage("images/monster.png");
        this.body = Bodies.rectangle(this.x,this.y,width,height, options);
        
        
       
        World.add(world, this.body);
    }
    display() {
        var pos1=this.body.position
        var angle=this.body.angle;
        push();
        translate(pos1.x,pos1.y);
         
        image(this.image,0,0,this.width,this.height);
        pop();
        
        
    }
  }
