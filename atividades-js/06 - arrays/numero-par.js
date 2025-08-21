/*
Crie um programa que percorra um array de números e armazene os números pares em um novo array.
*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];

for (let i = 0; i < numeros.length; i++) {
    const isPar = numeros[i];
    if (isPar % 2 === 0) {
        pares.push(isPar);
    }
}

console.log(`Números pares: ${pares.join(", ")}`);
