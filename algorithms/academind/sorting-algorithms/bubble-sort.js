/*

easiest and simplest

*/

const bubbleSort = (unsorted) => {
  const list = [...unsorted];
  console.log(`sorting ${list}`);
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      console.log(
        `comparing item in position ${i} (${list[i]}) with item in position ${j} (${list[j]})`
      );

      if (list[j] < list[i]) {
        // swap them
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;

        console.log(`Swap made. ${list[j]} now appears after ${list[i]} `);
      }
    }
  }

  return list;
};

// console.log(bubbleSortAsDescribed([3, 10, -3, 44, -8]));

// worst case
const unsorted = [99, 98, 97, 96, 95, 94, 93];
//const unsorted = [5, 10, -3, -10, 1, 100, 99];
const sorted = bubbleSort(unsorted);
console.log(sorted);

/*

time complexity: 

quadratic time because nested loop, essentially (O(n^2))

*/
