const isPalindrome = (str) => {
  const numIterations = Math.floor(str.length / 2);

  for (let i = 1; i <= numIterations; i++) {
    // if length is 5, num iterations is 2

    // 0 then 1
    const char1 = str[i - 1];

    // 4 then 3
    const char2 = str[str.length - i];

    // make any modifications like case insensitivity here
    if (char1 !== char2) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("level"));

console.log(isPalindrome("algorithm"));

console.log(isPalindrome("amanaplanacanalpanama"));

// yet to do, remove special characters (or maybe easiest to remove not a-z OR A-Z with regex)
// make comparison case insensitive
console.log(isPalindrome("A man, a plan, a canal: Panama."));

// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true
