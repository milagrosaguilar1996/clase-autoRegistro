"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.stock = function (array) {
        console.log(array);
    };
    RegistroAutomotor.prototype.actualizar = function () {
    };
    RegistroAutomotor.prototype.consultar = function (auto, array) {
        var foundCar = array.filter(function (car) { return (array["marca"] === auto) || (array["modelo"] === auto); });
        if (foundCar) {
            foundCar.forEach(function (item) { return console.log(item); });
        }
        else {
            console.log("auto no encontrado");
        }
    };
    RegistroAutomotor.prototype.borrar = function () {
    };
    RegistroAutomotor.prototype.darDeAlta = function (auto, array) {
        array.push(auto);
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
