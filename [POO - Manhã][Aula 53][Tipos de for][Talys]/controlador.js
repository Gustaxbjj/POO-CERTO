let containerCards = document.getElementById("containerCards")
let iptNome = document.getElementById("iptNome")
let iptEstado = document.getElementById("iptEstado")
let iptAno = document.getElementById("iptAno")
let iptEscudo = document.getElementById("iptEscudo")
let btnCadastrar = document.getElementById("btnCadastrar")

desenharCards(containerCards,time)


function cadastra(){

    let timeTemp = {
        nome: iptNome.value,
        anoDaFundacao: iptAno.value,
        estadoDeOrigem: iptEstado.value,
        escudo: iptEscudo
    }

    time.push(timeTemp)

    desenharCards(containerCards, time)
}

btnCadastrar.addEventListener("click", cadastra)