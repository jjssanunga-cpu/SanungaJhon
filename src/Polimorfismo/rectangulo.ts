import { Figura } from "./Figura";

export class Rectangulo extends Figura {
    largo: number;
    ancho: number;

    constructor(largo: number, ancho: number) {
        super();
        this.largo = largo;
        this.ancho = ancho;
    }


    override calcularPerimetro(): number {
        return (this.largo * 2 + this.ancho* 2)
    }
}

