/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number. Let these two numbers 
be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array 
[index1, index2] of length 2.

The tests are generated such that there is exactly one solution. 
You may not use the same element twice.

Your solution must use only constant extra space.
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  if (numbers.length < 2) return [];
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < numbers.length - 1) {
    const leftValue = numbers[leftPointer];

    for (let i = leftPointer + 1; i <= rightPointer; i++) {
      const rightValue = numbers[i];
      const sum = leftValue + rightValue;

      if (sum === target) {
        return [leftPointer + 1, i + 1];
      }
      if (sum > target) rightPointer = i;
    }

    leftPointer++;
  }
};

function test(expected, actual) {
  if (
    expected === actual ||
    (expected && actual && expected.toString() === actual.toString())
  ) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }
}

const functionToTest = twoSum;

// example 1
let input = [2, 7, 11, 15];
let input2 = 9;
let expected = [1, 2];
test(expected, functionToTest(input, input2));

// example 1.5
input = [2, 3, 7, 11, 15];
input2 = 10;
expected = [2, 3];
test(expected, functionToTest(input, input2));

// example 1.75
input = [2, 3, 7, 11, 15];
input2 = 26;
expected = [4, 5];
test(expected, functionToTest(input, input2));

// example 2
input = [2, 3, 4];
input2 = 6;
expected = [1, 3];
test(expected, functionToTest(input, input2));

// example 3
input = [-1, 0];
input2 = -1;
expected = [1, 2];
test(expected, functionToTest(input, input2));
