/**

Given an integer array nums and an integer k, 
return the k most frequent elements. You may return the answer in any order.

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

* @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let itemCounts = {};
  let result = [];

  // count frequency
  for (const num of nums) {
    if (itemCounts[num]) {
      itemCounts[num]++;
    } else {
      itemCounts[num] = 1;
    }
  }

  // sort frequency and determine the top k frequencies
  const sortedCounts = Object.values(itemCounts).sort((a, b) => a - b);
  let kElements = [];
  for (let i = sortedCounts.length - 1; i >= 0; i--) {
    if (kElements.length < k) {
      kElements.push(sortedCounts[i]);
    }
  }

  // find matches of those frequencies
  for (const [key, value] of Object.entries(itemCounts)) {
    if (kElements.includes(value)) {
      result.push(key);
    }
  }

  return result;
};

//console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
//console.log(topKFrequent([2, 2, 2, 2, 3, 1, 1, 1], 2));

//console.log(topKFrequent([1], 1));

//console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

const nums = [
  5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0, 2, 2,
  2, 4, -2, -4, 8, -7, -7, 2, -8, 0, -8, 10, 8, -8, -2, -9, 4, -7, 6, 6, -1, 4,
  2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1, -3, 7, 0, 8, -2, -3,
  -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6, -8, -9, -1, 9, -9, 3, 5, 1,
  6, -1, -2, 4, 2, 4, -6, 4, 4, 5, -5,
];
const k = 7;

// expected [4,-1,2,-5,-8,0,8]
console.log(topKFrequent(nums, k));
