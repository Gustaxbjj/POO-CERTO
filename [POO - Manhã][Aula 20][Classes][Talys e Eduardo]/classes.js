 class ContaDeEnergia  {
    

    constructor(dataDeVencimento,nomeDoDestinatario,taxaDeiluminacao,wConsumo){
        this.dataDeVencimento = dataDeVencimento;
        this.nomeDoDestinatario = nomeDoDestinatario;
        this.taxaDeiluminacao = taxaDeiluminacao;
        this.wConsumo = wConsumo;
        this.total = this.taxaDeiluminacao * this.wConsumo
    }



 }

 class ContaDeAgua {

    constructor(valor,taxaDeEsgoto, dataDePagamento){
        this.valor = valor 
        this.dataDePagamento = dataDePagamento
        this.taxaDeEsgoto = taxaDeEsgoto
        this.total = this.valor * this.taxaDeEsgoto
}
 }
 