function run() {
  const result = ["doo", "waah", "ditty"].reduce(
    (prev, curr, i, accumQuestionMark) => {
      console.log(i);
      console.log(prev);
      console.log(curr);
      console.log({ accumQuestionMark });
      return `${prev}-${curr}`;
    }
  );
  return result;
}

console.log(run());
