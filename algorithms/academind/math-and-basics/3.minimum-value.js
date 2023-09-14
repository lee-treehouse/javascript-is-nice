function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }

  console.log("");
}

// linear time O(n)
function minimumValue(nums) {
  let lowestValueEncountered;
  for (let i = 0; i < nums.length; i++) {
    const currentVal = nums[i];

    if (!lowestValueEncountered || currentVal < lowestValueEncountered)
      lowestValueEncountered = currentVal;
  }
  return lowestValueEncountered;
}

test(-5, minimumValue([3, 0, -5, 1]));
test(2, minimumValue([3, 2, 5, 11]));
