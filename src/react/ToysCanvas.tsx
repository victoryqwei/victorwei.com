import { useEffect, useRef } from "react";
import Toys from "../gui";

const toys = new Toys();

const ToysCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseMoveHandler = (event: MouseEvent) => {
    toys.mouse.x = event.clientX;
    toys.mouse.y = event.clientY;
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  // init cursor loop

  useEffect(() => {
    cancelAnimationFrame(toys.animationId!);
    if (canvasRef.current == null) return;

    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    toys.animationId = requestAnimationFrame(() => {
      toys.loop(canvas);
    });

    return () => {
      cancelAnimationFrame(toys.animationId!);
    };
  }, [canvasRef]);

  return <canvas id="cursor-canvas" ref={canvasRef}></canvas>;
};

export default ToysCanvas;
