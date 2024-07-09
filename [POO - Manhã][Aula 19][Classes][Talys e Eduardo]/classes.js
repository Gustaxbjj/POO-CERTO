class Conta {

constructor(nomeDoTitular,numero,saldo,agencia){
    this.nomeDoTitular = nomeDoTitular
    this.numero = numero
    this.saldo = saldo
    this.agencia = agencia
}

//abaico do  construtot, podemos definir açoes para a classe
// cosequentemente, todos os objetos desta classe
//podem usar essas açoes

exibirDados(){
    console.log(`Nome: ${this.nomeDoTitular} -> R$ ${this.saldo}`)
}

}