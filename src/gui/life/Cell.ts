import Life from ".";

class Cell {
  state: number = 0;
  prevState?: number;
  nextState = 0;
  neighbours: Cell[] = [];
  neighbourCount: number = 0;
  deathCount: number = 0;

  dying: boolean = false;
  nextDying: boolean = false;
  nextDeathCount: number = 0;

  constructor(state: number, readonly life: Life) {
    this.state = state || 0;

    if (!life.death) {
      this.deathCount = 0;
    } else {
      this.deathCount = parseInt(life.ruleString.substr(life.ruleString.lastIndexOf("/") + 1, life.ruleString.length));
    }
  }

  resetNext() {
    this.nextState = 0;
    this.nextDying = false;
    if (!this.life.death) {
      this.deathCount = 0;
    } else {
      this.deathCount = parseInt(this.life.ruleString.substr(this.life.ruleString.lastIndexOf("/") + 1, this.life.ruleString.length));
    }
  }

  getNeighbours() {
    // Get the cells neighbours
    let neighbours = 0;
    for (let i = 0; i < this.neighbours.length; i++) {
      neighbours += this.neighbours[i].state;
    }
    this.neighbourCount = neighbours;
  }

  prepare(birthRuleString: string, surviveRuleString: string) {
    // Birth / Create new cell
    for (let i = 0; i < birthRuleString.length; i++) {
      const dead = this.state == 0;
      const neighbourRule = this.neighbourCount == parseInt(birthRuleString[i]);
      const notDying = this.dying === false;
      if (dead && neighbourRule && notDying) {
        this.nextState = 1;
      }
    }

    // Survive / Keep on living if on land / Death
    let die = true;

    for (let i = 0; i < surviveRuleString.length; i++) {
      const alive = this.state == 1;
      const neighbourRule = this.neighbourCount == parseInt(surviveRuleString[i]);
      const notDying = this.dying === false;
      if (alive && neighbourRule && notDying) {
        this.nextState = this.state;
        die = false;
      }
    }

    if (die && this.state == 1) {
      this.nextDying = true;
      if (this.deathCount === 0) {
        this.nextState = 0;
        this.nextDying = false;
      } else {
        this.nextDeathCount -= 1;
      }
    }
  }

  update() {
    this.prevState = this.state;
    this.state = this.nextState;
    this.dying = this.nextDying;
    this.deathCount = this.nextDeathCount;
  }

  draw(x: number, y: number, ctx: CanvasRenderingContext2D) {
    const { cellWidth } = this.life;
    // Draw new cell state
    ctx.globalAlpha = 0.7;
    if (this.state === 1) {
      ctx.fillStyle = "red";
      ctx.fillRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
    } else if (this.dying) {
      ctx.fillStyle = "orange";
      ctx.fillRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
    }
    ctx.globalAlpha = 1;
  }
}

export default Cell;
