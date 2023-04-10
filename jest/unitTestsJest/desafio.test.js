const ds = require("./desafio");

describe("doubleANumber", () => {
  it("should return a double positive of the number if number is positive", () => {
    const result = ds.doubleANumber(2);
    expect(result).toBe(4);
  });

  it("should return a double negative of the number if number is negative", () => {
    const result = ds.doubleANumber(-2);
    expect(result).toBe(-4);
  });
});

describe("createFullName", () => {
  it("should return a string containing the full name if there are two entries", () => {
    const result = ds.createFullName("João", "Bobo");
    expect(result).toMatch(/João Bobo/);
  });

  it("should return a string containing the name if there is only one input", () => {
    const result = ds.createFullName("João");
    expect(result).toMatch(/João/);
  });
});

describe("calculateTheLenghtOfAString", () => {
  it("should return the lenght of string input", () => {
    const result = ds.calculateTheLenghtOfAString2("string");
    expect(result).toBe(6);
  });

  it("should return 0 if the string input is empty", () => {
    const result = ds.calculateTheLenghtOfAString2("");
    expect(result).toBe(0);
  });
});

describe("numbersArrayIntoString", () => {
  it("should return a string conteining a pattern of 'xxx.xxx.xxx' with an array of numbers as input", () => {
    const result = ds.numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result).toMatch(/123.456.789.10/);
  });

  it("should return a string containing only numbers if the input is an array with length <= 3", () => {
    const result = ds.numbersArrayIntoString([1, 2, 3]);
    expect(result).toMatch(/123/);
  });
});

describe("addNewLanguage", () => {
  it("should return an object", () => {
    const result = ds.addNewLanguage({ languages: [] }, "");
    expect(typeof result).toBe("object");
  });

  it("should return an object with an array containing the new language input", () => {
    const obj = {
      languages: [],
    };
    const result = ds.addNewLanguage(obj, "Java");
    expect(result).toMatchObject({
      languages: expect.arrayContaining(["Java"]),
    });
  });
});

describe("votersResult", () => {
  it("should return an object with and empty array input", () => {
    const result = ds.votersResult([]);
    expect(typeof result).toBe("object");
  });

  it("should return an object with the voters separeted by age", () => {
    const voters = [
      { age: 30, voted: true },
      { age: 32, voted: true },
      { age: 25, voted: false },
      { age: 20, voted: false },
      { age: 21, voted: true },
      { age: 55, voted: true },
      { age: 54, voted: true },
      { age: 31, voted: false },
      { age: 43, voted: false },
      { age: 41, voted: true },
      { age: 30, voted: true },
      { age: 19, voted: false },
    ];

    const result = ds.votersResult(voters);
    expect(result).toMatchObject({
      numYoungVotes: 1,
      numYoungPeople: 4,
      numMidVotesPeople: 3,
      numMidsPeople: 4,
      numOldVotesPeople: 3,
      numOldsPeople: 4,
    });
  });
});
