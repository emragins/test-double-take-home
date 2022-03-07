import { parse } from "../../src/parser";

describe("parse file high level", () => {
  it("should parse an empty file", () => {
    const file = "";

    const result = parse(file);

    expect(result).toEqual([]);
  });


  it("should parse a single entry", () => {

    const file =
      `    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                           `

    const result = parse(file);

    expect(result).toHaveLength(1)
  });

  it("should parse multiple entries", () => {

    const file =
      `    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                           
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                           `

    const result = parse(file);

    expect(result).toHaveLength(2)
  });

});


describe("interpret entries", () => {

  it("should interpret 123456789", () => {

    const file =
      `    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                           `

    const result = parse(file);

    expect(result).toEqual([{
      parsed: '123456789'
    }])
  });

  it("should interpret 000000000", () => {

    const file =
` _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|
                           `

    const result = parse(file);

    expect(result).toEqual([{
      parsed: '000000000'
    }])
  });

  it("should interpret giberish into ?", () => {

    const file =
`    _  _  _  _  _  _     _ 
|_||_|| || ||_   |  |  | _ 
  | _||_||_||_|  |  |  | _|
                           `

    const result = parse(file);

    expect(result).toEqual([{
      parsed: '49006771?'
    }])
  });

});
