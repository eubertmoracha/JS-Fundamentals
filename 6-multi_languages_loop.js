// 6-multi_languages_loop.js
// This script prints multiple messages in a loop.

const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// We can use a loop to print each message in the array.
// This way, if we want to add more languages later, we can just add them to
let output = "";
for (let i = 0; i < messages.length; i++) {
  output += messages[i] + "\n";
}

// the array without changing the loop structure.
// The `\n` at the end of each message adds a new line after each message
console.log(output.trim());
// If you run this script, it will print:
// C is fun