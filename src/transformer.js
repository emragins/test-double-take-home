import { parse } from "./parser.js";
import { validate } from "./validator.js";

export function magicalDataTransformer(fileContents) {
  // parse
  const parsingResult = parse(fileContents);

  // validate
  const validatedResult = validate(parsingResult);
  
  // figure out possible alternatives

  const outputFileContents = validatedResult.map(pr => {
    const qualifier = pr.hasIllegalCharacter ? ' ILL'
      : pr.checkSumPassed ? '' : ' ERR'
    return `${pr.parsed}${qualifier}`;
  }).join("\n");

  return outputFileContents;
}
