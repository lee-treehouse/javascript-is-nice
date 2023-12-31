function test(expected, actual) {
  if (
    expected === actual ||
    (expected && actual && expected.toString() === actual.toString())
  ) {
    console.log("PASS");
  } else {
    console.log(`FAIL: EXPECTED: ${expected} ACTUAL: ${actual}`);
  }
}

function isAnagram(s, t) {
  if (!s || !t) throw new Error("string 1 and string 2 must be specified");

  if (s.length !== t.length) return false;

  let string1CharCount = {};
  [...s].forEach((element) => {
    if (string1CharCount[element]) {
      string1CharCount[element]++;
    } else {
      string1CharCount[element] = 1;
    }
  });

  let string2CharCount = {};
  [...t].forEach((element) => {
    if (string2CharCount[element]) {
      string2CharCount[element]++;
    } else {
      string2CharCount[element] = 1;
    }
  });

  for (const [key, value] of Object.entries(string1CharCount)) {
    if (!string2CharCount[key] || string2CharCount[key] != value) return false;
  }

  return true;
}

test(false, isAnagram("foob", "ar"));
test(false, isAnagram("foo", "bar"));
test(true, isAnagram("act", "cat"));
test(false, isAnagram("actt", "cata"));
test(true, isAnagram("coronavirus", "carnivorous"));
