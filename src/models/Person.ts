import { HasName } from "./HasName";
import { Animal } from "./Animal";

interface Person extends HasName {
  animals: Animal[];
}

export { Person };