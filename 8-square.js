

const size = parseInt(process.argv[2], 10);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
// This script prints a square of size `size` using the character 'X'.
// If the user doesn't provide a size, it will print "Missing size".