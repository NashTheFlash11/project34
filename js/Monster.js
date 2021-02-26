class Monster{
    constructor(x, y, radius){
        var options = {
            isStatic :true
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        this.image = loadImage("images/Monster-01.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, 250, 150);
        pop();
    }
}