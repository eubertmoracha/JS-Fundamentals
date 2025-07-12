const firstArg = process.argv[2];
const secondArg = process.argv[3];

console.log(`${firstArg} is ${secondArg}`);
// If the user doesn't provide any arguments, `process.argv[2]` and `process.argv[3]` will be undefined.
// If the user provides only one argument, `process.argv[3]` will be undefined