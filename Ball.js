class Ball{
constructor(x,y,width,height){
var options={
  density:1,frictionAir:0.05 
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
    ellipse(0,0,this.width,this.height) 
    pop() 
}
}