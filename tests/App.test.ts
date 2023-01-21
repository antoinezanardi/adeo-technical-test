import { describe, expect, test } from "@jest/globals";
import { app, NOTICE } from "../src/modules/App";

describe("Main app function", () => {
  test("Notice returned if no args are provided", () => expect(app([])).toBe(NOTICE));
  test("Notice returned if one args are provided", () => expect(app(["foo"])).toBe(NOTICE));
  test("Notice returned if two args are provided", () => expect(app([
    "foo",
    "bar",
  ])).toBe(NOTICE));
  test("Notice returned if third arg is not filter or count", () => expect(app([
    "foo",
    "bar",
    "--toto",
  ])).toBe(NOTICE));
  test("Notice returned if third arg is filter without value", () => expect(app([
    "foo",
    "bar",
    "--filter=",
  ])).toBe(NOTICE));
  test("Countries string returned if count option is chosen", () => expect(app([
    "foo",
    "bar",
    "--count",
  ])).not.toBe(NOTICE));
  test("Countries string returned if filter option is chosen with value", () => expect(app([
    "foo",
    "bar",
    "--filter=toto",
  ])).not.toBe(NOTICE));
});