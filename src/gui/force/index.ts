import ICursor from "../ICursor";
import Vector from "../Vector";

class Node {
  pos = new Vector(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight));
  velocity = new Vector();
  acceleration = new Vector();

  update(dt: number, mouse: Vector) {
    const dir = mouse.copy();
    dir.sub(this.pos);

    dir.normalize();
    dir.div(2);

    this.acceleration = dir;
    this.acceleration.mult(dt * 100);

    this.velocity.add(this.acceleration);
    this.velocity.limit(10);

    this.pos.add(this.velocity);
  }

  checkEdges() {
    if (this.pos.x > window.innerWidth || this.pos.x < 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.pos.y > window.innerHeight || this.pos.y < 0) {
      this.velocity.y = -this.velocity.y;
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

class Force implements ICursor {
  nodes: Node[] = [];

  constructor() {
    for (let i = 0; i < 50; i++) {
      this.nodes.push(new Node());
    }
  }

  update(dt: number, mouse: Vector) {
    this.nodes.forEach((node) => {
      node.update(dt, mouse);
      node.checkEdges();
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.nodes.forEach((node) => {
      node.display(ctx);
    });
  }
}

export default Force;
