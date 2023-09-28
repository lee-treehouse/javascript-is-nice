const getMatches = (seachText, regularExpression) => {
  const str = seachText;

  const regex = new RegExp(regularExpression);

  //  return regex.exec(str);
  return str.match(regex);
};

const outputRegexMatch = (searchText, regularExpression) => {
  const result = getMatches(searchText, regularExpression);

  console.log(
    `${result && result.length ? result.length + " " : ""}MATCH(ES) ${
      result && result.length > 0 ? "" : "NOT "
    }FOUND - Regex: ${regularExpression} Search String: ${searchText}`
  );

  if (result && result.length) {
    console.log(result);
    console.log("---");
    console.log("");
  }
};

/* 
/exp/flags
we start with a forward slash and end with a forward slash 

Flags
after the last slash are the flags eg g
g == global
i == case insensitive
m == multiline
s == single line 
u == unicode 
y == sticky 
*/

const catSentence =
  "The fat cat ran down the street.\nIt was searching for a mouse to eat.";

// case sensitive so first match is "the"
outputRegexMatch(catSentence, /the/g);

// case insensitive so first match is "The"
outputRegexMatch(catSentence, /the/gi);

// match at least one with the plus
outputRegexMatch(catSentence, /e+/gi);

// ? quantifier
// match at least one with the plus and optionally match one a if it appears afterwards
outputRegexMatch(catSentence, /e+a?/gi);
// see in this example you get "ea" and "eea" - just one a either time
outputRegexMatch("The feat cat ran down the streeaat.", /e+a?/gi);

// * quantifier - match zero or more
outputRegexMatch(catSentence, /re*/gi);
// demonstrating how the * rather than the ? gets us more 'a's
outputRegexMatch("The feat cat ran down the streeaat.", /e+a*/gi);

// dot / period .
// matches any single character except a line break
outputRegexMatch(catSentence, /.at/gi);

// lets escape! we actuallyw ant to find a period so lets escape it with \
outputRegexMatch(catSentence, /\./gi);

// \w and \W - words
outputRegexMatch(catSentence, /\w/gi);
outputRegexMatch(catSentence, /\W/gi);
// 4 chars
outputRegexMatch(catSentence, /\w{4}/gi);
outputRegexMatch(catSentence, /\w{4,}/gi);
outputRegexMatch(catSentence, /\w{4,6}/gi);

// \s and \S - whitespace
outputRegexMatch(catSentence, /\s/gi);
outputRegexMatch(catSentence, /\S/gi);

// fat and bat but not cat
outputRegexMatch(catSentence, /[fb]at/gi);

/*
The fat cat ran down the street. 
It was searching for a mouse to eat. 

https://regexr.com/
https://www.youtube.com/watch?v=rhzKDrUiJVk 7:51
*/
