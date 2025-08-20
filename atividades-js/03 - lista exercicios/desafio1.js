/*
Desafio: Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua media e a sua classificacao conforme a tabela abaixo:

media = (nota 1 + nota 2 + nota 3) / 3;

Media menor que 5.0: reprovacao
Media entre 5.0 e 7.0: recuperacao
Media acima de 7.0: passou de semestre
*/

const nota1 = 4.5;
const nota2 = 6.5;
const nota3 = 8.0;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5.0) {
    console.log(`Média: ${media.toFixed(2)} - Reprovação`);
} else if (media >= 5.0 && media < 7.0) {
    console.log(`Média: ${media.toFixed(2)} - Recuperação`);
} else {
    console.log(`Média: ${media.toFixed(2)} - Aprovado`);
}