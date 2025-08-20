/*
Desafio: Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta e a escolha da condicao de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condicao de pagamento escolhida e efetuar o calculo adequado.

Codigo Condicao de pagamento:

1 - A vista Debito: recebe 10% de desconto
2 - A vista no Dinheiro ou PIX: recebe 15% de desconto
3 - Em duas vezes: preco normal de etiqueta, sem juros
4 - Acima de duas vezes: preco normal de etiqueta mais 10% de juros
*/

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100; // Preco normal do produto
const formaDePagamento = 4; // Condicao de pagamento escolhida (1, 2, 3 ou 4)

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
}

else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
}

else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
}

else if (formaDePagamento === 4) {
    console.log(aplicarJuros(precoEtiqueta, 10));
}

console.log(200 * 0.10);
console.log(10 / 100);