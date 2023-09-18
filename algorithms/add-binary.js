function test(expected, actual) {
  if (expected === actual || expected.toString() === actual.toString()) {
    console.log("PASS");
  } else {
    console.log(`FAIL: EXPECTED: ${expected} ACTUAL: ${actual}`);
  }
}

function addBinarySingleDigits(value1, value2, carry) {
  if (value1 === null || undefined || value2 === null || undefined)
    throw new Error("value1 and value2 must be specified");
  if (value1 < 0 || value1 > 1 || value2 < 0 || value2 > 1)
    throw new Error("value 1 and value 2 must be zeroes or ones");
  if (carry && (carry < 0 || carry > 1))
    throw new Error("if carry is specified it must be a zero or one");

  let result = value1 + value2;
  if (carry) result += carry;

  if (result === 0 || result === 1) return [result, 0];

  if (result === 2) return [0, 1];

  if (result === 3) return [1, 1];

  throw new Error(`Unexpected result ${result}`);
}

test([0, 1], addBinarySingleDigits(1, 1));
test([1, 1], addBinarySingleDigits(1, 1, 1));
test([0, 0], addBinarySingleDigits(0, 0));
test([1, 0], addBinarySingleDigits(0, 0, 1));
test([1, 0], addBinarySingleDigits(0, 1));
test([0, 1], addBinarySingleDigits(0, 1, 1));

/* 
assumption: the endianness is the one where the least significant bit 
is on the right hand side eg 100 = 4 
*/
function addBinaryStrings(string1, string2) {
  let result = "";
  let carry = 0;

  for (let i = 1; i <= Math.max(string1.length, string2.length); i++) {
    const string1PlaceValue =
      string1.length >= i ? parseInt(string1[string1.length - i]) : 0;

    const string2PlaceValue =
      string2.length >= i ? parseInt(string2[string2.length - i]) : 0;

    const interimResult = addBinarySingleDigits(
      string1PlaceValue,
      string2PlaceValue,
      carry
    );

    carry = interimResult[1];
    result = `${interimResult[0]}${result}`;
  }

  if (carry === 1) result = `1${result}`;

  return result;
}
test("101", addBinaryStrings("100", "1"));
test("100", addBinaryStrings("11", "1"));
test("1", addBinaryStrings("1", "0"));
test("1001010", addBinaryStrings("1000011", "111"));

/*

"100" + "1", return "101"
"11" + "1", return "100"
"1" + "0", return  "1"

*/
