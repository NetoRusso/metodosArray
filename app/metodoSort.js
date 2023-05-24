let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdernarPorPreco.addEventListener('click', ordernarLivrosPorPreco);

function ordernarLivrosPorPreco(){
    livrosOrdenados = livrosComDesconto.sort( (a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}