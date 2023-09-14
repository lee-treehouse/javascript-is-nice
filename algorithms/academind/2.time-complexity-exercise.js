function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }
}

// goal: write an algorithm that takes an array of numbers as input and returns the sum of those
// numbers then calculate the complexity

function sumNumbers(numArray) {
  let result = 0;
  for (let i = 0; i < numArray.length; i++) {
    result += numArray[i];
  }
  return result;
}

// complexity
// function T = (n * 1) + 3
// fastest growing term is n*1
// remove the coefficient
// O(n) ie linear time

const result = sumNumbers([1, 3, 10]);
test(14, result);

// then, what is the lowest possible complexity.
// i don't think we can get it lower because we must handle each number, we can't predict what they will be

// what we might do is switch to a for of loop.. i never use those so lets look at the benefits
