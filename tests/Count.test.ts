import { describe, expect, test } from "@jest/globals";
import { countries } from "../src/data/data";
import { getCountriesWithPeopleCount } from "../src/modules/Count";

describe("Count children from data.ts file", () => {
  const countedCountries = getCountriesWithPeopleCount(countries);
  const [ sinnoh, hoenn, johto, kanto ] = countedCountries;
  test("Sinnoh has no people", () => expect(sinnoh.name).toBe("Sinnoh [0]"));
  test("Hoenn has 2 people", () => expect(hoenn.name).toBe("Hoenn [2]"));
  test("Johto has 1 person", () => expect(johto.name).toBe("Johto [1]"));
  test("Kanto has 2 person", () => expect(kanto.name).toBe("Kanto [2]"));
  const [ max, flora ] = hoenn.people;
  test("Max has no animal", () => expect(max.name).toBe("Max [0]"));
  test("Flora has 4 animals", () => expect(flora.name).toBe("Flora [4]"));
  const [ peter ] = johto.people;
  test("Peter has 6 animals", () => expect(peter.name).toBe("Peter [6]"));
  const [ pierre, sacha ] = kanto.people;
  test("Pierre has 3 animals", () => expect(pierre.name).toBe("Pierre [3]"));
  test("Sacha has 6 animals", () => expect(sacha.name).toBe("Sacha [6]"));
});

describe("Count children from various data", () => {
  test("Empty countries array", () => expect(getCountriesWithPeopleCount([])).toStrictEqual([]));
});
