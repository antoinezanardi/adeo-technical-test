import { Country } from "../models/Country";
import { Person } from "../models/Person";

function getFilteredPeopleByAnimalName(people: Person[], filter: string): Person[] {
  return people.reduce<Person[]>((peopleAcc: Person[], person: Person) => {
    const filteredAnimals = person.animals.filter(({ name }) => name.includes(filter));
    return filteredAnimals.length ? [ ...peopleAcc, { ...person, animals: filteredAnimals } ] : peopleAcc;
  }, []);
}

function getFilteredCountriesByAnimalName(countries: Country[], filter: string): Country[] | undefined {
  const filteredCountries = countries.reduce<Country[]>((countriesAcc: Country[], country: Country) => {
    const filteredPeople = getFilteredPeopleByAnimalName(country.people, filter);
    return filteredPeople.length ? [ ...countriesAcc, { ...country, people: filteredPeople } ] : countriesAcc;
  }, []);
  return filteredCountries.length ? filteredCountries : undefined;
}

export { getFilteredCountriesByAnimalName };