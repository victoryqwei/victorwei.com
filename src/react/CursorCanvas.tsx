import { useEffect, useRef } from "react";
import Vector from "../gui/vector";

// cursor canvas
const mouse = {
  x: 0,
  y: 0,
};

const gravity = new Vector(0, 9.81);
const dt = 4 / 1000;

class Node {
  prevPos: Vector;
  constructor(readonly pos: Vector) {
    this.pos = new Vector(pos.x, pos.y);
    this.prevPos = this.pos.copy();
  }

  update() {
    const old = this.pos.copy();

    this.pos.add(Vector.add(Vector.sub(this.pos, this.prevPos), Vector.mult(gravity, dt * dt * 100)));

    this.prevPos = old;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}

class Rope {
  width: number = 10;
  iterations: number = 80;
  totalNodes: number = 80;
  nodeDistance: number = 10;
  nodes: Node[] = [];
  locked: boolean = true;

  constructor() {
    const { totalNodes, nodes, nodeDistance } = this;

    const pos = new Vector(window.innerHeight / 2, window.innerHeight / 2);
    for (let i = 0; i < totalNodes; i++) {
      nodes[i] = new Node(pos);
      pos.y -= nodeDistance;
      pos.x += Math.random();
    }
  }

  update() {
    this.simulate();
    for (let i = 0; i < this.iterations; i++) {
      this.applyConstraints();
    }
  }

  simulate() {
    for (const node of this.nodes) {
      node.update();
    }
  }

  applyConstraints() {
    for (let i = 0; i < this.nodes.length - 1; i++) {
      const node1 = this.nodes[i];
      const node2 = this.nodes[i + 1];

      if (i == 0) {
        node1.pos.set(mouse.x, mouse.y);
      }

      if (node1.pos.y > window.innerHeight - this.width / 2) {
        node1.pos.y = window.innerHeight - this.width / 2;
        node1.prevPos.x += (node1.pos.x - node1.prevPos.x) / 2000;
      }
      if (node1.pos.y < 0) {
        node1.pos.y = 0;
      }
      if (node1.pos.x > window.innerWidth) {
        node1.pos.x = window.innerWidth;
      }
      if (node1.pos.x < 0) {
        node1.pos.x = 0;
      }

      const diff = Vector.sub(node1.pos, node2.pos);
      const dist = Vector.dist(node1.pos, node2.pos);
      let difference = 0;
      if (dist > 0) {
        difference = (this.nodeDistance - dist) / dist;
      }

      diff.mult(0.5 * difference);

      const translate = diff.copy();

      node1.pos.add(translate);
      node2.pos.sub(translate);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < this.nodes.length - 1; i++) {
      const node1 = this.nodes[i];
      const node2 = this.nodes[i + 1];

      ctx.beginPath();
      ctx.lineWidth = this.width;
      ctx.strokeStyle = "white";
      ctx.lineCap = "round";
      ctx.moveTo(node1.pos.x, node1.pos.y);
      ctx.lineTo(node2.pos.x, node2.pos.y);
      ctx.stroke();
      ctx.closePath();
    }
  }
}

const rope = new Rope();

function loop(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  requestAnimationFrame(() => {
    loop(canvas);
  });

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  rope.update();
  rope.draw(ctx);

  // ctx.fillStyle = "rgba(255, 255, 255, 1)";
  // ctx.fillRect(mouse.x, mouse.y, 100, 100);
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
