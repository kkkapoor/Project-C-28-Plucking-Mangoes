class Ground
{

    constructor(x, y , width, height)
    {
        //Setting the properties by declaring a variable as options and add all the properties of the ground there.
        var options = {
            isStatic: true,
            restitution: 0.5
        }
            //Create the body here.
            this.body = Bodies.rectangle(x, y ,width, height, options);
            this.width = width;
            this.height = height;

            World.add(world, this.body);
        }
    
    display()
    {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

    }

}