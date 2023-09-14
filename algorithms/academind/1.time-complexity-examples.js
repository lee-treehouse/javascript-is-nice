function sumUpLinear(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

function outputResultWithTime(fn, arg) {
  let start;
  let end;
  start = performance.now();
  const result = fn(arg);
  end = performance.now();
  console.log("");
  console.log(`N: ${arg}, Result: ${result}`);
  console.log(end - start);
}

// to demonstrate, measure time with perforance now.. eg

console.log("");
console.log("*******************************");
console.log("demonstrating linear time");

let qty = 10000;
outputResultWithTime(sumUpLinear, qty);
qty *= 10;
outputResultWithTime(sumUpLinear, qty);
qty *= 10;
outputResultWithTime(sumUpLinear, qty);
qty *= 10;
outputResultWithTime(sumUpLinear, qty);
qty *= 10;
outputResultWithTime(sumUpLinear, qty);
qty *= 10;

console.log("");
console.log("*******************************");
console.log("demonstrating constant time");

function sumUpConstant(n) {
  return (n / 2) * (n + 1);
}

qty = 10000;
outputResultWithTime(sumUpConstant, qty);
qty *= 10;
outputResultWithTime(sumUpConstant, qty);
qty *= 10;
outputResultWithTime(sumUpConstant, qty);
qty *= 10;
outputResultWithTime(sumUpConstant, qty);
qty *= 10;
outputResultWithTime(sumUpConstant, qty);
qty *= 10;

// we call linear complexity O(n) Oh of N

// explaining the idea of asymptotic analysis which has 3 steps
// deviation: what does asymptotic mean?
/*

// find the function eg T = a*n + b
// find the fastest growing term a*n
// remove the coefficient n
// O(n)

Asymptotic definition: (analysis) Of, relating to, or being an asymptote; 
(of lines) approaching ever nearer, but never crossing.

An asymptotic line is a line that gets closer and closer to a curve as the 
distance gets closer to infinity. SMART Vocabulary: related words and phrases.
*/

// constant time is 0(1) Oh of 1

// Ok let's talk about 0(log n)
// lets briefly say first what logarithmic is - it's the inverse to exponential
// so exponential is growing more and more the bigger n gets,
// logarithm is growing less and less
// so 0(log n) might take longer than linear at small values of n but as n gets bigger it is faster

// then we can have 0(n^2) Oh of n squared "Quadratic complexity"
//

// then we can have 0(2^n) Oh of 2 to the power of n "Exponential complexity"
//

// need to look at some tables for math examples of log n, n^2, 2^n for examples of how values grow

function getValues(n) {
  return {
    n: n,
    logn: Math.log(n),
    nSquared: n * n,
    twoToThePowerOfN: Math.pow(2, n),
  };
}

const values = [];
values.push(getValues(5));
values.push(getValues(10));
values.push(getValues(100));
values.push(getValues(1000));
values.push(getValues(10000));

console.table(values);
