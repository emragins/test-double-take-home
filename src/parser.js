/**
 * @typedef {object} Entry
 * //@property {Array<Array<number>>} rawDigits might be easier to tweak these later?
 * @property {string} parsed
 * @property {boolean?} checkSumPassed
 * @property {boolean?} hasIllegalCharacter indicates an unknown digit, ie, '?'
 */

/**
 * The basic premise here is to iterate through the contents
 * as entries (blocks of four), and for each set of lines, map them into
 * a binary representation, which then can be translated into a character (or not)
 * 
 * @param {string} fileContents 
 * @returns {Array<Entry>}
 */
export function parse(fileContents) {
    let entries = [];

    if (!fileContents) return [];

    const lines = fileContents.split('\n');

    const numEntries = Math.floor(lines.length / 4);
    let entryNumber = 0;

    while (entryNumber < numEntries) {
        // read into array
        let entryLine = 0;
        // "pre-generate" 9 records representing our digits
        let rawDigits = [[], [], [], [], [], [], [], [], []];

        // some safe-guarding here in case an entry is cut off part-way through
        while (entryNumber * 4 + entryLine < lines.length) {
            let line = lines[entryNumber * 4 + entryLine];

            if (entryLine === 3) {
                break;
            }

            if (line.length != 27) {
                // if(line.length === 0){
                //     break;
                // }
                throw new Error(`entry ${entryNumber}, line ${entryLine} is ${line.length} instead of 27.`);
            }

            // translate the raw character into a binary representation
            for (let pos = 0; pos < line.length; pos++) {
                // each digit is 3 wide, so map it into the correct space
                let digit = Math.floor(pos / 3)
                //console.log(digit)
                rawDigits[digit].push(line[pos] != ' ' ? 1 : 0)
            }

            entryLine++;

        }

        entryNumber++;

        // digits is an array of numbers, ie, ['1', '?', ...]
        // the inside join('') is to concat all the 1s and 0s for that digit together
        let digits = rawDigits.map(d => mapBinaryToDigit(d.join('')))
        let newEntry = {
            //rawDigits: rawDigits, 
            //digits: digits,
            parsed: digits.join('')
        };

        entries.push(newEntry);

    }

    return entries;
}

function mapBinaryToDigit(binaryDigit) {
    const happyMapping = {
        "010101111": 0,
        "000001001": 1,
        "010011110": 2,
        "010011011": 3,
        "000111001": 4,
        "010110011": 5,
        "010110111": 6,
        "010001001": 7,
        "010111111": 8,
        "010111011": 9
    }

    return happyMapping[binaryDigit] ?? '?';
}

