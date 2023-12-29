// OPERADORES BOOLEANOS: Comparacoes

const number1 = 10;
const number2 = 12;

console.log(number1 == number2); // false (with 2 equals)
console.log(number1 === number2); // false (with 3 equals)
console.log(number1 === "10"); // number + string = false (with 3 equals) & number + string = true (with 2 equals)

// comparacao com 2 iguais compara apenas o valor e nao compara o tipo enquanto,
// comparacao com 3 iguais compara tanto o valor quanto o tipo
// SEMPRE NA COMPARACAO USE 2 IGUais

console.log(number1 !== number2);

console.log(number1 > number2); // maior que, menor que, menor ou igual a, maior ou igual a

const agePeople1 = 20;
const agePeople2 = 39;

// console.log(agePeople1 >= 18);
// console.log(agePeople2 >= 18);

console.log(agePeople1 >= 18 && agePeople2 >= 18); // os dois sao verdadeiros = true, um dos dois falso = false
console.log(agePeople1 >= 18 || agePeople2 >= 18); // 1 ou 2 ser verdadeiro = true, os 2 negativo = false

console.log(!true);

console.log(!(agePeople1 >= 18)); //Retorna verdadeiro se a pessoa for maior de idade, ! is for inverse (negacao)
