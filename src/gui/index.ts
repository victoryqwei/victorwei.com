import Vector from "./Vector";
import Rope from "./rope/Rope";

// cursor canvas
const rope = new Rope();

class Cursor {
  mouse = new Vector();
  animationId: number | undefined = 0;
  then: number = performance.now();

  constructor() {}

  start(canvas: HTMLCanvasElement) {
    if (!this.animationId) {
      this.animationId = window.requestAnimationFrame(() => {
        this.loop(canvas);
      });
    }
  }

  loop(canvas: HTMLCanvasElement) {
    this.animationId = undefined;
    const ctx = canvas.getContext("2d")!;
    let dt = 0;
    const now = performance.now();
    dt = now - this.then;

    this.then = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    rope.update(dt / 1000, this.mouse);
    rope.draw(ctx);

    this.start(canvas);
  }
}

export default Cursor;
