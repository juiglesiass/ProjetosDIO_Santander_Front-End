/*
Desafio: Faça um programa para calcular o valor de uma viagem.

Voce tera 3 variaveis. Sendo elas:

1- Preco combustivel;
2- Gasto medio de combustivel do carro por km;
3- Distancia em km da viagem;

Imprima no console o valor que sera gasto de combustivel para realizar esta viagem.
*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distancia = 100;

const valorGasto = (distancia / kmPorLitros) * precoCombustivel;

console.log("O valor gasto na viagem sera: R$ " + valorGasto.toFixed(2));