/**
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing 
 * all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters 
 * include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const characters = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");

  let firstPointer = 0;
  let lastPointer = characters.length - 1;

  const numIterations = Math.floor(characters.length / 2);

  for (let i = 0; i < numIterations; i++) {
    firstPointer = i;
    lastPointer = characters.length - (i + 1);
    if (characters[firstPointer] !== characters[lastPointer]) {
      return false;
    }
  }

  return true;
};

function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }
}

const functionToTest = isPalindrome;

// example 1
let input = "A man, a plan, a canal: Panama";
let expected = true;
test(expected, functionToTest(input));

// example 2
input = "race a car";
expected = false;
test(expected, functionToTest(input));

// example 3
input = " ";
expected = true;
test(expected, functionToTest(input));
