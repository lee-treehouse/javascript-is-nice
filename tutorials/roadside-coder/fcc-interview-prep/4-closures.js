// global, local, or block scope
var userName = "leeTreehouse";

function local() {
  console.log(userName);
}

local();

//global scope
function subscribe() {
  // inner scope 2
  var myName = "Lee";
  function displayName() {
    //inner scope 1
    console.log(myName);
  }
  displayName();
}

subscribe();
