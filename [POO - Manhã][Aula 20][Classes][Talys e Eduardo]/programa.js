let minhaContaDeEnergia = new ContaDeEnergia(23,0.50, 'Talys', '12/07/2024')
let minhacontaDeAgua = new ContaDeAgua(50 , 1.5, '12-03-2024')

console.log( `Energia: R$ ${minhaContaDeEnergia.total} -> ${minhaContaDeEnergia.nomeDoDestinatario} -> ${minhaContaDeEnergia.dataDeVencimento}`)
console.log(`agua: R$ ${minhacontaDeAgua.total} -> ${minhacontaDeAgua.dataDePagamento}`)