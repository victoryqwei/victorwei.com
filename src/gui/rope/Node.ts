import Vector from "../Vector";

class Node {
  prevPos: Vector;
  gravity = new Vector(0, 9.81);
  constructor(readonly pos: Vector) {
    this.pos = new Vector(pos.x, pos.y);
    this.prevPos = this.pos.copy();
  }

  update(dt: number) {
    const old = this.pos.copy();

    this.pos.add(Vector.add(Vector.sub(this.pos, this.prevPos), Vector.mult(this.gravity, dt * dt * 100)));

    this.prevPos = old;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}

export default Node;
