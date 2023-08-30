import { useEffect, useRef } from "react";
import Rope from "../gui/rope/Rope";
import Vector from "../gui/Vector";

// cursor canvas
const mouse = new Vector();

const rope = new Rope();

let then = performance.now();

function loop(canvas: HTMLCanvasElement) {
  requestAnimationFrame(() => {
    loop(canvas);
  });

  const ctx = canvas.getContext("2d")!;
  let dt = 0;
  const now = performance.now();
  dt = now - then;

  then = now;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  rope.update(dt / 1000, mouse);
  rope.draw(ctx);
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
    if (canvasRef.current == null) return;
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    loop(canvas);
  }, [canvasRef]);

  return <canvas id="cursor-canvas" ref={canvasRef}></canvas>;
};

export default CursorCanvas;
