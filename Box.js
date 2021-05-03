class Box{
    constructor(x,y,width,height){
    var options={
      density:0.04, restitution:1, friction:1
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.height=height
    this.width=width
    World.add(world,this.body);
    }
    display(){
       push() 
        translate(this.body.position.x, this.body.position.y);
       rotate( this.body.angle ) 
fill("pink")
       rect(0,0,this.width,this.height) 
     pop()
    }
    }