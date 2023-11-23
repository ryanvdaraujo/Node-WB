"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }
    Object.defineProperty(Empresa.prototype, "getClientes", {
        get: function () {
            return this.clientes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getProdutos", {
        get: function () {
            return this.produtos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getServicos", {
        get: function () {
            return this.servicos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "setClientes", {
        set: function (clientes) {
            this.clientes = clientes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "setProdutos", {
        set: function (produtos) {
            this.produtos = produtos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "setServicos", {
        set: function (servicos) {
            this.servicos = servicos;
        },
        enumerable: false,
        configurable: true
    });
    return Empresa;
}());
exports.default = Empresa;
