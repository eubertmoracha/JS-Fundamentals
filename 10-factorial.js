/**
 * A script to compute the factorial of a number provided as a command-line argument.
 *
 * Usage: node factorial.js <number>
 *
 * Requirements Met:
 * - Computes and prints a factorial.
 * - Uses the first command-line argument as an integer.
 * - Handles the case where the input is not a number (NaN), returning 1.
 * - Uses a recursive function to perform the calculation.
 * - Uses a function for the factorial logic.
 * - Uses console.log() for all output.
 * - Does not use the 'var' keyword (uses 'const' and 'let').
 */

/**
 * Recursively calculates the factorial of a non-negative integer.
 * The base case is n <= 1, which returns 1. This also handles 0! = 1
 * and provides a graceful result for negative inputs.
 * @param {number} n The number to compute the factorial of.
 * @returns {number} The factorial of n.
 */
const factorial = (n) => {
  // Base case: The factorial of 1, 0, or any negative number is defined here as 1.
  if (n <= 1) {
    return 1;
  }
  // Recursive step: n * (n-1)!
  return n * factorial(n - 1);
};

// Get the first command-line argument.
const inputArg = process.argv[2];

// Attempt to parse the argument as an integer.
const number = parseInt(inputArg);

// Check if the parsed number is NaN (Not a Number).
if (isNaN(number)) {
  // As per the requirement, the factorial of NaN is 1.
  console.log(1);
} else {
  // If it's a valid number, compute its factorial and print the result.
  const result = factorial(number);
  console.log(result);
}