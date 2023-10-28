function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }
}

/*

Write a function that takes the binary representation of an unsigned integer and returns the number of '1' 
bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will 
be given as a signed integer type. It should not affect your implementation, as the integer's internal 
binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, 
the input represents the signed integer. -3.

The input must be a binary string of length 32.

*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeightNotOptimised = function (n) {
  const digits = n.toString(2);
  const ones = digits.split("").filter((digit) => {
    return digit === "1";
  });
  return ones.length;
};

const functionToTest = hammingWeightNotOptimised;

// example 1
let input = 0b00000000000000000000000000001011;
let expected = 3;
test(expected, functionToTest(input));

// example 2
input = 0b00000000000000000000000010000000;
expected = 1;
test(expected, functionToTest(input));

// example 3
input = 0b11111111111111111111111111111101;
expected = 31;
test(expected, functionToTest(input));
