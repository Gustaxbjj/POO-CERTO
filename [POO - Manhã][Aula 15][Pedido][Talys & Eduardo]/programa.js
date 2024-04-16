let pedido = 
{
    numero: 108,


    cliente: {
    nome: 'Eduardo',
    cpf: '137.911.774-78',
    endereco: 'Rua das arvores, n°1'
    },


    produtos: 
        [
            {
         descricao: 'capacete',   
            precoUnitario: 500,
            quantidade: 1 
        },
            {
                        descricao: 'cotoveleira',   
                        precoUnitario: 85,
                        quantidade: 2
            }
        ]
 

}

document.write(`
<div>Número do pedido: ${pedido.numero}</div>
<div>Cliente: ${pedido.cliente.nome}</div>
<div>CPF: ${pedido.cliente.cpf}</div>
<div>Endereço: ${pedido.cliente.endereco}</div>
<hr>
`)


for (let i = 0; i < pedido.produtos.length; i++) {
    document.write(`
       <div> ${pedido.produtos[i].descricao} </div>
            <div>    ${pedido.produtos[i].precoUnitario} </div>
                <div>  ${pedido.produtos[i].quantidade} </div>
       `)
}

