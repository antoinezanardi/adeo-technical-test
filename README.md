# ADEO Technical Test

Statement of this test is written in the `statement.md` file.

## Installation

You must have NodeJS >= 14 to run this program.

If so, run `npm i` to install `ts-node` for executing and `jest` for testing.

## Usage

NOTE : Data used in the program is stored in the `./src/data/data.ts` file.

To filter animal names based on `FILTER` value :

```
npx ts-node app.ts --filter=[FILTER]
```

To count children of countries and children of people :

```
npx ts-node app.ts --count
``` 

## Test

You can test the program with :

```
npm test
```