class Snow{
    constructor (x,y){
        var options = {
            friction : 0.001,
            restitution : 0.1,
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,20,options)
        this.radius=20;
        this.image=loadImage("snow5.webp");
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height+300){
            Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,400)})
        }
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
    
}