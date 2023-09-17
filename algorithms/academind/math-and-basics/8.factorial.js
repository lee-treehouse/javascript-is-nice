function test(actual, expected) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }

  console.log("");
}

const factorialWhile = (n) => {
  if (n === 1) return n;
  // eg if n is 6 return 6 * 5 * 4 * 3 * 2 * 1;
  // eg if n is 3 return 3 * 2 * 1;
  let total = n;
  let current = n;
  while (current !== 1) {
    total *= current - 1;
    current--;
  }
  return total;
};

const factorialFor = (n) => {
  let result = n;
  for (let i = 2; i < n; i++) result *= i;
  return result;
};

const factorial = (n, currentTotal) => {
  // throw on negative numbers

  let subtotal = currentTotal ?? 1;
  console.log({ subtotal });

  if (n === 1) return subtotal;

  return factorial(n - 1, subtotal * n);
};

const factorial_from_tutorial = (number) => {
  if (number === 1) return 1;

  const subtotal = number * factorial_from_tutorial(number - 1);
  return subtotal;
};

test(factorial(6), 720);
test(factorial(7), 720 * 7);
test(factorial(3), 6);

// test(factorial_from_tutorial(6), 720);
// test(factorial_from_tutorial(7), 720 * 7);
// test(factorial_from_tutorial(3), 6);

// this is my guess from the prompt. time complexity would be O(n) linear time as for each n we loop

// ok so why did I use a while here? maybe because recent examples have been 'while'. I hardly ever use while.
// lets just do it as a for loop
// then we can have a go at recursion as that will be the next one
