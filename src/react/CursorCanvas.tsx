import { useEffect, useRef } from "react";
import Cursor from "../gui";

const cursor = new Cursor();

const CursorCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseMoveHandler = (event: MouseEvent) => {
    cursor.mouse.x = event.clientX;
    cursor.mouse.y = event.clientY;
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  // init cursor loop

  useEffect(() => {
    cancelAnimationFrame(cursor.animationId!);
    if (canvasRef.current == null) return;

    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    cursor.animationId = requestAnimationFrame(() => {
      cursor.loop(canvas);
    });

    return () => {
      cancelAnimationFrame(cursor.animationId!);
    };
  }, [canvasRef]);

  return <canvas id="cursor-canvas" ref={canvasRef}></canvas>;
};

export default CursorCanvas;
