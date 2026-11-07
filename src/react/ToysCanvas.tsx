import { useEffect, useRef } from "react";
import toys from "../gui";

const ToysCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseMoveHandler = (event: MouseEvent) => {
    toys.mouse.x = event.clientX;
    toys.mouse.y = event.clientY;
  };

  const mouseDownHandler = () => {
    toys.mouseDown = true;
  };

  const mouseUpHandler = () => {
    toys.mouseDown = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, []);

  // init cursor loop

  useEffect(() => {
    cancelAnimationFrame(toys.animationId!);
    if (canvasRef.current == null) return;

    const canvas = canvasRef.current;

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    toys.animationId = requestAnimationFrame(() => {
      toys.loop(canvas);
    });

    return () => {
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(toys.animationId!);
    };
  }, [canvasRef]);

  return <canvas id="cursor-canvas" ref={canvasRef}></canvas>;
};

export default ToysCanvas;
