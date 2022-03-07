# Touble Double Take Home
AKA, the Bank OCR Kata

Authoritative reference: https://github.com/testdouble/contributing-tests/wiki/Bank-OCR-kata

## Overview

This project is for accepting OCR input from an "intelligent" scanner, interpretting the input, and outputing results.

## Working with this Codebase

Clone the code and run `npm install`.  (If you do not have node or npm installed, see the official documation for set up instructions.)

### Executing the Code

Run
> npm run exec [inputFile]

Output will be in the same location with `.output` appended to the name.

Note/Warning: For the time being, the output file will be named according to the input file.  If the file exists, it will be over-written.

### Writing code

Various notes:

* Due to this being a quick project with one developer at the moment, there is no editorconfig/prettier configuration added.  As the project grows, these should be added to aid with code consistency across teammates.
* This project leverages vscode's built-in typescript support for design-time assistance.
* node modules require the `.js` extension on imports, so if a module can't be found, that might be why.  (See https://stackoverflow.com/a/68783000/219072)



### Running Tests

> npm run test 

Tests are build with jest and can be found in the `/tests` folder.

### Deployment

No deployment as of right now.

## User Stories 

(User stories are currently kept here for convenience.  If/as they grow, it's recommended to move them into a real tracking system, such as the corresponding GitHub Issues.)

### User Story 1

Business Goal: Read letters and faxes which are scanned.
Output is a file with entries.

Entries:
9 digits (over 3 lines), followed by a blank line

Each entry represents an account number.

A file contains around 500 entries / account numbers, which works out to ~2000 lines.

**Technical Goal: Parse the file into real account numbers.**

Notes from #3; record input to a string, since "digits" are not guaranteed to be valid and the "invalids" are important.

### User Story 2

Validate the numbers based on the checksum.

(See original story for logic)

**Technical Goal: Write some validation code and flag each number as valid or invalid.**

### User Story 3

Output a file for each input file and specify "ERR", "ILL" or "" (valid) for each entry/account number.

**Technical Goal: Write a file.**

### User Story 4

Try to make intelligent guesses for valid account numbers by adding or removing one pop from a character for "ERR" or "ILL" entries.  "If there is only one possible number with a valid checksum, then use that. If there are several options, the status should be AMB. If you still can't work out what it should be, the status should be reported ILL."

**Technical Goal: Write an algorithm which takes an entry and tries to "guess" a valid one.**


## Time Logged:

1200 - 1315: 75
1340 - 