produtos = []

function criarProduto(id, nome, qtd){
    p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    produtos.push(p)
}

function removerProduto(id){
    produtos = produtos.filter((p) => {
        return p.id != id

    })
}

function listarProdutos(){
    return produtos
}

module.exports = {
    criarProduto,
    listarProdutos,
    removerProduto
}

