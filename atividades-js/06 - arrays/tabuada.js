/*
Crie um programa que dado um numero imprima a sua tabuada.
*/

const numero = 5;
const tabuada = [];

for (let i = 0; i < 10; i++) {
    tabuada[i] = numero * i;
    console.log(`${numero} * ${i} = ${tabuada[i]}`);
}