// ⌨️ (0:10:18) Hoisting in Functions

functionName();

function functionName() {
  console.log("Lee Treehouse");
}

//x = 5;
// when declaring with var x is hoisted so if i set a breakpoint inside functionName I
// can see x exists in global scope, with value undefined
//var x = 5;
// function is hoisted completely

// ⌨️ (0:13:40) Hoisting - Interview Question

var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun();

// my prediction - undefined.. x in local scope shadows the global x and gets hoisted above the console log

// can see the difference in debugger comparing global to local scope
