import { Figura } from "./Figura"

export class Pentagono extends Figura {
    lado: number

    constructor(lado: number) {
        super();
        this.lado = lado
    }

    calcularPerimetro(): number {
        return (this.lado * 5)
    }

}