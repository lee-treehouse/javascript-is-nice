/**
 *
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));

// ideas: sort the array and loop through, returning true if the next is the same as the prior

// or

// loop through each item, check if the value is in a set, if so return true, if not add to set

/*
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false
*/
