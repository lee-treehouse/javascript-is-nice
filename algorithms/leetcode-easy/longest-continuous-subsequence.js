/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  // check that later can we have below 0
  let prevValue = 0;
  let currentIncreasingSequenceLength = 0;
  let longestIncreasingSequenceLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];

    console.log({ value, prevValue });

    if (value > prevValue) {
      currentIncreasingSequenceLength++;
      if (currentIncreasingSequenceLength > longestIncreasingSequenceLength) {
        longestIncreasingSequenceLength = currentIncreasingSequenceLength;
      }
    } else {
      currentIncreasingSequenceLength = 1;
    }

    prevValue = value;
  }
  return longestIncreasingSequenceLength;
};

// console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
// console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]));
