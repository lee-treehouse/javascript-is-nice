function mergeSort(items) {
  //const items = [...arr];

  if (items.length < 2) return items;

  if (items.length === 2) {
    // apply the sort
    return items[0] > items[1] ? [items[1], items[0]] : [items[0], items[1]];
  }

  const middleIndex = Math.floor(items.length / 2);
  //const middleItem = items[middleIndex];

  // slice 'end' is exclusive of the item
  const leftItems = items.slice(0, middleIndex);
  const rightItems = items.slice(middleIndex);

  const leftSorted = mergeSort(leftItems);
  const rightSorted = mergeSort(rightItems);

  const mergedArray = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  while (
    leftArrayIndex < leftSorted.length ||
    rightArrayIndex < rightSorted.length
  ) {
    if (
      leftArrayIndex >= leftSorted.length ||
      leftSorted[leftArrayIndex] > rightSorted[rightArrayIndex]
    ) {
      mergedArray.push(rightSorted[rightArrayIndex]);
      rightArrayIndex++;
    } else {
      mergedArray.push(leftSorted[leftArrayIndex]);
      leftArrayIndex++;
    }
  }
  return mergedArray;

  //  console.log({ leftItems, rightItems });

  // split the array into multiple arrays with max of two items
}
const unsorted = [3, 10, -3, 48, 5, 3, 33, 99, -8];
const sorted = mergeSort(unsorted);
console.log(sorted);
