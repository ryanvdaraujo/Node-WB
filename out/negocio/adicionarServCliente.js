"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// função para adicionar um serviço ao cliente
function adicionarServCliente(clientes, servicos, cpfCliente, indexServico) {
    //  Encontrar o cliente pelo CPF
    var cliente = clientes.find(function (c) { return c.cpf.getValor == cpfCliente; });
    var servico = servicos.find(function (s) { return s.index == indexServico; });
    if (cliente && servico) {
        // Adicionar o produto à lista de produtos consumidos
        cliente.setServicosConsumidos.push(servico);
        console.log("Servic\u0327o ".concat(servico.nome, " adicionado a\u0300 lista de ").concat(cliente.nome, "."));
    }
    else {
        if (!cliente) {
            console.log("Cliente com CPF ".concat(cpfCliente, " na\u0303o encontrado."));
        }
        if (!servico) {
            console.log("Servic\u0327o de ID:".concat(indexServico, " na\u0303o encontrado."));
        }
    }
}
exports.default = adicionarServCliente;
