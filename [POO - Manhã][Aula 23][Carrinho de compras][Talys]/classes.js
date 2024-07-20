class Produto{

constructor(id, foto, descricao, precoUnitario ){
    this.id = id;
    this.foto = foto;
    this.descricao = descricao;
    this.precoUnitario = precoUnitario;
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

}