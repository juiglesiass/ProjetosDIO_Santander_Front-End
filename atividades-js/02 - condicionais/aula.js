/*
condicao com ===:

    const numero = 10;

    const numeroPar = numero % 2 === 0; // se o resto da divisao eh 0, entao o numero eh par, ou seja true

    console.log(numeroPar);
*/

// condicao com if:

const numero = 10;

const numeroPar = numero % 2 === 0; // se o resto da divisao eh 0, entao o numero eh par, ou seja true

console.log(numeroPar);

if (numeroPar) {
  console.log("O número é par");
} else if (!numeroPar) {
  console.log("O número é ímpar");
}