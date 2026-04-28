import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv } from "../src/untestable3.mjs";

// example input:
// Loid,Forger,,Male
// Anya,Forger,6,Female
// Yor,Forger,27,Female

describe("Untestable 3: CSV file parsing", () => {
  test("returns an empty array for empty data", () => {
    expect(parsePeopleCsv("")).to.deep.equal([]);
  });

  test("returns the correct result for non-empty data", () => {
    const csvData = `Loid,Forger,,Male
                     Anya,Forger,6,Female
                     Yor,Forger,27,Female`;

    const expectedResult = [
      {
        firstName: "Loid",
        lastName: "Forger",
        gender: "m",
      },
      {
        firstName: "Anya",
        lastName: "Forger",
        age: 6,
        gender: "f",
      },
      {
        firstName: "Yor",
        lastName: "Forger",
        age: 27,
        gender: "f",
      },
    ];

    expect(parsePeopleCsv(csvData)).to.deep.equal(expectedResult);
  });
});
