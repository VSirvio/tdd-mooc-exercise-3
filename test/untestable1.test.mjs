import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/untestable1.mjs";

describe("Untestable 1: days until Christmas", () => {
  test("returns the correct value when there are 11 days until Christmas", () => {
    expect(daysUntilChristmas(new Date("2025-12-14T12:35:40.771Z"))).to.equal(11);
  });

  test("returns the correct value when there are 0 days until Christmas", () => {
    expect(daysUntilChristmas(new Date("2000-12-25T21:01:17.813Z"))).to.equal(0);
  });

  test("returns the correct value when there are 365 days until Christmas", () => {
    expect(daysUntilChristmas(new Date("2003-12-26T07:58:10.066Z"))).to.equal(365);
  });
});
