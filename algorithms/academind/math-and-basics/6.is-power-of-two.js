function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }

  console.log("");
}

function isPowerOfTwoUsingInbuilt(n) {
  const logTwo = Math.log2(n);
  if (logTwo % 1 === 0) return true;
  return false;

  /* 

so this is going to need a math refresher.. we wnat to know if there is an integer i
where 2 to the power of i equals n 

so we can brute force it by going looping up - 2 to the power of 1, 2 to the power of 2 etc
but is there a math function we can use 

ok looking on mdn it looks like there is.. lets test it to be sure 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2

nice, it worked

*/
}

// without using log function
function isPowerOfTwoMineWithoutInbuilt(n) {
  const numIterations = Math.ceil(Math.sqrt(n));

  for (let i = 0; i <= numIterations; i++) {
    if (Math.pow(2, i) === n) return true;
  }
  return false;
}

// example showin in video
// but i made some changes to mod divide by 1 instead of mod divide by 2
// i didn't get expected results otherwise so maybe something to investigate
function isPowerOfTwo(n) {
  let numberDividedByTwo = n;
  while (numberDividedByTwo !== 1) {
    numberDividedByTwo = numberDividedByTwo / 2;
    if (numberDividedByTwo % 1 !== 0) return false;
  }
  return true;
}

test(true, isPowerOfTwo(1)); // 2 to the power of 0
test(true, isPowerOfTwo(2)); // 2 to the power of 1
test(true, isPowerOfTwo(4)); // 2 to the power of 2
test(true, isPowerOfTwo(8)); // 2 to the power of 3
test(true, isPowerOfTwo(16)); //square root of 16 is 4
test(true, isPowerOfTwo(32)); // square root of 32 is 5.something
test(false, isPowerOfTwo(20));
test(false, isPowerOfTwo(31));
test(false, isPowerOfTwo(5));
