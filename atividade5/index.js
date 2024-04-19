const express = require("express")
const estoque = require("./src/estoque")

const app = express()

const PORT = 8080

app.get('/adicionar/:id/:nome/:qtd', function(req, resp){
    id = req.params.id
    nome = req.params.nome
    qtd = req.params.qtd
    p = estoque.criarProduto(id, nome, qtd)

    resp.send(p)
})

app.get('/listar', function(req, resp){
    resp.send(estoque.listarProdutos())
})

app.get('/remover/:id', function(req, resp){
    id = req.params.id
    estoque.removerProduto(id)
    resp.send("produto removido")
})



app.listen(PORT)