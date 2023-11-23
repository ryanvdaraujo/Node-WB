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
var ListagemGeneroF = /** @class */ (function (_super) {
    __extends(ListagemGeneroF, _super);
    function ListagemGeneroF(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemGeneroF.prototype.listar = function () {
        // listar clientes por gênero
        var feminino = [];
        this.clientes.forEach(function (cliente) {
            if (cliente.getSexo.getGenero == "f") {
                feminino.push(cliente);
            }
            ;
        });
        if (feminino !== null) {
            console.log("\nLista de todos os clientes do ge\u0302nero feminino:\n");
            feminino.forEach(function (f) {
                var _a, _b;
                if (f !== undefined) {
                    console.log("Nome: " + (f.nome));
                    console.log("Nome social: " + (f.nomeSocial || 'N/A'));
                    console.log("Sexo: " + (f.getSexo.getGenero || 'N/A'));
                    console.log("CPF: " + (((_a = f.getCpf) === null || _a === void 0 ? void 0 : _a.getValor) || 'N/A'));
                    f.getRgs.forEach(function (rg) {
                        console.log("RG: " + ((rg === null || rg === void 0 ? void 0 : rg.getValor) || 'N/A'));
                    });
                    console.log("Data de cadastro: " + (((_b = f.getDataCadastro) === null || _b === void 0 ? void 0 : _b.toLocaleDateString()) || 'N/A'));
                    f.getTelefones.forEach(function (telefone) {
                        console.log("Telefone: " + (((telefone === null || telefone === void 0 ? void 0 : telefone.getDdd) || 'N/A') + ((telefone === null || telefone === void 0 ? void 0 : telefone.getNumero) || 'N/A')));
                    });
                    console.log("ID: " + (f.index));
                    console.log("--------------------------------------");
                }
                else {
                    console.log("Nenhum cliente do gênero feminino encontrado!");
                }
            });
        }
    };
    return ListagemGeneroF;
}(listagem_1.default));
exports.default = ListagemGeneroF;
