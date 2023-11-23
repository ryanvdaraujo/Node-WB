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
var entrada_1 = __importDefault(require("../io/entrada"));
var apagar_1 = __importDefault(require("./apagar"));
var ApagarCliente = /** @class */ (function (_super) {
    __extends(ApagarCliente, _super);
    function ApagarCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ApagarCliente.prototype.apagar = function () {
        console.log("\nIn\u00EDcio da exclus\u00E3o do cadastro do cliente");
        var cpf = this.entrada.receberTexto("Por favor, informe o n\u00FAmero do CPF do cliente a ser exclu\u00EDdo: ");
        var index = this.clientes.findIndex(function (c) { return c.getCpf.getValor === cpf; });
        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log("Cadastro do cliente exclu\u00EDdo com sucesso.\n");
        }
        else {
            console.log("Cliente n\u00E3o encontrado\n");
        }
    };
    return ApagarCliente;
}(apagar_1.default));
exports.default = ApagarCliente;
