/*

cartesian product is every possibility

eg if we have blue shirts and red shirts
in small and large
with the ruby logo or the javascript logo 

then the combinations are 

small blue t-shirt with ruby logo 
large blue t-shirt with ruby logo 
small blue t-shirt with javascript logo 
large blue t-shirt with javascript logo 

small red t-shirt with ruby logo 
large red t-shirt with ruby logo 
small red t-shirt with javascript logo 
large red t-shirt with javascript logo 

we have this idea of O(n*m) for time complexity and also the same for space complexity
*/

function cartProduct(setA, setB) {
  const product = [];
  for (let value of setA) {
    if (!Array.isArray(value)) {
      value = [value];
    }

    for (const valueB of setB) {
      product.push([...value, valueB]);
    }
  }
  return product;
}

// console.log(cartProduct(["M", "L"], ["Blue", "Red"]));

function cartProduct3(setA, setB, setC) {
  const product = [];
  for (const value of setA) {
    for (const valueB of setB) {
      for (const valueC of setC) {
        product.push([value, valueB, valueC]);
      }
    }
  }
  return product;
}

function cartProductX(...sets) {
  let product = sets[0];
  for (let i = 1; i < sets.length; i++) {
    product = cartProduct(product, sets[i]);
  }
  return product;
}

console.dir(
  cartProductX(["M", "L"], ["Blue", "Red"], ["round neck", "square neck"]),
  { depth: null }
);

// now we are saying time complexity is O(n^x) where n is the array length and x is the number of arrays
// eg if array length is 5 and there are 4 arrays the number of combinatinos will be O(5*5*5*5) = 625
