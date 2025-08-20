/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / altura^2);
Instancie uma pessoa chamada Jose que tenha 70kg de peso e 1,75m de altura e peça para ele dizer o seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc < 25) {
            return "Peso normal";
        } else if (imc < 30) {
            return "Acima do peso";
        } else if (imc < 40) {
            return "Obeso";
        } else {
            return "Obesidade Grave";
        }
    }
}

const jose = new Pessoa("Jose", 70, 1.75);
console.log(`O IMC de ${jose.nome} é ${jose.calcularImc().toFixed(2)}`);

const julia = new Pessoa("Julia", 56, 1.70);
console.log(`${julia.nome} tem seu IMC classificado como ${julia.classificarImc()}`);