"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Listagem10menos(clientes, produtos, servicos) {
    console.log("\nLista de 10 clientes que menos consumiram produtos e servicos: \n");
    // 10 clientes que menos consumiram produtos e servicos
    var consumoClientes = clientes.map(function (cliente) {
        var consumoProdutos = cliente.getProdutosConsumidos.length;
        var consumoServicos = cliente.getServicosConsumidos.length;
        return {
            nome: cliente.nome,
            consumo: consumoProdutos + consumoServicos
        };
    });
    consumoClientes.sort(function (a, b) { return a.consumo - b.consumo; });
    for (var i = 0; i < Math.min(10, consumoClientes.length); i++) {
        console.log("Cliente: ".concat(consumoClientes[i].nome, ", Consumo: ").concat(consumoClientes[i].consumo));
    }
}
exports.default = Listagem10menos;
;
