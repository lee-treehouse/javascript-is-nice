function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }

  console.log("");
}

function logCompletionTime(startTime, endTime, n, i) {
  console.log(
    `It took me ${endTime - startTime} ms (?) to do the needful for ${n}!`
  );

  if (i) console.log(`I looped ${i} times`);
}

const isPrimeNoPerfAnalysis = (n) => {
  const numIterations = Math.floor(n / 2);
  for (let i = 2; i < numIterations; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const isPrimeBeforeOptimisation = (n) => {
  const startTime = performance.now();
  const numIterations = Math.floor(n / 2);

  let i;
  for (i = 2; i < numIterations; i++) {
    if (n % i === 0) {
      const finishTime = performance.now();
      logCompletionTime(startTime, performance.now(), n, i + 1);
      return false;
    }
  }

  logCompletionTime(startTime, performance.now(), n, i + 1);
  return true;
};

const isPrime = (n) => {
  const startTime = performance.now();
  const numIterations = Math.ceil(Math.sqrt(n));

  let i;
  for (i = 2; i <= numIterations; i++) {
    if (n % i === 0) {
      const finishTime = performance.now();
      logCompletionTime(startTime, performance.now(), n, i + 1);
      return false;
    }
  }

  logCompletionTime(startTime, performance.now(), n, i + 1);
  return true;
};

test(true, isPrime(7));
test(false, isPrime(21));
test(true, isPrime(5));
test(false, isPrime(9));
test(true, isPrime(27277));

// ok now we have introduced the diea that a non prime must have at least two sets of factors

// 1 and itself
// another set

// but what we can say about that other set is that at least one of the two factors must be less than or equal to
// the swuare root of n

// for example.. n is 25.. square root of n is 5.
// if both factors are bigger than 5, the resulting number is greater than 25!

// so we actually should only have to check up to and including the square root of n.. lets make that
// modification to our code

// ok, doing this change has brought the number of iterations down from 13639 to 168 for my 27277

// we're going to figure out time complexity and I'm pretty sure it's going to be O(log(n)) with what i
// learned earlier that logarithm is the inverse of the exponent (or inverse of the square specifically)
// something like that

// ok the video is saying o(sqrt(n)) lets see where that goes
