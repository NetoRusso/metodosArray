const botoes = document.querySelectorAll('.btn');
botoes.forEach( (e) => e.addEventListener('click', filtrarLivros) )

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? 
    filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);

    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livrosComDesconto.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livrosComDesconto.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por <span id="valor">${valorTotal}</span></p>
    </div>
    `
}