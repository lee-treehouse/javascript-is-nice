function linearSearchOld(searchCriteria) {
  const items = ["1", "2", "ABC", "A"];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item === searchCriteria) {
      return i;
    }
  }
  return false;
}

// so what can we say about time complexity? O(n) where n is the number of items
function linearSearch(items, searchCriteria, comparatorFn) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (
      typeof searchCriteria === "object" &&
      comparatorFn(item, searchCriteria)
    )
      return i;

    if (item === searchCriteria) {
      return i;
    }
  }
  return false;
}

const people = [
  { firstName: "kate", surName: "Bee" },
  { firstName: "evan", surName: "Bee" },
  { firstName: "holly", surName: "Bee" },
  { firstName: "Lee", surName: "Tee" },
];

const peopleComparator = (p1, p2) => {
  return (
    p1?.firstName?.toLowerCase() === p2?.firstName?.toLowerCase() &&
    p1?.surName?.toLowerCase() === p2?.surName?.toLowerCase()
  );
};

console.log(
  linearSearch(people, { surName: "tee", firstName: "lee" }, peopleComparator)
);

console.log(
  people.findIndex(
    (item) =>
      item.surName?.toLowerCase() === "tee" &&
      item.firstName?.toLowerCase() === "lee"
  )
);
