import { readFile, writeFile } from "fs/promises";

/**
 * Run the program. Do all the things.
 *
 * @param {string} inputFile
 * @param {string} outputFile
 */
async function runner(inputFile, outputFile) {
  console.log("reading in file", inputFile);

  // Async read contents of file into memory.
  const fileContents = await readFile(inputFile, {
    encoding: "utf8", // specifying an encoding returns the file contents as a string
  });

  const dataToSave = fileContents; // magicalDataTransformer(fileContents);

  // Async write data to a file, replacing the file if it already exists.
  await writeFile(outputFile, dataToSave, { encoding: "utf8" });
}

export default runner;
