function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }
}

const functionToTest = singleNumber;

// example 1
let input = [2, 2, 1];
let expected = 1;
test(expected, functionToTest(input));

// example 2
input = [4, 1, 2, 1, 2];
expected = 4;
test(expected, functionToTest(input));

// example 3
input = [1];
expected = 1;
test(expected, functionToTest(input));
