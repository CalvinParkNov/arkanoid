import { Vector } from "../types";

export class Brick {
  // creating bricks images in HTML
  private brickImage: HTMLImageElement = new Image();

  constructor(
    private brickWidth: number,
    private brickHeight: number,
    private position: Vector,
    private brickEnergy: number,
    image: string
  ) {
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.position = position;
    this.brickEnergy = brickEnergy;
    this.brickImage.src = image;
  }
  //   how do we access from outside becuz it is private? use getter and setter
  // set Getters. Only access with these getters.
  get width(): number {
    return this.brickWidth;
  }
  get height(): number {
    return this.brickHeight;
  }
  get pos(): Vector {
    return this.position;
  }
  get energy(): number {
    return this.brickEnergy;
  }
  get image(): HTMLImageElement {
    return this.brickImage;
  }
  //set Setters
  set energy(energy: number) {
    this.brickEnergy = energy;
  }
}
