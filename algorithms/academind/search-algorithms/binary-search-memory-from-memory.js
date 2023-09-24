function test(expected, actual) {
  if (expected === actual || expected.toString() === actual.toString()) {
    console.log("PASS");
  } else {
    console.log(`FAIL:`);
    console.log(`expected:`);
    console.log(expected.toString());
    console.log(`actual:`);
    console.log(actual.toString());
  }
}

function findElementIndex(sortedArray, itemToFind) {
  // find the middle of the array

  let upperBound = sortedArray.length - 1;
  let lowerBound = 0;

  while (upperBound >= lowerBound) {
    const middleIndex = Math.floor((upperBound - lowerBound) / 2) + lowerBound;
    const value = sortedArray[middleIndex];

    if (value === itemToFind) return middleIndex;

    if (value < itemToFind) {
      lowerBound = middleIndex + 1;
    } else {
      upperBound = middleIndex - 1;
    }
  }
  return -1;
}

test(0, findElementIndex([1, 5, 8, 11, 17, 20, 21, 89], 1));
test(1, findElementIndex([1, 5, 8, 11, 17, 20, 21, 89], 5));
test(2, findElementIndex([1, 5, 8, 11, 17, 20, 21, 89], 8));
test(3, findElementIndex([1, 5, 8, 11, 17, 20, 21, 89], 11));
test(4, findElementIndex([1, 5, 8, 11, 17, 20, 21, 89], 17));
test(5, findElementIndex([1, 5, 8, 11, 17, 20, 21, 89], 20));
test(6, findElementIndex([1, 5, 8, 11, 17, 20, 21, 89], 21));
test(7, findElementIndex([1, 5, 8, 11, 17, 20, 21, 89], 89));
test(-1, findElementIndex([1, 5, 8, 11, 17, 20, 21, 89], 66));
test(8, findElementIndex([1, 5, 8, 11, 17, 20, 21, 25, 89], 89));
