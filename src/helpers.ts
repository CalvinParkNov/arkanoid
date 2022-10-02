import { Brick } from "./sprites/Bricks";
import {
  BRICK_IMAGES,
  LEVEL,
  STAGE_COLS,
  STAGE_PADDING,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_ENERGY,
  BRICK_PADDING,
} from "./setup";

//all the bricks for the game

export function createBricks(): Brick[] {
  return LEVEL.reduce((ack, element, i) => {
    // Bricks location
    const row = Math.floor(i + 1 / STAGE_COLS);
    const col = i % STAGE_COLS;
    // put some spaces between bricks and the wall
    const x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING);
    const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING);

    if (element === 0) {
      return ack;
    }
    return [
      ...ack,
      new Brick(
        BRICK_WIDTH,
        BRICK_HEIGHT,
        //specify x and y cordinate
        { x, y },
        BRICK_ENERGY[element],
        BRICK_IMAGES[element]
      ),
    ];
  }, [] as Brick[]);
}
