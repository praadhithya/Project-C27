class bob {
    constructor(x,y,radius) {
      var options = {
        'isStatic': false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      } 
      //Matter.Bodies.circle(x, y, radius)
      this.body = Bodies.circle(x,y,radius-38,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y,this.radius);
    }
    
  };