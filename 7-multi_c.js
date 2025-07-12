// 7-multi_c.js
// This script prints "C is fun" a specified number of times.
// The number of times is provided as a command line argument.

const count = parseInt(process.argv[2], 10);

if (isNaN(count)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
}
