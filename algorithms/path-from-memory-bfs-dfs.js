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

// this isn't actually returning the path right now
const getPathDFS = (startCoord, endCoord) => {
  let visited = new Set();

  let stack = [startCoord];

  let count = 0;

  let parents = {};

  while (stack.length) {
    // console.log(stack);
    const current = stack.pop();
    if (!visited.has(current.toString())) {
      count++;
      console.log("visiting " + current + " move " + count);
      visited.add(current.toString());

      if (current.toString() === endCoord.toString()) {
        console.log("I found it - what should I do next?");
        console.log(
          "i'm not returning a path just yet but i've logged where I looked"
        );

        console.log("******** parents **********");
        console.log(parents);
        console.log("******************************");

        let thing = parents[current.toString()];
        let path = [current];

        while (thing) {
          path.unshift(thing);
          thing = parents[thing.toString()];
          //          console.log(thing);
        }

        console.log("******** path **********");
        console.log(path);
        console.log("******************************");

        return;
      }

      const neighbours = getNeighbours(current);
      neighbours.forEach((neighbour) => {
        if (!visited.has(neighbour.toString())) {
          if (!parents[neighbour.toString()]) {
            parents[neighbour.toString()] = current;
          }
          stack.push(neighbour);
        }
      });
    }
  }

  console.log("oh no i didn't find anything");
  return [];
};

// this isn't actually returning the path right now
const getPathBFS = (startCoord, endCoord) => {
  let visited = new Set();
  let count = 0;
  let queue = [startCoord];
  let parents = {};

  while (queue.length) {
    const current = queue.shift();
    if (!visited.has(current.toString())) {
      count++;
      console.log("visiting " + current + " move " + count);
      visited.add(current.toString());

      if (current.toString() === endCoord.toString()) {
        console.log("I found it - what should I do next?");
        console.log(
          "i'm not returning a path just yet but i've logged where I looked"
        );

        console.log("******** parents **********");
        console.log(parents);
        console.log("******************************");

        let thing = parents[current.toString()];
        let path = [current];

        while (thing) {
          path.unshift(thing);
          thing = parents[thing.toString()];
          //          console.log(thing);
        }

        console.log("******** path **********");
        console.log(path);
        console.log("******************************");

        return;
      }

      const neighbours = getNeighbours(current);
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

  console.log("oh no i didn't find anything");
  return [];
};

const getPath = (startCoord, endCoord) => {
  return getPathDFS(startCoord, endCoord);
  // return getPathBFS(startCoord, endCoord);
};

console.log(getPath([1, 1], [4, 3]));
