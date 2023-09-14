// https://www.youtube.com/watch?v=tbqVqP5ilzQ

// (0:01:48) Function Declaration

function square(num) {
  return num * num;
}

// (0:02:13) Function Expression
// assign anonymous function to variable

const fnSquare = function (num) {
  return num * num;
};
console.log(fnSquare(3));

// (0:03:25) First Class Functions

function displaySquare(fn) {
  console.log("square of 5 is " + fn(5));
}
displaySquare(square);

// ⌨️ (0:04:54) What is IIFE?

(function iffesquare(num) {
  console.log("IIFE square of 5 is " + num * num);
})(5);

// ⌨️ (0:06:05) IIFE - Interview Question

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// my guess.. will log 1 :greentick:

// ⌨️ (0:06:59) Closures
// ⌨️ (0:07:27) Function Scopes
// ⌨️ (0:09:10) Function Scope - Interview Question

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// i wasn't sure if i would be undefined or not, it wasn't
// it was 0,1,2,3,4

// every time this for loop runs, it creates another block scope for this function

// but if we used var then we would have 5, 5, 5, 5, 5

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
