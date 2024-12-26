class Produto{

constructor(id, foto, descricao, marca ,precoUnitario ){
    this.id = id;
    this.foto = foto;
    this.descricao = descricao;
    this.marca = marca
    this.precoUnitario = Number(precoUnitario);
}


}

class CarrinhoDeCompras{
    constructor(){
        this.data = '20-07-2024'
        this.listaDeProdutos = []
    }

        adicionarProduto(produto){
         if (produto instanceof Produto) {
          this.listaDeProdutos.push(produto)
            } else{
                console.erro('Só é possivel adicionar objetos da classe Produto ')
               }

    }


            calcularTotal(){
                let total = 0
                for (let i = 0; i < this.listaDeProdutos.length; i++) {
                 total += this.listaDeProdutos[i].precoUnitario
                
                }
                return(total)
              
            }

}