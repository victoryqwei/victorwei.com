class Vector {
  x: number;
  y: number;
  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }
  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getMag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  setMag(magnitude: number) {
    const direction = this.getDir();
    this.x = Math.cos(direction) * magnitude;
    this.y = Math.sin(direction) * magnitude;
  }
  getDir() {
    return Math.atan2(this.y, this.x);
  }
  add(a: Vector, b?: Vector) {
    if (b) {
      return new Vector(a.x + b.x, a.y + b.y);
    } else {
      this.x = this.x + a.x;
      this.y = this.y + a.y;
    }
  }
  static add(a: Vector, b: Vector) {
    return new Vector(a.x + b.x, a.y + b.y);
  }
  sub(a: Vector, b?: Vector) {
    if (b) {
      return new Vector(a.x - b.x, a.y - b.y);
    } else {
      this.x = this.x - a.x;
      this.y = this.y - a.y;
    }
  }
  static sub(a: Vector, b: Vector) {
    return new Vector(a.x - b.x, a.y - b.y);
  }
  mult(scalar: number) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
  }
  static mult(vector: Vector, scalar: number) {
    return new Vector(vector.x * scalar, vector.y * scalar);
  }
  div(scalar: number) {
    this.x = this.x / scalar;
    this.y = this.y / scalar;
  }
  static div(vector: Vector, scalar: number) {
    return new Vector(vector.x / scalar, vector.y / scalar);
  }
  getDot(b: Vector) {
    return this.x * b.x + this.y * b.y;
  }
  static dot(a: Vector, b: Vector) {
    return a.x * b.x + a.y * b.y;
  }
  static cross(a: Vector, b: Vector) {
    return a.x * b.y - a.y * b.x;
  }
  static dist(a: Vector, b: Vector) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  }
  normalize() {
    if (this.getMag() != 0) {
      this.div(this.getMag());
    }
  }
  limit(max: number) {
    if (this.getMag() > max) {
      this.normalize();
      this.mult(max);
    }
  }
  copy() {
    return new Vector(this.x, this.y);
  }
  rotate(ang: number) {
    ang = ang * (Math.PI / 180);
    const cos = Math.cos(ang);
    const sin = Math.sin(ang);
    this.x = Math.round(10000 * (this.x * cos - this.y * sin)) / 10000;
    this.y = Math.round(10000 * (this.x * sin + this.y * cos)) / 10000;
  }
  static rotate(
    vector: Vector,
    ang: number // Vector to rotate by an angle in radians
  ) {
    const cos = Math.cos(ang);
    const sin = Math.sin(ang);
    return new Vector(
      Math.round(10000 * (vector.x * cos - vector.y * sin)) / 10000,
      Math.round(10000 * (vector.x * sin + vector.y * cos)) / 10000
    );
  }
  print() {
    console.log("X: " + this.x + " Y: " + this.y);
  }
}

export default Vector;
