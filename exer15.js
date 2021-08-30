function calculaValorPedido(codigoPedido, quantidade){
    let preco = 0;

    switch(codigoPedido){
        case '100':
            preco = 3 * quantidade;
            console.log("Pedido: Cachorro Quente. Valor: R$" + preco.toFixed(2).replace(".", ","));
            break;
        case '200':
            preco = 4 * quantidade;
            console.log("Pedido: Hambúrguer Simples. Valor: R$" + preco.toFixed(2).replace(".", ","));
            break;
        case '300':
            preco = 5.5 * quantidade;
            console.log("Pedido: Cheeseburguer. Valor: R$" + preco.toFixed(2).replace(".", ","));
            break;
        case '400':
            preco = 7.5 * quantidade;
            console.log("Pedido: Bauru. Valor: R$" + preco.toFixed(2).replace(".", ","));
            break;
        case '500':
            preco = 3.5 * quantidade;
            console.log("Pedido: Refrigerante. Valor: R$" + preco.toFixed(2).replace(".", ","));
            break;
        case '600':
            preco = 2.8 * quantidade;
            console.log("Pedido: Suco. Valor: R$" + preco.toFixed(2).replace(".", ","));
            break;
        default:
            console.log("Produto não existente.")
    }
}

calculaValorPedido("600", 4)