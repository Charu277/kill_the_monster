class Box{
    constructor(x, y) {
        var options={
          'restitution':0.8,
          'friction':0.1,
          'density':1.2
        }
        
        this.body = Bodies.rectangle(x, y, 80, 100, options);
        this.height = 100;
        this.width = 80;
        
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        
        fill(200);
        rect(0,0, this.width, this.height);
        pop()
    }
}