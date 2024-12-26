//pegando elementos do html e colocando em variavris:
let inputID = document.getElementById('iptID');
let inputDescricao = document.getElementById('iptDescricao');
let inputPreco= document.getElementById('iptPrecoUnitario');
let buttonAdicionar = document.getElementById('btnAdicionar')
let containerCards = document.getElementById('containerCards')
let cTotal = document.getElementById('containerTotal')
let inputMarca = document.getElementById('iptMarca')

let carrinhoDeCompras = new CarrinhoDeCompras();


//Função que sera chamado quando o botão Adicionar for clicado
function quandoClicarNoBotao(){
    console.log(inputDescricao.value)

    //criação de um objeto na classe Produto
    //O construtor esta pegando valores inputs
let produtoTemp = new Produto(
    inputID.value,
    '',
    inputDescricao.value,
    inputMarca.value,
    inputPreco.value
    
    )
    
   carrinhoDeCompras.adicionarProduto(produtoTemp);
   console.log(carrinhoDeCompras);

   desenharCarrinhoDeCompras(carrinhoDeCompras, containerCards, cTotal);
   
    
} 



//Adiciona um 'fofoqueiro' vulgo Karol ao botão Adicionar
//Sempre que o botao for clicado o fofoqueiro irá chamar a função 'quandoClicarNoBotão'
buttonAdicionar.addEventListener('click', quandoClicarNoBotao);


