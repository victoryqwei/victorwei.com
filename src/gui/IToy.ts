import Vector from "./Vector";

interface IToy {
  update(dt: number, mouse: Vector, mouseDown: boolean): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

export default IToy;
