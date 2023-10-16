/**
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

* @param {number[]} prices
 * @return {number}
 */
var maxProfitNotOptimized = function (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const priceOnBuyDay = prices[i];

    for (let j = i + 1; j < prices.length; j++) {
      const priceOnSellDay = prices[j];
      const profit = priceOnSellDay - priceOnBuyDay;
      if (profit > maxProfit) maxProfit = profit;
    }
  }
  return maxProfit;
};

var maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0;

  let buyDayPointer;
  let sellDayPointer;
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (buyDayPointer === undefined || prices[buyDayPointer] > prices[i]) {
      buyDayPointer = i;
    }

    sellDayPointer = i + 1;

    const profit = prices[sellDayPointer] - prices[buyDayPointer];
    if (profit > maxProfit) maxProfit = profit;
  }
  return maxProfit;
};

function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }
}

const functionToTest = maxProfit;

// example 1
let input = [7, 1, 5, 3, 6, 4];
let expected = 5;
test(expected, functionToTest(input));

// example 2
input = [7, 6, 4, 3, 1];
expected = 0;
test(expected, functionToTest(input));

// example 3
input = [7, 1, 5, 3, 6, 4, 7];
expected = 6;
test(expected, functionToTest(input));

// example 3
input = [1, 2];
expected = 1;
test(expected, functionToTest(input));

// example 4
input = [1, 2, 4];
expected = 3;
test(expected, functionToTest(input));
