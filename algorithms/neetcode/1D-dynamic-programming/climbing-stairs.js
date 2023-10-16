/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // wherever you are you can make two decisions, put theem on the queue if
  // they are not already there and they don't add up to more than n
  /* so we want to know where we have been and also what the count of that is


  // for example if it n is 2

   { 
    "1,1": 2,
    "2": 2,
 }

 // for example if it n is 3

   { 
    "1,1,1": 3,

    "1,2": 3,

    "2,1": 3,
 }
*/
  /*

once we've drawn the decision tree we see we have sub problems 

eg n = 5

at zero the problem was how many ways can we get to 5 

then a subproblem is from [1] how many ways can we get to 5

from [1,1] how many ways can we get to 5 


that helps me think what the recursive function would look like 

//function howToGetToN = (n, currentPath)


ok i've now watched mroe fo the video, and it'es less about saying 

you went 1,1,1 and you went 1,2 so those are distinct what next
it's more about saying ok you're at step 3 what's next
that then becomes a repeatable sub problem

*/
};
