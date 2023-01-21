import { countries } from "../data/data";
import { Country } from "../models/Country";
import { getCountriesWithPeopleCount } from "./Count";
import { getFilteredCountriesByAnimalName } from "./Filter";

const NOTICE = "You must provide one of the two options: --filter=[FILTER] | --count";

function getLogCountries(toLogCountries: Country[] | undefined): string | undefined {
  if (countries === undefined) {
    return;
  }
  return JSON.stringify(toLogCountries, null, " ");
}

function app(args: string[]): string {
  if (args.length <= 2) {
    return NOTICE;
  }
  const arg: string = args[2];
  if (/^--filter=.+$/.test(arg)) {
    const matches = new RegExp(/--filter=(?<filter>.+)$/).exec(arg);
    const filter: string | undefined = matches?.groups?.filter;
    return filter !== undefined ? getLogCountries(getFilteredCountriesByAnimalName(countries, filter)) : NOTICE;
  } else if (/^--count$/.test(arg)) {
    return getLogCountries(getCountriesWithPeopleCount(countries));
  }
  return NOTICE;
}

export { NOTICE, app, getLogCountries };