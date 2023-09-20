// import { clamp } from "lodash";
// import Vector from "../Vector";
// import { dist, drawArrow, drawCircle, drawLine, rad } from "./helper";

// interface Wheels {
//   size: number;
//   thickness: number;
//   back: Vector & { slipAngle: number };
//   front: Vector & { slipAngle: number };
//   baseline: number;
//   particles: any[];
// }

// interface Controls {
//   fullPosition: number;
//   idlePosition: number;
//   brakePosition: number;
//   steerLeftPosition: number;
//   steerRightPosition: number;
//   padding: number;
// }

// class Car {
//   // id = randomString(5);

//   previousCarAngle = 0;
//   carAngle = 0; // Car body angle (radians)
//   pos: Vector;
//   previousPosition: Vector;
//   velocity = new Vector(); // Velocity
//   localVelocity = new Vector();
//   acceleration = new Vector(); // Acceleration
//   localAcceleration = new Vector();
//   absVelocity = 0; // Metres / Second
//   speed = 0; // KM/hr
//   yawRate = 0; // Angular velocity
//   steeringAngle = 0; // Steering angle

//   // User inputs

//   steer = 0;
//   throttle = 0;
//   brake = 0;
//   eBrake = 0;

//   gear = 1; // -1 reverse, 0 neutral

//   corneringForce = 0;
//   sideslipAngle = 0;

//   gravity = 9.81; // Meters / Second
//   mass = 1200; // Kilograms

//   // Body
//   halfWidth = 0.8;
//   height = 0.55;
//   cgToFront = 2.0;
//   cgToRear = 2.0; // Centre of gravity to rear of chassis
//   cgToFrontAxle = 1.25; // Centre gravity to front axle
//   cgToRearAxle = 1.25; // Centre gravity to rear axle
//   wheelBase = this.cgToFrontAxle + this.cgToRearAxle;
//   cgHeight = 0.55; // Centre gravity height
//   wheelRadius = 0.3; // Includes tire (also represents height of axle)

//   w = (this.cgToFront + this.cgToRear) * 25;
//   h = this.halfWidth * 2 * 25;

//   boundingBox = {
//     tl: new Vector(-this.w / 2, -this.h / 2),
//     br: new Vector(this.w / 2, this.h / 2),
//   };

//   wheels: Wheels;

//   tireGrip = 2.0;
//   lockGrip = 0.7;
//   engineForce = 8000;
//   brakeForce = 12000;
//   eBrakeForce = this.brakeForce / 2.5;
//   weightTransfer = 0.2;
//   maxSteer = 0.6;
//   cornerStiffnessFront = 5.0;
//   cornerStiffnessRear = 5.2;

//   controls: Controls;

//   drag = 2.5; // Air resistance
//   rrDrag = 12.0; // Rolling resistance

//   color = "red";

//   inertia = 0;

//   constructor(x: number, y: number) {
//     // State of Car
//     this.pos = new Vector(x || 100, y || window.innerHeight / 2 + 40); // Position
//     this.previousPosition = this.pos.copy();

//     this.setConfig(); // Car configuration
//     this.setControls(); // User controls
//   }

//   setConfig() {
//     // Configuration of Car

//     // Wheels (with respect to the car position)
//     this.wheels.size = this.w / 4;
//     this.wheels.thickness = this.h / 4;

//     this.wheels.back = new Vector(this.boundingBox.tl.x + this.w / 15 + this.wheels.size / 2, this.boundingBox.tl.y + this.h / 2);
//     this.wheels.back.slipAngle = 0;
//     this.wheels.front = new Vector(
//       this.boundingBox.tl.x + this.w - this.wheels.size / 2 - this.w / 15,
//       this.boundingBox.tl.y + this.h / 2 + this.wheels.thickness / 2 - this.wheels.thickness / 2
//     );
//     this.wheels.baseline = dist(this.wheels.back, this.wheels.front);

//     this.wheels.particles = []; // Particles for drifting
//   }

//   setControls() {
//     this.controls.fullPosition = 100;
//     this.controls.idlePosition = (window.innerHeight * 2) / 3;
//     this.controls.brakePosition = this.controls.idlePosition + 100;

//     this.controls.steerLeftPosition = window.innerWidth / 2 - 50;
//     this.controls.steerRightPosition = window.innerWidth / 2 + 50;

//     this.controls.padding = 10;
//   }

//   updateScale(scale: number) {
//     this.w = (this.cgToFront + this.cgToRear) * scale;
//     this.h = this.halfWidth * 2 * scale;
//     this.boundingBox = {
//       tl: new Vector(-this.w / 2, -this.h / 2),
//       br: new Vector(this.w / 2, this.h / 2),
//     };

//     // Wheels (with respect to the car position)
//     (this.wheels.size = this.w / 4),
//       (this.wheels.thickness = this.h / 4),
//       (this.wheels.back = new Vector(this.boundingBox.tl.x + this.w / 15 + this.wheels.size / 2, this.boundingBox.tl.y + this.h / 2));
//     this.wheels.front = new Vector(
//       this.boundingBox.tl.x + this.w - this.wheels.size / 2 - this.w / 15,
//       this.boundingBox.tl.y + this.h / 2 + this.wheels.thickness / 2 - this.wheels.thickness / 2
//     );

//     this.wheels.baseline = dist(this.wheels.back, this.wheels.front);

//     this.wheels.particles = [];
//   }

//   getBoundingBox(object: object) {
//     if (object) {
//       return {
//         tl: Vector.rotate(new Vector(-this.w / 2, -this.h / 2), this.carAngle),
//         tr: Vector.rotate(new Vector(this.w / 2, -this.h / 2), this.carAngle),
//         br: Vector.rotate(new Vector(this.w / 2, this.h / 2), this.carAngle),
//         bl: Vector.rotate(new Vector(-this.w / 2, this.h / 2), this.carAngle),
//       };
//     } else {
//       const result = [
//         Vector.rotate(new Vector(-this.w / 2, -this.h / 2), this.carAngle),
//         Vector.rotate(new Vector(this.w / 2, -this.h / 2), this.carAngle),
//         Vector.rotate(new Vector(this.w / 2, this.h / 2), this.carAngle),
//         Vector.rotate(new Vector(-this.w / 2, this.h / 2), this.carAngle),
//       ];

//       for (let i = 0; i < result.length; i++) {
//         result[i].add(this.pos);
//       }

//       return result;
//     }
//   }

//   getInput(n: number) {
//     // Convert user input to car actions

//     const ctrl = this.controls;

//     if ((n == 1 && map[38]) || (n == 0 && map[87])) {
//       this.throttle = 1;
//     } else {
//       this.throttle = 0;
//     }

//     if ((n == 1 && map[40]) || (n == 0 && map[83])) {
//       this.brake = 1;
//     } else {
//       this.brake = 0;
//     }

//     if ((n == 0 && map[32]) || (n == 1 && map[18])) {
//       this.eBrake = 1;
//     } else {
//       this.eBrake = 0;
//     }
//   }

//   calculateSteering(n: number) {
//     // Steering

//     if (((n == 1 && map[37]) || (n == 0 && map[65])) && this.steeringAngle > -0.5) {
//       this.steeringAngle -= 0.02;
//     } else if (((n == 1 && map[39]) || (n == 0 && map[68])) && this.steeringAngle < 0.5) {
//       this.steeringAngle += 0.02;
//     } else if (this.steeringAngle < -0.02) {
//       this.steeringAngle += 0.02;
//     } else if (this.steeringAngle > 0.02) {
//       this.steeringAngle -= 0.02;
//     } else {
//       this.steeringAngle = 0;
//     }
//   }

//   applyPhysics(dt: number, delta: number) {
//     // Set previous car position
//     this.previousPosition = this.pos.copy();
//     this.previousCarAngle = this.carAngle;

//     // Get car local velocity
//     this.localVelocity.x = Math.cos(this.carAngle) * this.velocity.x + Math.sin(this.carAngle) * this.velocity.y;
//     this.localVelocity.y = Math.cos(this.carAngle) * this.velocity.y - Math.sin(this.carAngle) * this.velocity.x;

//     // Weight on axles based on center of gravity and weight shift due to forward/reverse acceleration
//     const axleWeightFront =
//       this.mass * (0.5 * this.gravity - (this.weightTransfer * this.localAcceleration.x * this.height) / this.wheelBase);
//     const axleWeightRear =
//       this.mass * (0.5 * this.gravity + (this.weightTransfer * this.localAcceleration.x * this.height) / this.wheelBase);
//     //console.log(axleWeightFront, axleWeightRear);

//     const yawSpeedFront = this.cgToFrontAxle * this.yawRate;
//     const yawSpeedRear = -this.cgToRearAxle * this.yawRate;

//     // Calculate sideslip angle for car
//     this.sideslipAngle = ((this.carAngle % rad(360)) - this.velocity.getDir()) % rad(360);

//     // Calculate slip angle for front/back wheel
//     const steeringAngle = this.color == "red" ? this.steeringAngle / 3 : this.steeringAngle;
//     this.wheels.front.slipAngle =
//       Math.atan2(this.localVelocity.y + yawSpeedFront, Math.abs(this.localVelocity.x)) - Math.sign(this.localVelocity.x) * steeringAngle;
//     this.wheels.back.slipAngle = Math.atan2(this.localVelocity.y + yawSpeedRear, Math.abs(this.localVelocity.x));
//     //console.log(this.wheels.front.slipAngle, this.wheels.back.slipAngle);

//     const tireGripFront = this.tireGrip;
//     const tireGripRear = this.tireGrip * (1.0 - this.eBrake * (1.0 - this.lockGrip)); // reduce rear grip when ebrake is on

//     const frictionForceFront =
//       clamp(-this.cornerStiffnessFront * this.wheels.front.slipAngle, -tireGripFront, tireGripFront) * axleWeightFront;
//     const frictionForceRear = clamp(-this.cornerStiffnessRear * this.wheels.back.slipAngle, -tireGripRear, tireGripRear) * axleWeightRear;

//     //console.log(frictionForceFront, frictionForceRear);

//     // Brake and throttle forces
//     const throttle = this.throttle * this.engineForce;
//     const brake = Math.min(this.brake * this.brakeForce + this.eBrake * this.eBrakeForce, this.brakeForce);

//     // Traction force
//     const tractionForce = new Vector(throttle - brake * Math.sign(this.localVelocity.x), 0);

//     // Frictional forces
//     const dragForce = new Vector(
//       this.localVelocity.x * Math.abs(this.localVelocity.x) * -this.drag,
//       this.localVelocity.y * Math.abs(this.localVelocity.y) * -this.drag
//     ); // Air resistance force
//     const rollingResistanceForce = new Vector(this.localVelocity.x * -this.rrDrag, this.localVelocity.y * -this.rrDrag); // Rolling resistance force (friction with ground)

//     // Total force applied on car
//     const netForce = tractionForce.copy();
//     netForce.add(dragForce);
//     netForce.add(rollingResistanceForce);

//     // Add cornering force as well
//     this.corneringForce = Math.cos(steeringAngle) * frictionForceFront + frictionForceRear;
//     netForce.y += this.corneringForce;

//     // Compute acceleration
//     this.localAcceleration.x = netForce.x / this.mass;
//     this.localAcceleration.y = netForce.y / this.mass;

//     // Convert to global acceleration
//     this.acceleration.x = Math.cos(this.carAngle) * this.localAcceleration.x - Math.sin(this.carAngle) * this.localAcceleration.y;
//     this.acceleration.y = Math.sin(this.carAngle) * this.localAcceleration.x + Math.cos(this.carAngle) * this.localAcceleration.y;

//     // Compute global velocity
//     const accelerationDelta = this.acceleration.copy();
//     accelerationDelta.mult(dt);
//     this.velocity.add(accelerationDelta);

//     this.absVelocity = this.velocity.getMag(); // Get speed of velocity in metres per second
//     this.speed = (this.velocity.getMag() * 3600) / 1000; // Calculate speed in KM/hr

//     // Calculate amount of rotational force
//     let angularTorque = (frictionForceFront + tractionForce.y) * this.cgToFrontAxle - frictionForceRear * this.cgToRearAxle;

//     // Stop car if speed is negligible
//     if (this.absVelocity < delta / 160) {
//       this.velocity = new Vector();
//       this.absVelocity = 0;
//       angularTorque = 0;
//     }

//     // Calculate car angle from angular torque
//     this.inertia = (this.mass / 12) * (Math.pow(this.cgToFront + this.cgToRear, 2) + Math.pow(this.halfWidth * 2, 2));

//     const angularAcceleration = angularTorque / this.inertia;
//     this.yawRate += angularAcceleration * dt;
//     this.carAngle += this.yawRate * dt;

//     // Calculate new car position
//     const velocityDelta = this.velocity.copy();
//     // velocityDelta.mult(dt * scale);
//     velocityDelta.mult(dt * 25);

//     this.pos.add(velocityDelta);
//   }

//   collisionDetection() {
//     // Out of bounds

//     if (this.pos.x > window.innerWidth + this.w / 2) {
//       this.pos.x = -this.w / 2;
//     } else if (this.pos.x < -this.w / 2) {
//       this.pos.x = window.innerWidth + this.w / 2;
//     } else if (this.pos.y > window.innerHeight + this.h) {
//       this.pos.y = -this.h;
//     } else if (this.pos.y < -this.h) {
//       this.pos.y = window.innerHeight + this.h;
//     }
//   }

//   move(n: number, dt: number, delta: number) {
//     this.getInput(n);
//     this.calculateSteering(n);
//     this.applyPhysics(dt, delta);
//     this.collisionDetection();
//   }

//   addParticles() {
//     const particles = this.wheels.particles;

//     const ssa = Math.abs(this.sideslipAngle);
//     if ((ssa > 0.2 && ssa < Math.PI) || (ssa > Math.PI && 2 * Math.PI - ssa > 0.2)) {
//       particles.push({
//         pos: new Vector(
//           this.pos.x + Math.cos(this.carAngle) * this.wheels.back.x + (Math.cos(this.carAngle + rad(90)) * this.h) / 2,
//           this.pos.y + Math.sin(this.carAngle) * this.wheels.back.x + (Math.sin(this.carAngle + rad(90)) * this.h) / 2
//         ),
//         time: Date.now(),
//       });
//       particles.push({
//         pos: new Vector(
//           this.pos.x + Math.cos(this.carAngle) * this.wheels.back.x + (Math.cos(this.carAngle - rad(90)) * this.h) / 2,
//           this.pos.y + Math.sin(this.carAngle) * this.wheels.back.x + (Math.sin(this.carAngle - rad(90)) * this.h) / 2
//         ),
//         time: Date.now(),
//       });
//       particles.push({
//         pos: new Vector(
//           this.pos.x + Math.cos(this.carAngle) * this.wheels.front.x + (Math.cos(this.carAngle + rad(90)) * this.h) / 2,
//           this.pos.y + Math.sin(this.carAngle) * this.wheels.front.x + (Math.sin(this.carAngle + rad(90)) * this.h) / 2
//         ),
//         time: Date.now(),
//       });
//       particles.push({
//         pos: new Vector(
//           this.pos.x + Math.cos(this.carAngle) * this.wheels.front.x + (Math.cos(this.carAngle - rad(90)) * this.h) / 2,
//           this.pos.y + Math.sin(this.carAngle) * this.wheels.front.x - (Math.sin(this.carAngle + rad(90)) * this.h) / 2
//         ),
//         time: Date.now(),
//       });
//     }

//     for (let i = particles.length - 1; i >= 0; i--) {
//       if (Date.now() - particles[i].time > 1000) particles.splice(i, 1);
//     }
//   }

//   drawParticles(ctx: CanvasRenderingContext2D) {
//     // DRAW PARTICLES

//     const particles = this.wheels.particles;

//     for (let j = 0; j < 4; j++) {
//       let lastP = new Vector(-1, -1);
//       for (let i = j; i < particles.length; i += 4) {
//         const p = particles[i].pos;

//         const inArena =
//           lastP.x > 0 &&
//           lastP.y > 0 &&
//           lastP.x < window.innerWidth &&
//           lastP.y < window.innerHeight &&
//           p.x > 0 &&
//           p.y > 0 &&
//           p.x < window.innerWidth &&
//           p.y < window.innerHeight;
//         const close = dist(lastP, p) < 40;
//         if (inArena && close) {
//           drawLine(
//             ctx,
//             lastP.x,
//             lastP.y,
//             p.x,
//             p.y,
//             (this.wheels.thickness * 4) / 5,
//             "black",
//             1 - (Date.now() - particles[i].time) / 1000,
//             "round"
//           );
//         }

//         lastP = p;
//       }
//     }
//   }

//   drawCar(ctx: CanvasRenderingContext2D) {
//     // DRAW CAR

//     ctx.save();
//     ctx.translate(this.pos.x, this.pos.y);
//     ctx.rotate(this.carAngle);

//     // Draw back wheels
//     ctx.fillStyle = "black";
//     ctx.fillRect(
//       this.boundingBox.tl.x + this.w / 15,
//       this.boundingBox.tl.y - this.wheels.thickness / 2,
//       this.wheels.size,
//       this.wheels.thickness
//     );
//     ctx.fillRect(
//       this.boundingBox.tl.x + this.w / 15,
//       this.boundingBox.tl.y + this.h - this.wheels.thickness / 2,
//       this.wheels.size,
//       this.wheels.thickness
//     );

//     // Draw front wheels (they rotate)

//     ctx.save();
//     const wheelCenter = new Vector(
//       this.boundingBox.tl.x + this.w - this.wheels.size / 2 - this.w / 15,
//       this.boundingBox.tl.y + this.wheels.thickness / 2 - this.wheels.thickness / 2
//     );
//     ctx.translate(wheelCenter.x, wheelCenter.y);
//     ctx.rotate(this.steeringAngle);

//     const wheel = new Vector(-this.wheels.size / 2, -this.wheels.thickness / 2);
//     ctx.fillRect(wheel.x, wheel.y, this.wheels.size, this.wheels.thickness);
//     ctx.restore();

//     ctx.save();
//     const wheelCenter2 = new Vector(
//       this.boundingBox.tl.x + this.w - this.wheels.size / 2 - this.w / 15,
//       this.boundingBox.tl.y + this.h + this.wheels.thickness / 2 - this.wheels.thickness / 2
//     );
//     ctx.translate(wheelCenter2.x, wheelCenter2.y);
//     ctx.rotate(this.steeringAngle);

//     const wheel2 = new Vector(-this.wheels.size / 2, -this.wheels.thickness / 2);
//     ctx.fillRect(wheel2.x, wheel2.y, this.wheels.size, this.wheels.thickness);
//     ctx.restore();

//     // Draw car body
//     ctx.fillStyle = this.color || "blue";
//     ctx.fillRect(this.boundingBox.tl.x, this.boundingBox.tl.y, this.w, this.h);

//     ctx.restore();
//   }

//   drawPhysics(ctx: CanvasRenderingContext2D) {
//     // Physics Simulation Display

//     ctx.save();
//     ctx.translate(this.pos.x, this.pos.y);
//     ctx.rotate(this.carAngle);

//     // Back wheel
//     ctx.fillStyle = "lime";
//     ctx.lineWidth = 2;
//     ctx.fillRect(
//       this.wheels.back.x - this.wheels.size / 2,
//       this.wheels.back.y - this.wheels.thickness / 2,
//       this.wheels.size,
//       this.wheels.thickness
//     );

//     // Front wheel
//     ctx.save();
//     ctx.translate(this.wheels.front.x, this.wheels.front.y);
//     ctx.rotate(this.steeringAngle);

//     const wheel = new Vector(-this.wheels.size / 2, -this.wheels.thickness / 2);
//     ctx.fillRect(wheel.x, wheel.y, this.wheels.size, this.wheels.thickness);
//     ctx.restore();

//     // Axle
//     drawLine(ctx, this.wheels.back.x, this.wheels.back.y, this.wheels.front.x, this.wheels.front.y, 2, "lime");

//     // Car position

//     drawCircle(ctx, 0, 0, 5, 1, "black");

//     ctx.restore(); // RESTORE BACK TO WORLD SPACE
//     ctx.save();
//     ctx.translate(this.pos.x, this.pos.y);

//     // Draw velocity

//     const v = this.velocity.copy();
//     v.mult(2);
//     drawArrow(ctx, 0, 0, v.x, v.y, 3, "green");

//     ctx.restore();
//   }

//   draw(ctx: CanvasRenderingContext2D, showStats: boolean) {
//     this.drawParticles(ctx);

//     this.drawCar(ctx);

//     if (showStats) this.drawPhysics(ctx);
//   }
// }

// export default Car;
