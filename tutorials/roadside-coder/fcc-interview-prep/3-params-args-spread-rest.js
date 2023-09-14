// ⌨️ (0:15:46) Params vs Arguments

function multiply(num1, num2) {
  //num1, num2 are parameters
  return num1 * num2;
}
multiply(3, 4); // 3,4 are arguments

// ⌨️ (0:16:25) Spread vs Rest Operators

var arr = [4, 7];
console.log(multiply(...arr));

function multiplyRest(...nums) {
  // assume for now nums is an array with at least two items :)
  return nums[0] * nums[1];
}
console.log(multiplyRest(5, 8));

// ⌨️ (0:17:43) Interview Question on params, args, spread, rest

// this is a syntax error because we need rest operator to be the last
// const fn = (a, ...numbers, x, y) =>
// {
//     console.log(x, y)
// }

// ⌨️ (0:19:03) Callback Function
// ⌨️ (0:20:02) Callback Function - Interview Questions

// Example to give.. defining an event listener and saying the name of the event, and the function that should be called when the event happens
// or give filter example and say hey what function do you call to get a boolean output from each item

// ⌨️ (0:20:58) Arrow Functions

// ⌨️ (0:21:59) Arrow function vs Normal Function
// Differences
// 1. syntax
// 2. implicit return if we drop the braces
// 3. arguments:

function fn() {
  console.log(arguments);
}

fn("foo", "bar");

const fnArrow = () => {
  // can't use arguments here, it would throw
  // console.log(arguments);
};

fnArrow("foo", "bar");

//4. this:
let user = {
  userName: "leeTreehouse",
  fn1: () => {
    console.log(`subscribe to ${this.userName}`);
  },
  fn2() {
    console.log(`subscribe to ${this.userName}`);
  },
};

// this here refers to global scope
user.fn1();

// this refers to the user object
user.fn2();

// ⌨️ (0:25:13) Closures
// ⌨️ (0:25:50) What is Lexical Scope?
// ⌨️ (0:27:39) Lexical Scope - Interview Question
// ⌨️ (0:28:53) What is Closure?
// ⌨️ (0:29:44) Example of Closures
// ⌨️ (0:30:57) Why Closure?
// ⌨️ (0:32:20) Closure Scope Chain
