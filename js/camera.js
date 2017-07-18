Camera = new class {

  constructor() {

    this.x = 0;
    this.y = 0;
  }

  update() {

    // Follow the player in the middle of the screen.
    this.x = Player.getX() - (CANVAS_W / 2) + (TILE_SIZE / 2);
    this.y = Player.getY() - (CANVAS_H / 2) + (TILE_SIZE / 2);

    if (this.x < TILE_SIZE) {

      this.x = TILE_SIZE;
    }
    else if (this.x > (TILE_SIZE * NUMBER_OF_TILES_X) - CANVAS_W - TILE_SIZE) {

      this.x = (TILE_SIZE * NUMBER_OF_TILES_X) - CANVAS_W - TILE_SIZE;
    }

    if (this.y < TILE_SIZE) {

      this.y = TILE_SIZE;
    }
    else if (this.y > (TILE_SIZE * NUMBER_OF_TILES_Y) - CANVAS_H - TILE_SIZE) {

      this.y = (TILE_SIZE * NUMBER_OF_TILES_Y) - CANVAS_H - TILE_SIZE;
    }
  }

  getX() {

    return this.x;
  }

  getY() {

    return this.y;
  }
}
