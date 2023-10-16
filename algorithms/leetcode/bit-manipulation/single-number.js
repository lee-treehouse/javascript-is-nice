function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }
}

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Lee's notes

* constant extra space ie don't grow memory with nums size 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberFirstPass = function (nums) {
  // first pass I'm ignoring the constant extra space constraint

  let numCounts = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numCounts[num]) {
      numCounts[num]++;
    } else {
      numCounts[num] = 1;
    }
  }

  for (const [key, value] of Object.entries(numCounts)) {
    if (value === 1) {
      return parseInt(key);
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // second pass reread the problem. any num that doesn't appear once appears twice
  // we can't use EXTRA space but I guess we can use the exising space
  // I don't think we can sort
  // We must be doing something where we change the array items in place
  // I know the category is in bit manipulation so we must be changing a bit in some way
  // maybe changing it on the first pass and reversing the change on the second pass
  // but I don't know yet what the answer is, let's watch the video

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    result = num ^ result;
  }

  return result;

  /* er wat? ok let's see an example

  but first - we are using XOR ^ and lets remember the truth table for XOR

  | A | B | A ^ B 
  ---------------
  | 0 | 0 |   0
  | 0 | 1 |   1
  | 1 | 0 |   1
  | 1 | 1 |   0

  so if we are using XOR on 

  0 1 0 0 ^
  0 0 0 1 

  we get 
  0 1 0 1

  cool cool.. so lets work through our loop with our example array 0f 4,1,2,1,2

  reminder that these are the binary representations of those decimal numbers:
  
  | 4 | 1 0 0
  | 2 | 0 1 0
  | 1 | 0 0 1

result = 0, lets start the loop 

num = 4 (100)
100 ^
000
=
100

num = 1 (001)
001 ^ 
100 
= 
101

num = 2 (010)
010 ^
101 
= 
111

num = 1 (001)
001 ^
111 
= 
110

num = 2 (010)
010 ^
110 
= 
100

ok the result is 100 which is 4, which is the number that is only represented once

*/
};

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
