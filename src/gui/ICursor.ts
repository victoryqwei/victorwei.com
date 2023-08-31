import Vector from "./Vector";

interface ICursor {
  update(dt: number, mouse: Vector): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

export default ICursor;
