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
  bricks: Brick[],
  paddle: Paddle
  // ball: Ball
) {
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);

  //Move paddle and check so it will not exit the borders.
  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
  ) {
    paddle.movePaddle();
  }

  requestAnimationFrame(() => {
    gameLoop(view, bricks, paddle);
  });
}

function startGame(view: CanvasView) {
  // Reset Displays
  score = 0;
  view.drawInfo("");
  view.drawScore(0);
  // Create all bricks
  const bricks = createBricks();

  // create a Paddle
  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_STARTX,
      y: view.canvas.height - PADDLE_HEIGHT - 5,
    },
    PADDLE_IMAGE
  );
  gameLoop(view, bricks, paddle);
}

// Create a new View
const view = new CanvasView("#playField");
view.initStartButton(startGame);
