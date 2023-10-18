class Grid {
  MAX_BOARD_X_COORD = 5;
  MAX_BOARD_Y_COORD = 5;

  obstacles = [
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
  ];

  constructor(height, width, obstacles) {
    if (height) this.MAX_BOARD_X_COORD = height;
    if (width) this.MAX_BOARD_Y_COORD = width;
    if (obstacles) this.obstacles = obstacles;
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
