// 9-add.js
// This script adds two numbers provided as command line arguments.


function add(a, b) {
  return a + b;
}

// The numbers are parsed from the command line arguments.
// If the user doesn't provide two numbers, it will print "NaN" or "Missing arguments".
// If the user provides only one number, the second will be `undefined`, resulting in "
const first = parseInt(process.argv[2], 10);
const second = parseInt(process.argv[3], 10);

console.log(add(first, second));

// NaN" when trying to add them.