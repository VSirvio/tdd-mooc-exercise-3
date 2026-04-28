import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue } from "../src/untestable2.mjs";

describe("Untestable 2: a dice game", () => {
  test("returns the correct value when two fours are rolled", () => {
    const diceRollResults = [4, 4];
    const fakeDiceRoll = () => {
      diceRollResults.push(diceRollResults[0]);
      return diceRollResults.shift();
    };
    expect(diceHandValue(fakeDiceRoll)).to.equal(104);
  });
});
