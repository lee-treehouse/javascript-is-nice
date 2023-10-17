class Grid {
  MAX_BOARD_X_COORD = 15;
  MAX_BOARD_Y_COORD = 15;

  //   obstacles = [
  //     [10, 1],
  //     [10, 2],
  //     [10, 3],
  //     [10, 4],
  //     [10, 5],
  //     [10, 6],
  //     [10, 7],
  //   ];

  obstacles = [];

  constructor() {
    this.setObstacles();
  }

  setObstacles() {
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

  transformVisitedSetToVisitedArray(visited) {
    const arr = Array.from(visited);
    const transformed = arr.map((item) => {
      const elements = item.split(",");
      return [parseInt(elements[0]), parseInt(elements[1])];
    });
    return transformed;
  }

  getNeighbours(coord) {
    const xVal = coord[0];
    const yVal = coord[1];

    const neighbours = [];

    const neighbourLeft = [xVal - 1, yVal];
    const neighbourRight = [xVal + 1, yVal];
    const neighbourAbove = [xVal, yVal + 1];
    const neighbourBelow = [xVal, yVal - 1];

    // top right bottom left

    const possibleNeighbours = [
      neighbourAbove,
      neighbourRight,
      neighbourBelow,
      neighbourLeft,
    ];

    for (const neighbour of possibleNeighbours) {
      if (!this.isCellBlockedOrOutOfBounds(neighbour))
        neighbours.push(neighbour);
    }
    return neighbours;
  }

  isCellBlockedOrOutOfBounds(coord) {
    const xVal = coord[0];
    const yVal = coord[1];

    if (xVal < 1 || xVal > this.MAX_BOARD_X_COORD) return true;
    if (yVal < 1 || yVal > this.MAX_BOARD_Y_COORD) return true;
    const matchingObstacles = this.obstacles.find(
      (obstacle) => obstacle[0] === xVal && obstacle[1] === yVal
    );
    if (matchingObstacles) return true;
    return false;
  }

  getVisitedAndPathDFS(startCoord, endCoord) {
    if (!startCoord || !endCoord) {
      console.log("missing coordinates");
      return;
    }

    let visited = new Set();
    let stack = [startCoord];
    let parents = {};

    while (stack.length) {
      const current = stack.pop();
      if (!visited.has(current.toString())) {
        visited.add(current.toString());

        if (current.toString() === endCoord.toString()) {
          let thing = parents[current.toString()];
          let path = [current];

          while (thing) {
            path.unshift(thing);
            thing = parents[thing.toString()];
          }

          return {
            visited: this.transformVisitedSetToVisitedArray(visited),
            path,
          };
        }

        const neighbours = this.getNeighbours(current);
        neighbours.forEach((neighbour) => {
          // it is going to make a big difference here if i just check if

          if (!visited.has(neighbour.toString())) {
            if (!parents[neighbour.toString()]) {
              parents[neighbour.toString()] = current;
            }
            stack.push(neighbour);
          }
        });
      }
    }

    return {
      visited: this.transformVisitedSetToVisitedArray(visited),
      path: [],
    };
  }

  getVisitedAndPathBFS(startCoord, endCoord) {
    if (!startCoord || !endCoord) {
      console.log("missing coordinates");
      return;
    }

    let visited = new Set();
    let queue = [startCoord];
    let parents = {};

    while (queue.length) {
      const current = queue.shift();
      if (!visited.has(current.toString())) {
        visited.add(current.toString());

        if (current.toString() === endCoord.toString()) {
          let thing = parents[current.toString()];
          let path = [current];

          while (thing) {
            path.unshift(thing);
            thing = parents[thing.toString()];
          }

          return {
            visited: this.transformVisitedSetToVisitedArray(visited),
            path,
          };
        }

        const neighbours = this.getNeighbours(current);
        neighbours.forEach((neighbour) => {
          if (!visited.has(neighbour.toString())) {
            if (!parents[neighbour.toString()]) {
              parents[neighbour.toString()] = current;
            }
            queue.push(neighbour);
          }
        });
      }
    }
    return {
      visited: this.transformVisitedSetToVisitedArray(visited),
      path: [],
    };
  }
}
