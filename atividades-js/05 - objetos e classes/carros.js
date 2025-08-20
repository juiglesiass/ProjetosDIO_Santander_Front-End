/*
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto medio de combustivel por km rodado.
Crie um método que dado a quantidade de km e o preco do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor (marca,cor,gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularGastoViagem(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoPorKm * precoCombustivel;
    }
}

const uno = new Carro("Fiat", "Prata", 1/12); //12 por litro ent tem q fazer 1/12 pra calcular por km

console.log(uno);

console.log(uno.calcularGastoViagem(70, 5));
