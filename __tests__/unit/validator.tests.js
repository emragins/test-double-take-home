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

    it('should pass 345882865', () => {
        const number = "345882865";
        let entries = [{ parsed: number }];

        const result = validate(entries)

        expect(result).toHaveLength(1);
        expect(result[0].checkSumPassed).toEqual(true)
        expect(result[0].hasIllegalCharacter).toEqual(false)
    })

    it('should fail 11111111', () => {
        const number = "111111111";
        let entries = [{ parsed: number }];

        const result = validate(entries)

        expect(result).toHaveLength(1);
        expect(result[0].checkSumPassed).toEqual(false)
        expect(result[0].hasIllegalCharacter).toEqual(false)
    })
})