import { useEffect, useRef } from "react";
import Vector from "../gui/Vector";
import Rope from "../gui/rope/Rope";

// cursor canvas
const mouse = new Vector();
const rope = new Rope();
let animationId: number | undefined = 0;

let then = performance.now();

function loop(canvas: HTMLCanvasElement) {
  animationId = undefined;
  const ctx = canvas.getContext("2d")!;
  let dt = 0;
  const now = performance.now();
  dt = now - then;

  then = now;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  rope.update(dt / 1000, mouse);
  rope.draw(ctx);

  start(canvas);
}

function start(canvas: HTMLCanvasElement) {
  if (!animationId) {
    animationId = window.requestAnimationFrame(() => {
      loop(canvas);
    });
  }
}

const CursorCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseMoveHandler = (event: MouseEvent) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  // init cursor loop

  useEffect(() => {
    cancelAnimationFrame(animationId!);
    if (canvasRef.current == null) return;

    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    animationId = requestAnimationFrame(() => {
      loop(canvas);
    });

    return () => {
      cancelAnimationFrame(animationId!);
    };
  }, [canvasRef]);

  return <canvas id="cursor-canvas" ref={canvasRef}></canvas>;
};

export default CursorCanvas;
