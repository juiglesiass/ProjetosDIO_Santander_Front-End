/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 a 100.
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

Dados de entrada: 5, 50, 10, 98, 23

Saida: 98
*/

const {gets, print} = require('./funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numero = gets();
    numerosSorteados.push(numero);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numero = numerosSorteados[i];
    if (numero > maiorValor) {
        maiorValor = numero;
    }
}
print(maiorValor);