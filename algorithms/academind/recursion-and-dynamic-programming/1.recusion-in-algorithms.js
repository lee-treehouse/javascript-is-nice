function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }

  console.log("");
}

const factorial = (number) => {
  if (number <= 1) return 1;

  return number * factorial(number - 1);
};

// number of function calls * the work that is done in each function
// each function call is O(1)
// but we call each function n times
// therefore time complexity is O(n)
// later in the course we're going to learn a different way to evaluate the time complexity

test(factorial(6), 720);
test(factorial(7), 720 * 7);
test(factorial(3), 6);
