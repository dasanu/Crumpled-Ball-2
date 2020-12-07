class Ball{
    constructor(x,y){
       var options ={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
       this.body = Bodies.circle(x, y,15,options);
     
     World.add(world, this.body);
     this.image=loadImage("paper.png");
     
     
    }

    display(){
        var pos =this.body.position;
       //ellipseMode(RADIUS);
        imageMode(CENTER);
        //fill(255);
        //ellipse(pos.x,pos.y,this.radius,this.radius);
        image (this.image,pos.x,pos.y,45,45);
        
      }
      
    };
    



