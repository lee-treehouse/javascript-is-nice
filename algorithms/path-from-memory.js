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

// test(
//   [
//     [2, 5],
//     [4, 5],
//   ],
//   getNeighbours([3, 5])
// );

const bfs = (startCoord, endCoord) => {
  const pathTravelled = [];

  const queue = [startCoord];
  const visited = new Set();
  let ancestors = {};

  while (queue.length > 0) {
    currentCell = queue.shift();

    if (!visited.has(currentCell.toString())) {
      visited.add(currentCell.toString());

      if (currentCell.toString() === endCoord.toString()) {
        // exit the loop, we've found the destination
        // console.log("match found");

        // we want to be able to access something lke
        // ancestor["4,3"] and have it return [4,4]
        // console.log("match is");
        // console.log(currentCell);
        // console.log("first ancestor is ");
        // console.log(ancestors[currentCell]);

        pathTravelled.push(currentCell);

        let ancestor = ancestors[currentCell];
        while (ancestor) {
          pathTravelled.push(ancestor);
          ancestor = ancestors[ancestor];
        }
        break;
      }

      const neighbours = getNeighbours(currentCell);

      neighbours.forEach((neighbour) => {
        if (!visited.has(neighbour.toString())) {
          queue.push(neighbour);
          ancestors[neighbour.toString()] = currentCell;
        }
      });
    }
  }

  return pathTravelled.reverse();
};

console.log(bfs([1, 1], [4, 3]));
