function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }

  console.log("");
}

// complexity - constant time O(1)
function isEven(n) {
  return n % 2 === 0;
}

test(true, isEven(2));
test(false, isEven(5));

// not sure what should really happen for negatives
test(true, isEven(-2));
test(false, isEven(-5));

// see the test fail
// test(true, isEven(89));
