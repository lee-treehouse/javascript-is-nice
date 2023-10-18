class JSNMazeSettings {
  // Using maze of obstacles as shown here
  // https: //www.youtube.com/watch?v=GC-nBgi9r0U
  obstacles = [];
  MAX_BOARD_X_COORD = 15;
  MAX_BOARD_Y_COORD = 15;

  constructor() {
    this.generateObstacles();
  }

  getStrategyWeaknesses(strategy) {
    if (strategy === "dfs")
      return {
        start: [2, 2],
        end: [2, 5],
      };
    if (strategy === "dfs")
      return {
        start: [2, 2],
        end: [14, 10],
      };

    return {};
  }

  generateObstacles() {
    // outer borders
    for (let i = 1; i <= 15; i++) {
      this.obstacles.push([i, 15]);
      this.obstacles.push([i, 1]);
      this.obstacles.push([15, i]);
      this.obstacles.push([1, i]);
    }

    // bottom area short vertical columns
    for (let i = 2; i <= 3; i++) {
      this.obstacles.push([7, i]);
      this.obstacles.push([9, i]);
      this.obstacles.push([11, i]);
      this.obstacles.push([13, i]);
    }

    // bottom area short horizontal row
    for (let i = 5; i <= 6; i++) {
      this.obstacles.push([i, 3]);
    }

    for (let i = 3; i <= 7; i++) {
      this.obstacles.push([3, i]);
    }
    this.obstacles.push([2, 7]);

    // top area short vertical columns
    for (let i = 13; i <= 14; i++) {
      this.obstacles.push([3, i]);
      this.obstacles.push([13, i]);
    }

    // top area medium vertical columns
    for (let i = 11; i <= 14; i++) {
      this.obstacles.push([5, i]);
      this.obstacles.push([7, i]);
    }

    // top short horizontal row
    for (let i = 3; i <= 5; i++) {
      this.obstacles.push([i, 11]);
    }

    // mid longish horizontal row
    for (let i = 3; i <= 9; i++) {
      this.obstacles.push([i, 9]);
    }

    // top area medium vertical columns
    for (let i = 10; i <= 14; i++) {
      this.obstacles.push([9, i]);
    }

    for (let i = 9; i <= 13; i++) {
      this.obstacles.push([11, i]);
    }
    this.obstacles.push([12, 13]);

    // right mid medium vertical columns
    for (let i = 7; i <= 11; i++) {
      this.obstacles.push([13, i]);
    }

    // mid longish horizontal row
    for (let i = 9; i <= 13; i++) {
      this.obstacles.push([i, 7]);
    }

    for (let i = 11; i <= 14; i++) {
      this.obstacles.push([i, 5]);
    }

    for (let i = 5; i <= 8; i++) {
      this.obstacles.push([5, i]);
      this.obstacles.push([7, i]);
    }

    this.obstacles.push([9, 5]);
    this.obstacles.push([9, 6]);

    this.obstacles.push([14, 9]);
  }
}

class DefaultGridSettings {
  obstacles = [
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
  ];
  MAX_BOARD_X_COORD = 5;
  MAX_BOARD_Y_COORD = 5;

  getStrategyWeaknesses(strategy) {
    return {};
  }
}

class MediumGridSettings {
  obstacles = [
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
    [6, 6],
  ];
  MAX_BOARD_X_COORD = 11;
  MAX_BOARD_Y_COORD = 11;

  getStrategyWeaknesses(strategy) {
    return {};
  }
}

const getGridSettings = (settingsName) => {
  switch (settingsName) {
    case "johnsongnow-maze":
      return new JSNMazeSettings();
    case "medium":
      return new MediumGridSettings();
    default:
      return new DefaultGridSettings();
  }
};
