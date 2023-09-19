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
  console.log();
}

function findElementIndex(sortedArray, itemToFind) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (true) {
    const midPoint = Math.floor((endIndex - startIndex) / 2) + startIndex;
    const midPointItem = sortedArray[midPoint];

    if (midPointItem === itemToFind) {
      return midPoint;
    } else {
      if (endIndex === startIndex) return -1;
    }

    if (midPointItem > itemToFind) endIndex = midPoint - 1;

    if (midPointItem < itemToFind) startIndex = midPoint + 1;
  }
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

// binary search time complexity - have to include sorting cost..

// once it is sorted, we are reducing again and again how much we have to look at

// O (log n)

// trying to remember.. is log n the inverse of exponential? yes.. here's the little
// table of values I created earlier in the series, in time-complexity-examples

/*
┌─────────┬───────┬────────────────────┬───────────┬─────────────────────────┐
│ (index) │   n   │        logn        │ nSquared  │    twoToThePowerOfN     │
├─────────┼───────┼────────────────────┼───────────┼─────────────────────────┤
│    0    │   5   │ 1.6094379124341003 │    25     │           32            │
│    1    │  10   │ 2.302585092994046  │    100    │          1024           │
│    2    │  100  │ 4.605170185988092  │   10000   │ 1.2676506002282294e+30  │
│    3    │ 1000  │ 6.907755278982137  │  1000000  │ 1.0715086071862673e+301 │
│    4    │ 10000 │ 9.210340371976184  │ 100000000 │        Infinity   
*/
