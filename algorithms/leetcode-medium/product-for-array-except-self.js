/*
Given an integer array nums, return an array answer such that answer[i] is equal to the 
product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

so you could just multiply them all to get a total and then divide by each nums[i]

this doesn't work with zero

ah ok you are not meant to divide

so is this a memoisation thing then

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefixSums = [];
  let postfixSums = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixSums.push(nums[i]);
    } else {
      prefixSums.push(nums[i] * prefixSums[prefixSums.length - 1]);
    }
  }

  console.log(prefixSums);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      postfixSums.push(nums[i]);
    } else {
      postfixSums.unshift(nums[i] * postfixSums[0]);
    }
  }

  console.log(postfixSums);

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result.push(postfixSums[i + 1]);
      continue;
    }

    if (i === nums.length - 1) {
      result.push(prefixSums[i - 1]);
      continue;
    }

    result.push(postfixSums[i + 1] * prefixSums[i - 1]);
  }

  return result;
};

//console.log(productExceptSelf([1, 2, 3, 4]));
//Output: [0,0,9,0,0]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

// ok next step is reducing space commplexity by not storing prefix, postfix, result separately..

// we can do our first pass calculating prefix but putting the result i 1+1 each time

// then do the second pass (in reverse) calculating postfix for i-1 time prefix, which is the result
