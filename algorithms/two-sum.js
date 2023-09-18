/*

This question is asked by Google. Given an array of integers, return whether or not two
 numbers sum to a given target, k.
 Note: you may not sum a number with itself.

[1, 3, 8, 2], k = 10, return true (8 + 2)
[3, 9, 13, 7], k = 8, return false
[4, 2, 6, 5, 2], k = 4, return true (2 + 2)

*/

function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: EXPECTED: ${expected} ACTUAL: ${actual}`);
  }
}

// example
1, 3, 8, 2, 10;

function twoSum(nums, k) {
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

test(true, twoSum([6, 4], 10));
test(true, twoSum([5, 5, 3], 10));
test(true, twoSum([1, 3, 8, 2], 10));
test(false, twoSum([3, 9, 13, 7], 8));
test(true, twoSum([4, 2, 6, 5, 2], 4));
