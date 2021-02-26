class Hero{
    constructor(x, y, radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
        }
        
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        this.image = loadImage("images/Superhero-01.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, 300, 200);
        pop();
    }
}