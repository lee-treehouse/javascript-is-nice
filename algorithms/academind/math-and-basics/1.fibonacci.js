function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }
}

const HIGHEST_NUMBER_TO_CALCULATE = 2000;

function printFibonacci(currTotal, prevTotal) {
  const total = currTotal + prevTotal;
  if (total > HIGHEST_NUMBER_TO_CALCULATE) return;
  console.log(total);
  return printFibonacci(total, currTotal);
}

printFibonacci(1, 0);

function foo(n, targetN, currTotal, prevTotal) {
  if (targetN === 0) return 1;

  const total = currTotal + prevTotal;
  const newN = n + 1;
  if (newN >= targetN) return total;
  return foo(newN, targetN, total, currTotal);
}

//const result = foo(0, 6, 1, 0);
//test(13, result);

function fib(n) {
  return foo(0, n, 1, 0);
}

const result = fib(4);
test(5, result);

const result2 = fib(0);
test(1, result2);

// lets try again with the starting code from the sample

const fib2 = (n) => {
  const sequence = [1, 1];
  for (let i = 2; i <= n; i++) {
    const nextNumber = sequence[i - 2] + sequence[i - 1];
    sequence.push(nextNumber);
  }
  return sequence[n];
};

// so what would we say about algorithmix complexity?
T = 3 + 2n;
// fasteset changer is 2n
// drop the coefficient
// n - O(n) ie linear

const result3 = fib2(4);
test(5, result);

const result24 = fib2(0);
test(1, result2);
