/**
 * 
 * @param {Array<import("./parser").Entry>} parsingResult 
 */
export function validate(parsingResult) {


    parsingResult.forEach(entry => {
        if (entry.parsed.indexOf('?') >= 0) {
            entry.checkSumPassed = false;
            entry.hasIllegalCharacter = true;
            return;
        }
        else {
            // computeChecksum(entry.parsed)
            //throw new Error('checksum not implemented')
            entry.hasIllegalCharacter = false;
            entry.checkSumPassed = true;
        }

    })

    return parsingResult;
}
