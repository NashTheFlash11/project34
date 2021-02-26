class Block{
    constructor(x, y, width, height){
        var options= {
            
            isStatic: false,
            restitution : 0.3,
            friction : 0.7,
            density : 1.2
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.visibility = 255;
        
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        if(this.body.speed < 10){

            push();
            translate(pos.x, pos.y);
            rectMode(CENTER)
            rect(0,0,this.width,this.height);
            pop();
        }

        else{

            World.remove(world, this.body);

            push();
            translate(pos.x, pos.y);
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            pop();
        }
    }
}