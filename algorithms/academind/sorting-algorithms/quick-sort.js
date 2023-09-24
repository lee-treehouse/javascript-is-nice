const quickSort = (arr) => {
  const items = [...arr];
  if (items.length <= 1) {
    console.log("BASE CASE, returning...");
    return items;
  }
  let pivotItem = items.shift();
  const equalChunk = [pivotItem];
  const lessThanChunk = [];
  const moreThanChunk = [];

  while (items.length) {
    const current = items.shift();
    if (current === pivotItem) {
      equalChunk.push(current);
    } else if (current > pivotItem) {
      moreThanChunk.push(current);
    } else {
      lessThanChunk.push(current);
    }
  }

  console.log("******************");
  console.log({ equalChunk });
  console.log({ lessThanChunk });
  console.log({ moreThanChunk });
  console.log("******************");

  const lessThanChunkSorted = quickSort(lessThanChunk);
  const moreThanChunkThanChunkSorted = quickSort(moreThanChunk);
  console.log("concatenating...");
  return lessThanChunkSorted.concat(equalChunk, moreThanChunkThanChunkSorted);
};

//const unsorted = [99, 98, 97, 96, 95, 94, 93];
const unsorted = [3, 10, -3, 48, 5, 3, 33, 99, -8];
const sorted = quickSort(unsorted);
console.log(sorted);
