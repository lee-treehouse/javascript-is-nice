const MAX_BOARD_X_COORD = 5;
const MIN_BOARD_X_COORD = 1;
const MAX_BOARD_Y_COORD = 5;
const MIN_BOARD_Y_COORD = 1;

function test(expected, actual) {
  if (expected === actual || expected.toString() === actual.toString()) {
    console.log("PASS");
  } else {
    console.log(`FAIL:`);
    console.log(`expected:`);
    console.log(expected);
    console.log(`actual:`);
    console.log(actual);
    //    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }
  console.log();
}

const obstacles = [
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
];

const getNeighbours = (coord) => {
  const xVal = coord[0];
  const yVal = coord[1];

  const neighbours = [];

  const neighbourLeft = [xVal - 1, yVal];
  const neighbourRight = [xVal + 1, yVal];
  const neighbourAbove = [xVal, yVal + 1];
  const neighbourBelow = [xVal, yVal - 1];

  const possibleNeighbours = [
    neighbourLeft,
    neighbourRight,
    neighbourAbove,
    neighbourBelow,
  ];

  for (const neighbour of possibleNeighbours) {
    if (!isCellBlockedOrOutOfBounds(neighbour)) neighbours.push(neighbour);
  }
  return neighbours;
};

const isCellBlockedOrOutOfBounds = (coord) => {
  const xVal = coord[0];
  const yVal = coord[1];

  if (xVal < MIN_BOARD_X_COORD || xVal > MAX_BOARD_X_COORD) return true;
  if (yVal < MIN_BOARD_Y_COORD || yVal > MAX_BOARD_Y_COORD) return true;
  const matchingObstacles = obstacles.find(
    (obstacle) => obstacle[0] === xVal && obstacle[1] === yVal
  );
  if (matchingObstacles) return true;
  return false;
};

const bfs = (startCoord, endCoord) => {
  const queue = [startCoord];
  let visited = new Set();

  let parents = {};

  while (queue.length) {
    const current = queue.shift();
    if (!visited.has(current.toString())) {
      visited.add(current.toString());

      if (current[0] === endCoord[0] && current[1] === endCoord[1]) {
        /*
        console.log("Eureka, target cell found");

         console.log(
          `I am at ${current} and I got here from ${
            parents[current.toString()]
          }`
        );

         console.log(parents);
*/

        let pathTravelled = [current];
        let item = parents[current.toString()];
        // put it at the start of the array so you don't need to reverse it later
        pathTravelled.unshift(item);

        while (item) {
          item = parents[item.toString()];
          if (item) pathTravelled.unshift(item);
        }

        console.log();
        console.log("path travelled:");
        console.log(pathTravelled);

        return;
      }

      const possibleNeighbours = getNeighbours(current);
      possibleNeighbours.forEach((neighbour) => {
        if (!visited.has(neighbour.toString())) {
          parents[neighbour.toString()] = current;
          queue.push(neighbour);
        }
      });
    }
  }

  return [];
};

console.log(bfs([1, 1], [4, 3]));
