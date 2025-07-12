// First, create an array of strings. An array is just a list of items.
// We use `const` because this list of sentences will not change.
const myLines = [
  'C is fun',
  'Python is cool',
  'JavaScript is amazing'
];

// Now, we use a `for...of` loop to go through each item in our array.
// For each iteration, the next item from `myLines` is put into the `line` variable.
// 1st time through: line = 'C is fun'
// 2nd time through: line = 'Python is cool'
// 3rd time through: line = 'JavaScript is amazing'
for (const line of myLines) {
  // This is our one and only console.log statement.
  // It runs once for each item in the array, printing the current `line`.
  console.log(line);
}