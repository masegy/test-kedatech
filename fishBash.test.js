const fishBash = require("./fishBash.js");

const expectedOutput = [
  1,
  2,
  "fish",
  4,
  "bash",
  "fish",
  7,
  8,
  "fish",
  "bash",
  11,
  "fish",
];

const actualOutput = fishBash(12);

if (JSON.stringify(actualOutput) === JSON.stringify(expectedOutput)) {
  console.log(
    `Test Passed. Expected: ${expectedOutput}. actual output: ${actualOutput}`
  );
  console.log("Test passed");
} else {
  console.log(
    `Test failed. Expected: ${expectedOutput}. But got: ${actualOutput}`
  );
}
