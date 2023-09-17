function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }

  console.log("");
}

let counter = 0;
function longFib(number) {
  counter++;
  console.log(`RUNNING ${counter}`);

  if (number === 0 || number === 1) return 1;

  return longFib(number - 1) + longFib(number - 2);
}

let counterWithMemo = 0;
function longFibWithMemo(number, memo) {
  counterWithMemo++;
  console.log(`RUNNING ${counterWithMemo}`);

  let result;

  if (memo[number]) return memo[number];

  if (number === 0 || number === 1) {
    result = 1;
  } else {
    result =
      longFibWithMemo(number - 1, memo) + longFibWithMemo(number - 2, memo);
  }

  console.log(`setting memo ${number} to ${result}`);
  memo[number] = result;
  return result;
}

//test(5, longFib(4)); // ran 9 times
//test(5, longFibWithMemo(4, {})); // ran 7 times

//test(8, longFib(5)); // ran 15 times
//test(8, longFibWithMemo(5, {})); // ran 9 times

//test(13, longFib(6)); // ran 25 times
test(13, longFibWithMemo(6, {})); // ran 11 times

//test(21, longFib(7)); // ran 41 times
//test(34, longFib(8)); // ran 67 times
//test(55, longFib(9)); // ran 109 times
//test(89, longFib(10)); // ran 177 times
//test(144, longFib(11)); // ran 287 times

//test(10946, longFib(20)); // ran 21891 times
//test(1346269, longFib(30)); // ran 2692537 times
