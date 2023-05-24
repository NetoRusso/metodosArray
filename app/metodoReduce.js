function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livrosComDesconto.reduce( (acc, livro) => acc + livro.preco, 0).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})
}