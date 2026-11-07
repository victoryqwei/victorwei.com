import Vector from "./Vector";
import Force from "./force";
import Rope from "./rope/Rope";
import IToy from "./IToy";
import Life from "./life";

class Toys {
  mouse = new Vector();
  mouseDown = false;
  animationId: number | undefined = 0;
  then: number = performance.now();

  toys = new Map<string, IToy>();
  selectedToy: string = "rope";

  rope = new Rope();
  force = new Force();
  life = new Life();

  constructor() {
    this.toys.set("rope", this.rope);
    this.toys.set("force", this.force);
    this.toys.set("life", this.life);
  }

  setToy(toy: string) {
    if (!this.toys.has(toy)) return;
    this.selectedToy = toy;
  }

  getToy(toy: string) {
    return this.toys.get(toy);
  }

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
    const now = performance.now();
    // Cap the timestep so a paused tab or re-enabled toy doesn't explode the simulation
    const dt = Math.min(now - this.then, 100);

    this.then = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const toy = this.toys.get(this.selectedToy);
    if (toy) {
      toy.update(dt / 1000, this.mouse, this.mouseDown);
      toy.draw(ctx);
    }

    this.start(canvas);
  }
}

const toys = new Toys();

export default toys;
