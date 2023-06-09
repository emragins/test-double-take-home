import { validate } from "../../src/validator";

describe('validator', () => {
    it('should fail validation if any characters are ?', () => {
        const number = "123?45678";
        let entries = [{ parsed: number }];

        const result = validate(entries)

        expect(result).toHaveLength(1);
        expect(result[0].checkSumPassed).toEqual(false)
        expect(result[0].hasIllegalCharacter).toEqual(true)
    })

    it.each([['711111111', true],
    // ['777777177', true],
    // ['200800000', true],
    // ['333393333', true],
    // ['888888888', false] ,
    // ['555555555', false] ,
    // ['666666666', false] ,
    // ['999999999', false] ,
    // ['490067715', false] ,
    // ['123456789', true],
    // ['000000051', true],
    ['490867715', true]])('should have %p checksumpassed = %p', (number, pass) => {
        let entries = [{
            digit: makeDigits(number),
            parsed: number }];

        const result = validate(entries)

        expect(result).toHaveLength(1);
        expect(result[0].checkSumPassed).toEqual(pass)
        expect(result[0].hasIllegalCharacter).toEqual(false)
    })

})

/**
 * convert the number string to an array representation.
 * Normally this would be done by the parser
 * @param {string} number 
 */
function makeDigits(number) {
    
}
