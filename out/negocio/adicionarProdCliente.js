"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function adicionarProdutoAoCliente(clientes, produtos, cpfCliente, indexProduto) {
    //  Encontrar o cliente pelo CPF
    var cliente = clientes.find(function (c) { return c.cpf.getValor == cpfCliente; });
    var produto = produtos.find(function (p) { return p.index == indexProduto; });
    if (cliente && produto) {
        // Adicionar o produto à lista de produtos consumidos
        cliente.setProdutosConsumidos.push(produto);
        console.log("Produto ".concat(produto.nome, " adicionado \u00E0 lista de ").concat(cliente.nome, "."));
    }
    else {
        if (!cliente) {
            console.log("Cliente com CPF ".concat(cpfCliente, " n\u00E3o encontrado."));
        }
        if (!produto) {
            console.log("Produto de ID:".concat(indexProduto, " n\u00E3o encontrado."));
        }
    }
}
exports.default = adicionarProdutoAoCliente;
