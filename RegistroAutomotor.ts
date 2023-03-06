import Autos from "./Autos";

export class RegistroAutomotor {
    stock(array:Autos[]) {
        console.log(array);
    } 

    actualizar() {

    }

    consultar(auto:string, array:Autos[]) {
        let foundCar:Autos[] = array.filter((car:any) => (array["marca"] === auto) || (array["modelo"] === auto));
        if (foundCar) {
            foundCar.forEach((item:any) => console.log(item));
        } else {
            console.log("auto no encontrado");
        }
    }

    borrar() {

    }

    darDeAlta(auto:Autos, array:Autos[]) {
        array.push(auto);
    }
}