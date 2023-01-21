import { Animal } from "../models/Animal";
import { Country } from "../models/Country";
import { Person } from "../models/Person";

function getNameWithChildrenCount(name: string, children: Person[] | Animal[]): string {
  return `${name} [${children.length}]`;
}

function getCountriesWithPeopleCount(countries: Country[]): Country[] {
  return countries.map(country => {
    country.people = country.people.map(person => {
      person.name = getNameWithChildrenCount(person.name, person.animals);
      return person;
    });
    country.name = getNameWithChildrenCount(country.name, country.people);
    return country;
  });
}

export { getCountriesWithPeopleCount };