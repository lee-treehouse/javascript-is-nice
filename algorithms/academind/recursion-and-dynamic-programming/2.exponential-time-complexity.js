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

//test(5, longFib(4)); // ran 9 times
//test(8, longFib(5)); // ran 15 times
//test(13, longFib(6)); // ran 25 times
//test(21, longFib(7)); // ran 41 times
//test(34, longFib(8)); // ran 67 times
//test(55, longFib(9)); // ran 109 times
//test(89, longFib(10)); // ran 177 times
//test(144, longFib(11)); // ran 287 times

//test(10946, longFib(20)); // ran 21891 times
test(1346269, longFib(30)); // ran 2692537 times

// exponential increase in iterations
// n goes up by 1, we see a bigger increase in iterations

// not 0(n^2) where we'd see n = 6, iterations = 6*6 ie 36

// comparing quadratic and exponential

/*
|  n  |  quadratic n ^ 2|  exponential eg 2 ^n  | long fib | cubic time n ^ 3 |  
| --- | --------------- | --------------------- | -------- |
| 2   |  4              |  4                    |          | 
| 3   |  9              |  8                    |          |
| 4   |  16             |  16                   | 9        |
| 5   |  25             |  32                   | 15       |
| 6   |  36             |  64                   | 25       |
| 7   |  49             |  128                  | 41       |
| 8   |  64             |  256                  | 67       |
| 9   |  81             |  512                  | 109      |
| 10  |  100            |  1024                 | 177      | 1000
| 11  |  121            |  2048                 | 287      |
| ... |  ...            |  ....                 | ...      |
| 20  |  400            |  1048576              | 21891    | 8000
| ... |  ...            |  ....                 | ...      |
| 30  |  900            |  1073741824           | 2692537  | 27000
*/

// basically for every function execution we start two more function executions

// so we're talking about this
