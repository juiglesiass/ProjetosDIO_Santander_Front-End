/*
Desafio: IMC

Formula: IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto, mostre sua condicao de acordo com a tabela abaixo:

IMC < 18.5: Abaixo do peso
IMC entre 18.5 e 25: Peso normal
IMC entre 25.0 e 30: Acima do peso
IMC entre 30.0 e 40: Obeso
IMC > 40: Obesidade grave
*/

const peso = 56; // em kg
const altura = 1.70; // em metros

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`IMC: ${imc.toFixed(2)} - Abaixo do peso`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`IMC: ${imc.toFixed(2)} - Peso normal`);
} else if (imc >= 25 && imc < 30) {
    console.log(`IMC: ${imc.toFixed(2)} - Acima do peso`);
} else if (imc >= 30 && imc < 40) {
    console.log(`IMC: ${imc.toFixed(2)} - Obeso`);
} else {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grave`);
}