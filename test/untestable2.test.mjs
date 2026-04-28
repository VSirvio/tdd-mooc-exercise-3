import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue, diceRoll } from "../src/untestable2.mjs";

describe("Untestable 2: a dice game", () => {
  test("todo", () => {
    // TODO: write proper tests
    expect(diceHandValue(diceRoll)).to.be.a("number");
  });
});
