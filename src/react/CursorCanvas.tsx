import { useEffect, useRef } from "react";

// cursor canvas
const mouse = {
  x: 0,
  y: 0,
};

function loop(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  requestAnimationFrame(() => {
    loop(canvas);
  });

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.fillRect(mouse.x, mouse.y, 100, 100);
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
