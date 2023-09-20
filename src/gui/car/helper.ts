import Vector from "../Vector";

export function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, o: number, c: string, b?: boolean) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.fillStyle = c || "grey";
  ctx.globalAlpha = o;
  ctx.fill();
  ctx.globalAlpha = 1;
  if (b) {
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }
  ctx.closePath();
}

export function drawRectCenter(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, o: string, d: number) {
  ctx.translate(x, y);
  ctx.rotate(d);

  ctx.rect(-w / 2, -h / 2, w, h);
  ctx.fillStyle = o || "grey";
  ctx.globalAlpha = 1;
  ctx.fill();
  ctx.beginPath();
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = "black";
  ctx.stroke();

  ctx.resetTransform();
}

export function drawImage(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number, angle: number) {
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.drawImage(img, -w, -h, w * 2, h * 2);
  ctx.resetTransform();
}

export function drawCircleImage(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, r: number, angle: number) {
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.drawImage(img, -r, -r, r * 2, r * 2);
  ctx.resetTransform();
}

export function drawLine(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  thickness: number,
  color: string,
  alpha?: number,
  cap?: CanvasLineCap
) {
  ctx.beginPath();
  ctx.lineWidth = thickness || 2;
  ctx.strokeStyle = color || "black";
  ctx.globalAlpha = alpha || 1;
  ctx.lineCap = cap || "butt";
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.closePath();
}

export function drawText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  font: string,
  color: string,
  align: CanvasTextAlign,
  baseline: CanvasTextBaseline
) {
  ctx.beginPath();
  ctx.font = font || "20px Arial";
  ctx.fillStyle = color || "red";
  ctx.textAlign = align || "default";
  ctx.textBaseline = baseline || "default";
  ctx.fillText(text, x, y);
  ctx.closePath();
}

export function drawArrow(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  thickness: number,
  color: string,
  alpha?: number,
  cap?: CanvasLineCap
) {
  ctx.beginPath();
  ctx.lineWidth = thickness || 2;
  ctx.strokeStyle = color || "black";
  ctx.globalAlpha = alpha || 1;
  ctx.lineCap = cap || "butt";
  const headlen = 10; // length of head in pixels
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x2 - headlen * Math.cos(angle - Math.PI / 6), y2 - headlen * Math.sin(angle - Math.PI / 6));
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 6), y2 - headlen * Math.sin(angle + Math.PI / 6));
  ctx.stroke();
  ctx.closePath();
  ctx.globalAlpha = 1;
}

export function constrain(value: number, a: number, b: number) {
  if (value < a) {
    return a;
  } else if (value > b) {
    return b;
  } else {
    return value;
  }
}

export function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function dist(a: Vector, b: Vector) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

export function round(value: number, decimalPlace: number) {
  return Math.round(value * 10 ** (decimalPlace || 1)) / 10 ** (decimalPlace || 1);
}

export function rad(deg: number) {
  return (deg * Math.PI) / 180;
}

export function deg(rad: number) {
  return (rad / Math.PI) * 180;
}

// (export function () {
//   Math.clamp = export function (a, b, c) {
//     return Math.min(Math.max(a, b), c);
//   };
// })();

export function randomString(length: number): string {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz".split("");

  if (!length) {
    length = Math.floor(Math.random() * chars.length);
  }

  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
