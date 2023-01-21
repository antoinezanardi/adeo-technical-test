import { countries } from "./src/data/data";
import { Country } from "./src/models/Country";
import { getCountriesWithPeopleCount } from "./src/modules/Count";
import { getFilteredCountriesByAnimalName } from "./src/modules/Filter";

function logCountries(toLogCountries: Country[] | undefined): void {
  if (countries === undefined) {
    return;
  }
  console.log(JSON.stringify(toLogCountries, null, " "));
}

function app(): void {
  const notice = "You must provide one of the two options: --filter=[FILTER] | --count";
  const arg: string = process.argv[2];
  if (arg === undefined) {
    console.log(notice);
    return;
  } else if (/^--filter=.+$/.test(arg)) {
    const matches = new RegExp(/--filter=(?<filter>.+)$/).exec(arg);
    const filter: string | undefined = matches?.groups?.filter;
    return filter !== undefined ? logCountries(getFilteredCountriesByAnimalName(countries, filter)) : console.log(notice);
  } else if (/^--count$/.test(arg)) {
    return logCountries(getCountriesWithPeopleCount(countries));
  }
  console.log(notice);
}

app();