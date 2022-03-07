import runner from "../../src/runner.js";
import { readFileSync, existsSync } from "fs";

const BaseDir = process.cwd() + "/__tests__/files";

let outputDir = "/output";
describe("reading a file", () => {
  const testFile = `${BaseDir}/123456789.txt`;

  it("should output a file", async () => {
    const outFile = `${BaseDir}${outputDir}/test1.output`;

    await runner(testFile, outFile);

    expect(existsSync(outFile)).toBe(true);
  });

  it("should output a file with the correct numbers", async () => {
    const outFile = `${BaseDir}${outputDir}/test1.output`;

    await runner(testFile, outFile);

    expect(existsSync(outFile)).toBe(true);
    expect(readFileSync(outFile).toString()).toEqual('123456789');
  });
});
