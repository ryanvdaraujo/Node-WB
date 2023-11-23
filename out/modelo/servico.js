"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nome, valor) {
        this.nome = nome;
        this.valor = valor;
        this.index = Servico.proximoIndex;
        Servico.proximoIndex++;
    }
    Object.defineProperty(Servico.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Servico.proximoIndex = 1;
    return Servico;
}());
exports.default = Servico;
