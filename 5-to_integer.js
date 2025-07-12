const arg = process.argv[2];
const num = parseInt(arg, 10);

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
// If the user doesn't provide an argument, `process.argv[2]` will be undefined.
// If the user provides an argument that is not a number, `parseInt` will return `NaN` (Not a Number).