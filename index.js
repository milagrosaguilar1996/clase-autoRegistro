"use strict";
exports.__esModule = true;
var Autos_1 = require("./Autos");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var fs = require("fs");
var agencia = [];
try {
    var data = fs.readFileSync("./autos.json", "utf8");
    var jsonFile = JSON.parse(data);
    agencia = jsonFile.map(function (item) { return item; });
}
catch (error) {
}
var palio = new Autos_1["default"]("Fiat", "Palio", 1998);
var fitito = new Autos_1["default"]("Fiat", "600", 1960);
var registro = new RegistroAutomotor_1.RegistroAutomotor;
registro.consultar("Gol", agencia);
