class Box {
    constructor(x,y){
     var options = {
        isStatic:true
    }
    this.body= Bodies.rectangle(x,y,0,0,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    this.image=loadImage("dustbin.png");
}
display(){
    push();
    var pos=this.body.position;
    imageMode(CENTER);
    //rectMode(CENTER);
    //fill(255,0,0);
    //rect(pos.x,pos.y,this.width,this.height);
    image (this.image,pos.x,pos.y,150,180);
    pop();
}
}