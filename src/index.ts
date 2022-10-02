import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Bricks";
import { Paddle } from "./sprites/Paddle";

//images
import PADDLE_IMAGE from "./images/paddle.png";
import BALL_IMAGE from "./images/ball.png";
// Level and colors
import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY,
} from "./setup";
// Helpers
import { createBricks } from "./helpers";

let gameOver: boolean = false;
let score: number = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo("Game Over!");
  gameOver = false;
}
function setGameWin(view: CanvasView) {
  view.drawInfo("Game Won!");
  gameOver = false;
}
// main game loop
function gameLoop(
  view: CanvasView,
  bricks: Brick[]
  // paddle: Paddle,
  // ball: Ball
) {
  view.clear();
  view.drawBricks(bricks);

  requestAnimationFrame(() => {
    gameLoop(view, bricks);
  });
}

function startGame(view: CanvasView) {
  // Reset Displays
  score = 0;
  view.drawInfo("");
  view.drawScore(0);
  // Create all bricks
  const bricks = createBricks();
  gameLoop(view, bricks);
}

// Create a new View
const view = new CanvasView("#playField");
view.initStartButton(startGame);
