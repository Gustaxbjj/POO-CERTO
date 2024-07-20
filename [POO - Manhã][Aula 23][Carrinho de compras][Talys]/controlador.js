let inputID = document.getElementById('iptID');
let inputDescricao = document.getElementById('iptDescricao');
let inputPreco= document.getElementById('iptPrecoUnitario');
let buttonAdicionar = document.getElementById('btnAdicionar')
let containerCards = document.getElementById('containerCards')


function quandoClicarNoBotao(){
    console.log(inputDescricao.value)
} 

buttonAdicionar.addEventListener( 'click', quandoClicarNoBotao);


let tecnologia = new Produto('1293448', '', 'mouse rgb', 120)
let roupas = new Produto('13693274', '', 'rash guard-Brasil', 190)

let carrinho = new CarrinhoDeCompras()

carrinho.adicionarProduto(tecnologia)
carrinho.adicionarProduto(roupas)

console.log(carrinho);

//--------------------------

