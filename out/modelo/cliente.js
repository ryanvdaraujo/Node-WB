"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, rgs, dataCadastro, telefones, sexo, produtosConsumidos, servicosConsumidos) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rgs = rgs;
        this.dataCadastro = dataCadastro;
        this.telefones = telefones;
        this.produtosConsumidos = produtosConsumidos;
        this.servicosConsumidos = servicosConsumidos;
        this.sexo = sexo;
        this.index = Cliente.proximoIndex;
        Cliente.proximoIndex++;
    }
    Cliente.find = function (arg0) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRgs", {
        get: function () {
            return this.rgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefones", {
        get: function () {
            return this.telefones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getSexo", {
        get: function () {
            return this.sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setProdutosConsumidos", {
        set: function (produtosConsumidos) {
            this.produtosConsumidos = produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setServicosConsumidos", {
        set: function (servicosConsumidos) {
            this.servicosConsumidos = servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.proximoIndex = 1;
    return Cliente;
}());
exports.default = Cliente;
