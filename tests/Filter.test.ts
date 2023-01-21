import { describe, expect, test } from "@jest/globals";
import { countries } from "../src/data/data";
import { Country } from "../src/models/Country";
import { getFilteredCountriesByAnimalName } from "../src/modules/Filter";

describe("Filter countries from data.ts file", () => {
  test("Filter with Pikachu", () => {
    const expected: Country[] = [
      {
        name: "Kanto",
        people: [
          {
            name: "Sacha",
            animals: [{ name: "Pikachu" }],
          },
        ],
      },
    ];
    return expect(getFilteredCountriesByAnimalName(countries, "Pikachu")).toStrictEqual(expected);
  });
  test("Filter with Drac", () => {
    const expected: Country[] = [
      {
        name: "Johto",
        people: [
          {
            name: "Peter",
            animals: [
              { name: "Dracaufeu" },
              { name: "Dracolosse" },
            ],
          },
        ],
      },
      {
        name: "Kanto",
        people: [
          {
            name: "Sacha",
            animals: [{ name: "Dracaufeu" }],
          },
        ],
      },
    ];
    return expect(getFilteredCountriesByAnimalName(countries, "Drac")).toStrictEqual(expected);
  });
  test("Filter with random name", () => expect(getFilteredCountriesByAnimalName(countries, "Voltorbe")).toBe(undefined));
});

describe("Count children from various data", () => {
  test("Empty countries array", () => expect(getFilteredCountriesByAnimalName([], "foobar")).toBe(undefined));
});
