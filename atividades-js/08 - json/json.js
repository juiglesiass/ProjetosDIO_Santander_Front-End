let invoice = {
    name: "julia",
    age: 21,
    email: "julia@example.com",
    products: {
        0: ["mouse", 29],
        1: ["keyboard", 89],
        2: ["monitor", 199]
    }
}

generateInvoice(invoice) 

function generateInvoice(invoice) {
    console.log(`O comprador é ${invoice.name}`);
    console.log(`Idade: ${invoice.age}`);
    console.log(`Email: ${invoice.email}`);

    for (let index in invoice.products) {
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`);
    }
}


