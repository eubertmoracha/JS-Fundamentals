// If you run: node printFirst.js "Hello"
// `process.argv` looks like this:
// 1st item (at position 0): 'node'
// 2nd item (at position 1): 'path/to/your/printFirst.js'
// 3rd item (at position 2): 'Hello'  <-- THIS is what we want!

// So, the first argument the user provides is always the 3rd item in the list,
// which is at position 2. Let's try to get it directly.
const firstArgument = process.argv[2];

// THE TRICK:
// If the user doesn't provide any arguments, there is no 3rd item.
// When we ask for an item that doesn't exist in a list (`process.argv[2]`),
// JavaScript gives us a special "empty" value called `undefined`.

// We can check if our variable holds this `undefined` value.
if (firstArgument === undefined) {
  // If it's undefined, we know no argument was given.
  console.log('No argument');
} else {
  // If it's not undefined, it must be the argument the user typed!
  console.log(firstArgument);
}