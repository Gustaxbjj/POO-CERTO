let containerCards = document.getElementById('containerCards');
let iptPreco = document.getElementById('iptPreco')
let btnFiltrar = document.getElementById('btnFiltrar')
let iptTipo = document.getElementById('iptTipo')

desenharCards(containerCards, cardapio);

function quandoClicarEmFiltrar(){
    let listafiltrada = cardapio.filter(
        (lanche) => (lanche.preco <= iptPreco.value && lanche.tipo == iptTipo.value)
        )
            if(listafiltrada.length > 0 ){
            desenharCards(containerCards, listafiltrada)
            }

            else{
                desenharMensagem(containerCards)
            }
        
        
}

btnFiltrar.addEventListener('click',  quandoClicarEmFiltrar)

function desenharMensagem(tagContainer){
    tagContainer.innerHTML = ('Nenhum resultado foi encontrado para esse filtro')
}
