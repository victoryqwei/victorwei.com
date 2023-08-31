import IToy from "../IToy";
import Vector from "../Vector";
import Cell from "./Cell";

const rules = [
  "23/3", // Game of life [0]
  "23/36", // High life [1]
  "4567/345", // Assimilation [2]
  "125/36", // 2 x 2 [3]
  "34578/3678", // Day and Night [4]
  "1358/357", // Amoeba [5]
  "245/368", // Move [6]
  "238/357", // Pseudo Life [7]
  "5678/35678", // Diamoeba [8]
  "34/34", // 34 [9]
  "5/345", // Long Life [10]
  "235678/3678", // Stains [11]
  "/2", // Seeds [12]
  "12345/3", // Maze [13]
  "235678/378", // Coagulations [14]
  "1/1", // Gnarl [15]
  "1357/1357", // Replicator [16]
  "05678/3458", // Mystery [17]
  "3456/278/6", // Star Wars [18]
  "3458/37/4", // Living on the Edge [19]
  "6/246/3", // Brian 6 [20]
  "12/34/3", // Frogs [21]
  "124/3/3", // Like Frogs Rule [22]
];

class Life implements IToy {
  board: Cell[][] = [];
  cellWidth = 5;
  ruleString = rules[0]; // Survive / Birth / Death (rulestring)
  death = false;
  cycles = 1;

  survivalRuleString = this.ruleString.substr(0, this.ruleString.indexOf("/"));
  birthRuleString = this.ruleString.substr(this.ruleString.indexOf("/") + 1, this.ruleString.length);

  constructor() {
    const ruleString = rules[0];
    if ((ruleString.match(new RegExp("/", "g")) || []).length > 1) {
      this.birthRuleString = this.birthRuleString.substr(0, this.birthRuleString.indexOf("/"));
      this.death = true;
    }

    this.init();
    this.addMouse(new Vector(Math.random() * window.innerWidth, Math.random() * window.innerHeight));
  }

  init() {
    const { board, cellWidth } = this;

    // Initialize the board with a cell for each cellWidth
    for (let x = 0; x < window.innerWidth / cellWidth; x++) {
      board.push([]);
      for (let y = 0; y < window.innerHeight / cellWidth; y++) {
        board[x][y] = new Cell(0, this);
      }
    }

    // Get the neighbours for all the cells
    for (let x = 0; x < window.innerWidth / cellWidth; x++) {
      for (let y = 0; y < window.innerHeight / cellWidth; y++) {
        // Radius of 1
        const radius = 1;
        for (let i = -radius; i <= radius; i++) {
          for (let j = -radius; j <= radius; j++) {
            if (board[x + i] && board[x + i][y + j] && !(i === 0 && j === 0)) {
              board[x][y].neighbours.push(board[x + i][y + j]);
            }
          }
        }
      }
    }
  }

  clearBoard() {
    this.board = [];
    this.init();
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw cells
    for (let x = 0; x < this.board.length; x++) {
      for (let y = 0; y < this.board[x].length; y++) {
        this.board[x][y].draw(x, y, ctx);
      }
    }
  }

  prepareUpdate() {
    for (let x = 0; x < this.board.length; x++) {
      for (let y = 0; y < this.board[x].length; y++) {
        this.board[x][y].resetNext();
        this.board[x][y].getNeighbours();
        this.board[x][y].prepare(this.birthRuleString, this.survivalRuleString);
      }
    }
  }

  nextGeneration() {
    for (let x = 0; x < this.board.length; x++) {
      for (let y = 0; y < this.board[x].length; y++) {
        this.board[x][y].update();
      }
    }
  }

  addMouse(mouse: Vector) {
    const mx = Math.floor(mouse.x / this.cellWidth);
    const my = Math.floor(mouse.y / this.cellWidth);
    // Add points
    const radius = 3;
    for (let i = -radius; i <= radius; i++) {
      for (let j = -radius; j <= radius; j++) {
        if (this.board[mx + i] && this.board[my + j]) {
          this.board[mx + i][my + j].state = Math.floor(Math.random() * 2);
        }
      }
    }
  }

  update(_: number, mouse: Vector, mouseDown: boolean) {
    this.prepareUpdate();
    this.nextGeneration();

    if (mouseDown) this.addMouse(mouse);
  }

  setRuleset(index: number) {
    this.ruleString = rules[index];

    this.birthRuleString = this.ruleString.substr(this.ruleString.indexOf("/") + 1, this.ruleString.length);
    this.survivalRuleString = this.ruleString.substr(0, this.ruleString.indexOf("/"));
    if ((this.ruleString.match(new RegExp("/", "g")) || []).length > 1) {
      this.birthRuleString = this.birthRuleString.substr(0, this.birthRuleString.indexOf("/"));
      this.death = true;
    }

    this.clearBoard();
  }
}

export default Life;
