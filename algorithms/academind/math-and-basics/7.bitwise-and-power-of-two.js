function test(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(`FAIL: expected: ${expected}, actual: ${actual}`);
  }

  console.log("");
}
/*

ok we're talking bitwise and luckily starting with the confession that generally people 
don't really know this. I think this is also going to have to do with the puzzle of the king
and the poised bottles of wine, so I plan to come back to that!

ah ok I have watched the first couple of minutes, and we are talking really high level about the properties 
of numbers that are 2 to the power of something.. and of course i recently took holly through how calculate binary
from decimal and the first thing i would do is draw up a table where the headings were 

|  2^7  |  2^6  |  2^5  |  2^4  |  2^3  |  2^2  |  2^1  |  2^0  |   
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 128   |  64   |  32   |  16   |  8    |  4    |  2    |  1    |
| 0     |  1    |  0    |  0    |  0    |  0    |  0    |  1    | 

so we can see expressed here I've calculated 65 in decimal as 01000001 in binary 

ok but now we're talking about the interesting properties that 2^n is always going to look like 
1 in the 'n' column and then all zeroes.. 

ie 
128 is going to look like 10000000
64 is going to look like 01000000
32 is going to look like 00100000
16 is going to look like 00010000
8 is going to look like 00001000
4 is going to look like 00000100
2 is going to look like 00000010
1 is going to look like 00000001

cool, I'm with it so far 

oh yeah there is a caveat, this presumes unsigned ints because if it was signed we'd have a 0 or 1 bit 
for positive or negative respectively. 

and other caveat is the above has the smallest bit last, sometimes it's expressed the other way
with smallest bit first.. I'm pretty sure 'least significant bit" is the smallest bit, the one that 
means "1 lot of 1" or "0 lots of 1"
anyway this is big endianness and little endianness and i'm not clear on the rules so maybe if i find out
i'll update these notes

ok so we are about to jump into bitwise stuff now

*/

// ok get ready peeps we are going to learn about bitwise AND & instead of regular AND &&

// before he explains I want to see what i can find out

// ok I had to hear a little.. it is going to compare each place value and return a 1 or a 0

// so my interpretation

// say we're comparing these two
//32 is going to look like 00100000
//16 is going to look like 00010000

//my comparison should be 11010000 based on my current understanding
// or do you get a 0 for a match and a 1 for a not match? I'd expect a 1/true for a match

// ok well that was not the answer we got, we got 16.. let's watch the video more

// ah ok it looks to me the comparison is not "are they the same" but a diffferent comparison

// for zero compared to 1, it gives you back a zero "because you have at least one zero there"

// ok if that's true I'd expect for 1 compared to zero that's also zero

// for one compared to one, i'd expect one.

// oh hangon, that makes sense.. it's AND!!

// yeah ok so for bitwise AND both must be true to get true lol entirely makes sense

// so what do i expect then when comparing 16 and 17 then
//16 is going to look like 00010000
//17 is going to look like 00010001

// result is going to look like 00010000 which is 16 let's see

// but does this hold up for our first example?

//32 is going to look like 00100000
//16 is going to look like 00010000
// result is all false surely 00000000

// so it doesn't hold up, i must be missing something

// HA. I had a typo. My understanding is correct. Yay.

// Ok the video is going to compare 4 and 7 so let's do that myself first to confirm understanding

// 7 is 111
// 4 is 100
// result should be 100 ie 4 tick tick

// ok so there's going to be a lesson in all this about why it can be more efficient to learn that something is
// a power of 2 - what might that be

// ok the video is saying if we use bitwise and on a number and the number minus one that helps us

// let's see if that's true

// let's start with something that is not a power of 2

// 13 is 1101
// 12 is 1100
// so i can see we start with two trues there

// there will be no trues for numbers that are 2 to the power of something, because there 1 is alwqys
// in a different place value column... ah and the number one less is bound to not have a 1 in the same place
// that makes sense
// so if we compare them we should always get 0

// ok lets write the new function and use our old tests (below - works)

function run() {
  const value1 = 32;
  const value2 = 16;
  const result = value1 & value2;
  console.log(result);

  const value3 = 16;
  const value4 = 17;
  const result2 = value3 & value4;
  console.log(result2);

  const value5 = 4;
  const value6 = 8;
  const result3 = value5 & value6;
  console.log(result3);

  const value7 = 4;
  const value8 = 7;
  const result4 = value7 & value8;
  console.log(result4);
}

run();

function isPowerOfTwo(n) {
  const result = n & (n - 1);
  return result === 0;
}
test(true, isPowerOfTwo(1)); // 2 to the power of 0
test(true, isPowerOfTwo(2)); // 2 to the power of 1
test(true, isPowerOfTwo(4)); // 2 to the power of 2
test(true, isPowerOfTwo(8)); // 2 to the power of 3
test(true, isPowerOfTwo(16)); //square root of 16 is 4
test(true, isPowerOfTwo(32)); // square root of 32 is 5.something
test(false, isPowerOfTwo(20));
test(false, isPowerOfTwo(31));
test(false, isPowerOfTwo(5));
