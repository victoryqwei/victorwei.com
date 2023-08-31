import ICursor from "../ICursor";
import Vector from "../Vector";
import Node from "./Node";

class Rope implements ICursor {
  width: number = 5;
  iterations: number = 100;
  totalNodes: number = 30;
  nodeDistance: number = 5;

  nodes: Node[] = [];

  constructor() {
    const { totalNodes, nodes, nodeDistance } = this;

    const pos = new Vector(window.innerHeight / 2, window.innerHeight / 2);
    for (let i = 0; i < totalNodes; i++) {
      nodes[i] = new Node(pos);
      pos.y -= nodeDistance;
      pos.x += Math.random();
    }
  }

  setNodes(length: number) {
    const { nodes, nodeDistance } = this;

    nodes.length = length;

    const pos = new Vector(window.innerHeight / 2, window.innerHeight / 2);
    for (let i = 0; i < length; i++) {
      nodes[i] = new Node(pos);
      pos.y -= nodeDistance;
      pos.x += Math.random();
    }
  }

  setNodeDistance(distance: number) {
    const { nodes, totalNodes } = this;

    this.nodeDistance = distance;

    const pos = new Vector(window.innerHeight / 2, window.innerHeight / 2);
    for (let i = 0; i < totalNodes; i++) {
      nodes[i] = new Node(pos);
      pos.y -= distance;
      pos.x += Math.random();
    }
  }

  setIterations(iterations: number) {
    this.iterations = iterations;
  }

  update(dt: number, mouse: Vector) {
    this.simulate(dt);
    for (let i = 0; i < this.iterations; i++) {
      this.applyConstraints(mouse);
    }
  }

  simulate(dt: number) {
    for (const node of this.nodes) {
      node.update(dt);
    }
  }

  applyConstraints(mouse: Vector) {
    for (let i = 0; i < this.nodes.length - 1; i++) {
      const node1 = this.nodes[i];
      const node2 = this.nodes[i + 1];

      if (i == 0) {
        node1.pos.set(mouse.x, mouse.y);
      }

      if (node1.pos.y > window.innerHeight - this.width / 2) {
        node1.pos.y = window.innerHeight - this.width / 2;
        node1.prevPos.x += (node1.pos.x - node1.prevPos.x) / 20;
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

export default Rope;
