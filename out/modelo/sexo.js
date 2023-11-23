"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sexo = /** @class */ (function () {
    function Sexo(sexo) {
        this.sexo = sexo;
    }
    Object.defineProperty(Sexo.prototype, "getGenero", {
        get: function () {
            return this.sexo;
        },
        enumerable: false,
        configurable: true
    });
    return Sexo;
}());
exports.default = Sexo;
