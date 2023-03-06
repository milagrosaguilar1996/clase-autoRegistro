import Autos from "./Autos";
import { RegistroAutomotor } from "./RegistroAutomotor";
import * as fs from "fs";

let agencia:[] = [];

try {
    const data = fs.readFileSync("./autos.json", "utf8");
    const jsonFile = JSON.parse(data);
    agencia = jsonFile.map((item:any) => item);
} catch (error) {
    
}

let palio:Autos = new Autos("Fiat", "Palio", 1998);
let fitito:Autos = new Autos("Fiat", "600", 1960);

const registro = new RegistroAutomotor;

registro.consultar("Gol", agencia);








