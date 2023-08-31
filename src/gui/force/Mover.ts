import Vector from "../Vector";

class Mover {
  pos = new Vector(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight));
  velocity = new Vector();
  acceleration = new Vector();

  update(mouse: Vector) {
    const dir = mouse.copy();
    dir.sub(this.pos);

    dir.normalize();
    dir.div(2);

    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(10);

    this.pos.add(this.velocity);
  }

  checkEdges() {
    if (this.pos.x > window.innerWidth || this.pos.x < 0) {
      this.velocity.x = this.velocity.x * -1;
    }
    if (this.pos.y > window.innerHeight || this.pos.y < 0) {
      this.velocity.y = this.velocity.y * -1;
    }
  }

  display(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}

const movers = [];

for (let i = 0; i < 500; i++) {
  movers.push(new Mover());
}

export default Mover;
