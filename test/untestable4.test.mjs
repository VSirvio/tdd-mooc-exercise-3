import { afterAll, afterEach, beforeAll, beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { readFile } from "node:fs/promises";
import pg from "pg";
import { PostgresUserDao } from "../src/untestable4.mjs";

describe("Untestable 4: enterprise application", () => {
  let db;
  let createTablesQuery;
  let dropTablesQuery;
  let users;
  beforeAll(async () => {
    db = new pg.Pool({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    });

    createTablesQuery = await readFile("./src/create-tables.sql", { encoding: "utf8" });
    dropTablesQuery = await readFile("./src/drop-tables.sql", { encoding: "utf8" });

    await db.query(dropTablesQuery);
  });

  beforeEach(async () => {
    await db.query(createTablesQuery);
    users = new PostgresUserDao(db);
  });

  afterEach(async () => {
    await db.query(dropTablesQuery);
  });

  afterAll(() => {
    db.end();
  });

  test("returns null when trying to get user that does not exist", async () => {
    expect(await users.getById(173)).to.be.null;
  });

  test("can save user and then get it by ID", async () => {
    const user = {
      userId: 56,
      passwordHash: "$argon2id$v=19$m=19456,t=2,p=1$" +
        "djse7vwvbRlIHc7vMaLrVg$uTdjriUiGrjxOx+IzryXWKUGHa5oaoPJ8V05bZx1VbA",
    };
    await users.save(user);
    expect(await users.getById(user.userId)).to.deep.equal(user);
  });
});
