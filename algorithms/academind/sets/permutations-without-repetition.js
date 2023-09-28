const getPermutations = (items) => {
  const permutations = [];

  console.log("ENTER FUNCTION");
  console.log({ items });

  if (items.length === 1) return [items];

  console.log("set aside the first item, only deal with a subet");

  const subsetItems = items.slice(1);
  console.log({ subsetItems });

  const partialPermutations = getPermutations(subsetItems);
  // example [["play chants"]]
  const excludedOption = items[0];

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];

    for (let j = 0; j <= partialPermutation.length; j++) {
      // this seems to just be a way to smoosh the one we dropped back in

      const leadingPermutation = partialPermutation.slice(0, j);
      const trailingPermutation = partialPermutation.slice(j);

      permutations.push(
        leadingPermutation.concat([excludedOption], trailingPermutation)
      );
    }
  }

  return permutations;
};

let todos = [
  "play chants",
  "practice algorithms",
  "go for a walk",
  "watch youtube",
];

const result = getPermutations(todos);

// console.log(result);

const recursiveExampleReturnsWhenLengthIsOne = (arr) => {
  const copy = [...arr];

  if (copy.length === 1) {
    console.log("returning ");
    console.log(copy);
    return copy;
  }

  const subset = copy.slice(1);
  console.log({ subset });
  const result = recursiveExampleReturnsWhenLengthIsOne(subset);
};

//recursiveExampleReturnsWhenLengthIsOne(["one", "two", "three", "four", "five"]);
