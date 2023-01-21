import { HasName } from "./HasName";
import { Person } from "./Person";

interface Country extends HasName {
  people: Person[];
}

export { Country };