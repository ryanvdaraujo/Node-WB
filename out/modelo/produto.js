"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nome, valor) {
        this.nome = nome;
        this.valor = valor;
        this.index = Produto.proximoIndex;
        Produto.proximoIndex++;
    }
    Object.defineProperty(Produto.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Produto.proximoIndex = 1;
    return Produto;
}());
exports.default = Produto;
