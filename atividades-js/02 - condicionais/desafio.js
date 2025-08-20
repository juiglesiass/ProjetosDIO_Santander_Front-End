/*
Desafio: Faça um programa para calcular o valor de uma viagem.

Voce tera 3 variaveis. Sendo elas:

1- Preco do etanol;
2- Preco da gasolina;
3- O tipo de combustivel que esta no seu carro;
4- Gasto medio de combustivel do carro por km;
5- Distancia em km da viagem;

Imprima no console o valor que sera gasto de combustivel para realizar esta viagem.
*/

const precoEtanol = 4.99;
const precoGasolina = 5.79;
const tipoCombustivel = "Etanol";
const kmPorLitros = 10; 
const kmDistancia = 100;

if (tipoCombustivel === "Etanol") {
  const valorGasto = (kmDistancia / kmPorLitros) * precoEtanol;
} else if (tipoCombustivel === "Gasolina") {
  const valorGasto = (kmDistancia / kmPorLitros) * precoGasolina;
} else {
  console.log("Tipo de combustível não reconhecido.");
}

console.log("O valor gasto na viagem será de R$ " + valorGasto.toFixed(2));