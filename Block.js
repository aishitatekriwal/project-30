class Block
{
  constructor(x, y, width, height)
    {
      var options = 
      {
          restitution :0.4,
          friction :0.0,
      }
      this.visibilty = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display()
    {
      if(this.body.speed < 3)
      {
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        pop();
      }
      else
      {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 1;
        tint(255,this.visibility);
        pop();
      }
    }
}