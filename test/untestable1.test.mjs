import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/untestable1.mjs";

describe("Untestable 1: days until Christmas", () => {
  test("returns the correct value when there are 11 days until Christmas", () => {
    expect(daysUntilChristmas(new Date("2025-12-14T12:35:40.771Z"))).to.equal(11);
  });
});
