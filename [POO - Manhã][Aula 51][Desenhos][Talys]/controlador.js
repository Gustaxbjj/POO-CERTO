let containerCards = document.getElementById("containerCards")
let iptAno = document.getElementById("iptAno")
let iptTitulo = document.getElementById("iptTitulo")
let iptAutor = document.getElementById("iptAutor")
let iptGenero = document.getElementById("iptGenero")
let btnFiltrar = document.getElementById("btnFiltrar")

desenharCards(containerCards,listaDedesenhos)

function quandoClicarEmFiltrar() {
    let listafiltrada = listaDedesenhos.filter(
        (Desenhos) => (Desenhos.ano <=iptAno.value) || (Desenhos.titulo <= iptTitulo.value) || (Desenhos.autor <= iptAutor.value) || (Desenhos.genero == iptGenero.value )
        )

        if (listafiltrada.lenght > 0) {
            desenharCards(containerCards, listafiltrada)
        }
         
        else{
            desenharMensagem(containerCards)
        }
       
}

btnFiltrar.addEventListener('click', quandoClicarEmFiltrar)

function desenharMensagem(tagContainer) {
    tagContainer.innerHTML = ('Nenhum resultado foi encontrado para esse filtro')
}