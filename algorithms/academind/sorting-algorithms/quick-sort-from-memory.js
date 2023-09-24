/*

What I remember

copy the array so as not to mutate the original 

if the arrays length is 1, return it (this will be the 'base case' for the recursion)

choose a pivot element - usually the first item in the array

put pivot element into its own array along with anything equal ot it 

make another array of smaller items and another array of larger items

(used a queue to loop through each item there though perhaps this doesn't really matter vs a for loop?)

call itself with smaller items - result is (1)
call itself with larger items  - result is (2)

concatenate the (1), equal itmes, and 2

*/

const quickSort = (arr) => {
  const items = [...arr];

  if (items.length <= 0) return items;

  const item = items.shift();
  const equalItems = [item];
  const smallerItems = [];
  const largerItems = [];

  while (items.length) {
    const currentItem = items.shift();

    if (currentItem === item) {
      equalItems.push(currentItem);
    } else if (currentItem < item) {
      smallerItems.push(currentItem);
    } else {
      largerItems.push(currentItem);
    }
  }

  const smallerItemsSorted = quickSort(smallerItems);
  const largerItemsSorted = quickSort(largerItems);
  const result = smallerItemsSorted.concat(
    equalItems.concat(largerItemsSorted)
  );
  return result;
};

const sorted = quickSort([8, 12, 2, 4, -3, 40, 100, 9]);
console.log(sorted);
