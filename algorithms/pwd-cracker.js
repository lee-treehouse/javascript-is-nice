function test(expected, actual) {
  if (expected === actual || expected.toString() === actual.toString()) {
    console.log("PASS");
  } else {
    console.log(`FAIL:`);
    console.log(`expected:`);
    console.log(expected.toString());
    console.log(`actual:`);
    console.log(actual.toString());
  }
  console.log();
}

const possibleChars = ["1", "2", "3", "A", "B", "C"];

const getNeighbours = (attempt) => {
  const neighbours = [];

  for (let i = 0; i < possibleChars.length; i++) {
    neighbours.push([...attempt, possibleChars[i]]);
  }

  return neighbours;
};

test(
  [
    ["1", "1"],
    ["1", "2"],
    ["1", "3"],
    ["1", "A"],
    ["1", "B"],
    ["1", "C"],
  ],
  getNeighbours(["1"])
);
test(
  [
    ["2", "1"],
    ["2", "2"],
    ["2", "3"],
    ["2", "A"],
    ["2", "B"],
    ["2", "C"],
  ],
  getNeighbours(["2"])
);
test(
  [
    ["2", "1", "1"],
    ["2", "1", "2"],
    ["2", "1", "3"],
    ["2", "1", "A"],
    ["2", "1", "B"],
    ["2", "1", "C"],
  ],
  getNeighbours(["2", "1"])
);

const expectedPassword = ["1", "1", "1", "1"];

const checkPassword = () => {
  const queue = [];

  possibleChars.forEach((possibleChar) => queue.push(possibleChar));

  const checked = new Set();

  let maxCounter = 300000000;
  let counter = 0;
  while (queue.length && counter <= maxCounter) {
    counter++;

    const currentReference = queue.shift();

    console.log({ currentReference });

    const currentValue = currentReference.toString();

    if (!checked.has(currentValue)) {
      if (currentValue === expectedPassword.toString()) {
        console.log(`Yay match found after ${counter} iterations!`);
        console.log(currentReference);
        return;
      }

      checked.add(currentValue);

      const neighbours = getNeighbours(currentReference);

      neighbours.forEach((neighbour) => {
        if (!checked.has(neighbour.toString())) {
          queue.push(neighbour);
        }
      });
    }
  }

  console.log("no match found");
};

checkPassword();
