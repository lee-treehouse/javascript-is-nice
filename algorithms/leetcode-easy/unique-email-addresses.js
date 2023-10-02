/*
Besides lowercase letters, the email may contain one or more '.' or '+'.

For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com".
It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.
*/

var getUniqueEmail = function (email) {
  const indexOfAt = email.indexOf("@");
  // could have just split on the at symbol
  const domain = email.substring(indexOfAt);
  const user = email.substring(0, indexOfAt);

  const indexOfPlus = user.indexOf("+");
  const userWithoutPlusAndSuffix =
    indexOfPlus >= 0 ? user.substring(0, indexOfPlus) : user;

  const userWithoutDots = userWithoutPlusAndSuffix.replace(/\./g, "");

  // could have done the regex in one step
  // localName.replace(/\+.*$|\./g, '');
  // explanation:
  /*
    
https://leetcode.com/problems/unique-email-addresses/solutions/210025/javascript-1-line-solution-and-explanation/

+ is a specail char, so adds \.
.* means any character after +.
$, in regex, it represents the end of string.
| equals to or.

    */

  return `${userWithoutDots}${domain}`;
};

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const uniqueEmails = new Set();
  for (let i = 0; i < emails.length; i++) {
    const uniqueEmail = getUniqueEmail(emails[i]);
    if (!uniqueEmails.has(uniqueEmail)) uniqueEmails.add(uniqueEmail);
  }
  console.log(uniqueEmails);
  return uniqueEmails.size;
};

const input1 = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];
const input2 = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];
// expect 2
console.log(numUniqueEmails(input1));

// expect 3
console.log(numUniqueEmails(input2));
