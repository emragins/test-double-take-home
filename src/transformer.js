import { parse } from "./parser";

export function magicalDataTransformer(fileContents) {
  // parse
  const parsingResult = parse(fileContents);

  // validate

  // figure out possible alternatives

  const outputFileContents = parsingResult.map(pr => {
    return `${pr.parsed}`
  }).join("\n");
  
  return outputFileContents;
}
