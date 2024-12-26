function desenharCarrinhoDeCompras(carrinho, containerHtml,totalHTML){

    //esvaziando o containerHTML antes do for preenchê-los
    containerHtml.innerHTML = ''

    for (let i = 0; i < carrinho.listaDeProdutos.length; i++) {
    containerHtml.innerHTML += `
    <div class='card'>
        <span>${carrinho.listaDeProdutos[i].id}</span>
        <span>${carrinho.listaDeProdutos[i].descricao}</span>
        <span>Marca: ${carrinho.listaDeProdutos[i].marca}</span>
        <span>R$${carrinho.listaDeProdutos[i].precoUnitario}</span>

    </div> 

    `;
    
    }

    totalHTML.innerHTML = `Preço Total: R$${carrinhoDeCompras.calcularTotal()}`
}