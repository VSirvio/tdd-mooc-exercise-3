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

  test("returns the correct value when a two and a three are rolled", () => {
    const diceRollResults = [2, 3];
    const fakeDiceRoll = () => {
      diceRollResults.push(diceRollResults[0]);
      return diceRollResults.shift();
    };
    expect(diceHandValue(fakeDiceRoll)).to.equal(3);
  });
});
