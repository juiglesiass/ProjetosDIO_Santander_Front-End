/*
Desafio: Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta e a escolha da condicao de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condicao de pagamento escolhida e efetuar o calculo adequado.

Codigo Condicao de pagamento:

1 - A vista Debito: recebe 10% de desconto
2 - A vista no Dinheiro ou PIX: recebe 15% de desconto
3 - Em duas vezes: preco normal de etiqueta, sem juros
4 - Acima de duas vezes: preco normal de etiqueta mais 10% de juros
*/

const precoEtiqueta = 100; // Preco normal do produto
const formaDePagamento = 4; // Condicao de pagamento escolhida (1, 2, 3 ou 4)

if (formaDePagamento === 1) {
    const precoFinal = precoEtiqueta * 0.90; // 10% de desconto
    console.log(`O preço final do produto é: R$ ${precoFinal.toFixed(2)}`);
}

else if (formaDePagamento === 2) {
    const precoFinal = precoEtiqueta * 0.85; // 15% de desconto
    console.log(`O preço final do produto é: R$ ${precoFinal.toFixed(2)}`);
}

else if (formaDePagamento === 3) {
    const precoFinal = precoEtiqueta;
    console.log(`O preço final do produto é: R$ ${precoFinal.toFixed(2)}`);
}

else if (formaDePagamento === 4) {
    const precoFinal = precoEtiqueta * 1.10; // 10% de juros
    console.log(`O preço final do produto é: R$ ${precoFinal.toFixed(2)}`);
}