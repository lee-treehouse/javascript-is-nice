/*

This question is asked by Google. Given an array of integers, return whether or not two
 numbers sum to a given target, k.
 Note: you may not sum a number with itself.

[1, 3, 8, 2], k = 10, return true (8 + 2)
[3, 9, 13, 7], k = 8, return false
[4, 2, 6, 5, 2], k = 4, return true (2 + 2)

*/

function test(expected, actual) {
  if (expected === actual || expected.toString() === actual.toString()) {
    console.log("PASS");
  } else {
    console.log(`FAIL: EXPECTED: ${expected} ACTUAL: ${actual}`);
  }
}

// example
1, 3, 8, 2, 10;

function twoSumOld(nums, k) {
  let compliments = new Set();
  for (const num of nums) {
    // questions - have I dealt with summing a number and itself
    // have i dealt with repeated numbers (oh ok repeated numbers are ok, just not with itself)
    // what about negative numbers
    // what about when the compliment is found in the last item considered

    // is this number in compliments? return true if so
    if (compliments.has(num)) return true;

    const compliment = k - num;
    compliments.add(compliment);
  }

  return false;
}

//test(true, twoSumOld([6, 4], 10));
//test(true, twoSumOld([5, 5, 3], 10));
//test(true, twoSumOld([1, 3, 8, 2], 10));
//est(false, twoSumOld([3, 9, 13, 7], 8));
//test(true, twoSumOld([4, 2, 6, 5, 2], 4));

// leetcode version

/*
Given an array of integers nums and an integer target, return indices of the two numbers such 
that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same 
element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let complimentAndIndex = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (complimentAndIndex[num] !== undefined)
      return [complimentAndIndex[num], i];

    const compliment = target - num;
    complimentAndIndex[compliment] = i;
  }
  return [];
};

test([2, 3], twoSum([1, 3, 8, 2], 10));
test([0, 1], twoSum([2, 7, 11, 15], 9));
