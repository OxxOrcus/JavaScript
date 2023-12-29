const prompt = require("readline-sync");

const age = prompt.question("What is your age?");

const ageNumber = Number(age);

console.log(ageNumber, typeof ageNumber);

//Coercao explicita ou convercao manual

console.log(Number("X")); // NaN: Not a Number

console.log(String(10), typeof String(10));

console.log(Boolean(0)); // 0 is false and all different of 0, like 1, 2... and negative like -1 is true

// Coercao Implicita

console.log(1 + "1");
console.log(10 + "5");
console.log(10 - "5");
console.log(10 * "5");
console.log(10 / "5");
