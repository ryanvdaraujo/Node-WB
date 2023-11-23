"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("./listagem"));
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    // ... (seu código existente)
    ListagemClientes.prototype.listar = function () {
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            var _a, _b;
            if (cliente) { // Verifica se o cliente é válido
                console.log("Nome: " + (cliente.nome || 'N/A')); // Usa 'N/A' se nome for undefined
                console.log("Nome social: " + (cliente.nomeSocial || 'N/A'));
                console.log("Sexo: " + (cliente.getSexo || 'N/A')); // Adiciona () para chamar a função getSexo
                console.log("CPF: " + (((_a = cliente.getCpf) === null || _a === void 0 ? void 0 : _a.getValor) || 'N/A')); // Usa 'N/A' se getCpf for undefined
                cliente.getRgs.forEach(function (rg) {
                    console.log("RG: " + ((rg === null || rg === void 0 ? void 0 : rg.getValor) || 'N/A')); // Usa 'N/A' se getValor for undefined
                });
                console.log("Data de cadastro: " + (((_b = cliente.getDataCadastro) === null || _b === void 0 ? void 0 : _b.toLocaleDateString()) || 'N/A'));
                cliente.getTelefones.forEach(function (telefone) {
                    console.log("Telefone: " + (((telefone === null || telefone === void 0 ? void 0 : telefone.getDdd) || 'N/A') + ((telefone === null || telefone === void 0 ? void 0 : telefone.getNumero) || 'N/A')));
                });
                console.log("ID: " + (cliente.index || 'N/A'));
                try {
                    cliente.getProdutosConsumidos.forEach(function (P) {
                        console.log("Produto(s) consumido(s):" + ((P === null || P === void 0 ? void 0 : P.nome) || 'N/A') + ", R$:" + ((P === null || P === void 0 ? void 0 : P.valor) || 'N/A'));
                    });
                }
                finally {
                    console.log("O cliente não possui nenhum consumo registrado.");
                }
                console.log("--------------------------------------");
            }
            else {
                console.error("Cliente é undefined ou null.");
            }
        });
        console.log("\n");
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
