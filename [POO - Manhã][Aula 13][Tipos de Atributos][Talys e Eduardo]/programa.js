
let ClienteB = 

    {

nome: 'Cleiton Rasta',
cpf: '222.222.222-22',
endereço: 
{
    rua: 'tal',
    numero: '15',
    bairro: 'centro',
    cidade: 'cajueiro',
    estado: 'AL' 
}

}


let ClienteC = {
    nome: 'Maria',
    
    pedidos: [
        {
    totalProdutos: 320,
    frete: 15
        },


     {
 totalProdutos:500,
 frete: 72
    }


]
}

console.log (ClienteB.endereço.cidade)
console.log (ClienteC.pedidos[1].frete)
    
