import runner from "./src/runner.js";

// args 0, 1 are something like 'node.exe', 'index.js', so ignore them
const args = process.argv.slice(2);
const inputFile = args[0];

const outputFile = `${inputFile}.output`; // keep it clear and simple

/**
 * Entry point to our program.
 */
async function main() {
  await runner(inputFile, outputFile);
}

// execute the program
main();
