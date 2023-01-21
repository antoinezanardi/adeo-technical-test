import { Country } from "../models/Country";

const countries: Country[] = [
  {
    name: "Sinnoh",
    people: [],
  },
  {
    name: "Hoenn",
    people: [
      {
        name: "Max",
        animals: [],
      },
      {
        name: "Flora",
        animals: [
          { name: "Tropius" },
          { name: "Bekipan" },
          { name: "Ludicolo" },
          { name: "Braségali" },
        ],
      },
    ],
  },
  {
    name: "Johto",
    people: [
      {
        name: "Peter",
        animals: [
          { name: "Drattak" },
          { name: "Léviator" },
          { name: "Carchacrok" },
          { name: "Altaria" },
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
        name: "Pierre",
        animals: [
          { name: "Onyx" },
          { name: "Racaillou" },
          { name: "Racaillou" },
        ],
      },
      {
        name: "Sacha",
        animals: [
          { name: "Pikachu" },
          { name: "Bulbizarre" },
          { name: "Ronflex" },
          { name: "Lokhlass" },
          { name: "Carapuce" },
          { name: "Dracaufeu" },
        ],
      },
    ],
  },
];

export { countries };