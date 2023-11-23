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
var Listagem10Clientes = /** @class */ (function (_super) {
    __extends(Listagem10Clientes, _super);
    function Listagem10Clientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ;
    Listagem10Clientes.prototype.listar = function () {
        console.log("\nLista dos 10 clientes que mais consumiram produtos ou servic\u0327os:");
        var clis = [];
        this.clientes.forEach(function (cliente) {
            clis.push({ nome: cliente.nome, quantidade: cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length, cpf: cliente.getCpf.getValor });
        });
        clis.sort(function (a, b) { return b.quantidade - a.quantidade; });
        clis.slice(0, 10).forEach(function (cli) {
            console.log("Nome: ".concat(cli.nome));
            console.log("Quantidade: ".concat(cli.quantidade));
            console.log("CPF: ".concat(cli.cpf));
            console.log("--------------------------------------");
        });
    };
    ;
    return Listagem10Clientes;
}(listagem_1.default));
exports.default = Listagem10Clientes;
;
