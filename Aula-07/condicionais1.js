const prompt = require("readline-sync");

const age = Number(prompt.question("What is your age? "));

const isOlder = age >= 18;

// ESTRUTURA CONDICIONAL: if/else

if (isOlder) {
  // do somthing...
  console.log("You are Older");
} else {
  console.log("You are not Older.");
}
// Media com 3

const mediaDoAluno = 7;

if (mediaDoAluno >= 7) {
  console.log("Aprovado!");
} else if (mediaDoAluno < 7 && mediaDoAluno >= 5) {
  console.log("Prova Extra!");
} else {
  console.log("Reprovado!");
}
