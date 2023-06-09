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
            //throw new Error('checksum not implemented')
            entry.hasIllegalCharacter = false;
            entry.checkSumPassed = checksumPasses(entry.parsed);
        }

    })

    return parsingResult;
}

/**
 *  (d1 + 2*d2 + 3*d3 +..+ 9*d9) mod 11 = 0
 * 
 * @param {string} parsed 
 * @returns {boolean}
 */
function checksumPasses(parsed) {
    const digits = parsed.split('');

    let sum = 0;
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(digits[9 - i]) * (i)
        //console.log('sum, i, digit', sum, i, digits[9 - i])
    }


    return sum % 11 === 0
}

